import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const [errors, setErrors] = useState("")
  const stripe = useStripe();
  const elements = useElements();
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
  };
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
        <button
          className="border px-[30px] py-[8px] mt-[20px]"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{errors}</p>
    </div>
  );
};

export default CheckOutForm;
