import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect, useContext } from "react";
import GetProduct from "../Layout/shared/GetProduct";
import Datafetch from "../Layout/shared/Datafetch";
import { contextProvide } from "../AuthContext/UserContext";

const CheckOutForm = () => {
  const [clientSecrate, setClientSecrate] = useState('')
  const [card] = GetProduct();
  const fetchdata = Datafetch();
  const {user} = useContext(contextProvide)
    const [errors, setErrors] = useState("")
    const [payseccess, setPayseccess]= useState('')
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = card.reduce((total, items)=> total + items.price ,0)
  useEffect(()=>{
    fetchdata.post("/paymentintegreate", {price : totalPrice})
    .then((res)=> setClientSecrate(res.data.clientSecret))
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrors(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrors("")
    }

    const {paymentIntent, error : cardError} = await stripe.confirmCardPayment(clientSecrate,{
      payment_method : {
        card : card,
        billing_details : {
            name : user?.displayName || "anonymous",
            email : user?.email || "anonymous",
        }
      }
    });
    if (cardError) {
      console.log("error ",cardError)
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log("success", paymentIntent)
    }
  };
  console.log(clientSecrate)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {
          clientSecrate && <button
        
          className="border px-[30px] py-[8px] mt-[20px]"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        }
      </form>
      <p className="text-red-500">{errors}</p>
    </div>
  );
};

export default CheckOutForm;
