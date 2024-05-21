import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AiFillProduct } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [diss, setdisa] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const textRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();
  const handelLoginemailpass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handelGooleSignIn = () => {};
  const handelCaptcha = ()=>{
    if(validateCaptcha(textRef.current.value)){
        setdisa(false)
    }else{
        setdisa(true)
    }
  }
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <div className="flex items-center text-[30px] gap-[5px]">
                <AiFillProduct />
                <span>Prod Genius</span>
              </div>
              <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
                Welcome back
              </h1>
              <h1 className="mt-4 text-2xl font-medium  capitalize lg:text-3xl dark:text-white">
                login to your account
              </h1>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form
                className="w-full lg:max-w-xl"
                onSubmit={handelLoginemailpass}
              >
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="password"
                    type="password"
                    className="block w-full px-5 py-3  border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-8 md:flex md:items-center">
                  <button
                    disabled={diss}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                  <Link
                    href="#"
                    className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div>
                  <LoadCanvasTemplate />
                </div>
              </form>
              <div>
              <input
                    name="captcha"
                    type="text"
                    ref={textRef}
                    className="block w-full px-5 py-3  border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>
                <button onClick={handelCaptcha}>Match</button>
              <button
                className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full"
                onClick={handelGooleSignIn}
              >
                <span className="mx-auto flex items-center gap-[10px]">
                  {" "}
                  <FaGoogle /> Sign in with Google
                </span>
              </button>
              <p className="mt-[20px] text-center">
                If You Have No Account Please{" "}
                <Link to="/register" className="text-blue-500">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
