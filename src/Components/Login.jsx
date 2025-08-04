import { useState, useRef } from "react";
import Header from "./Header";
import { validateSignIn, validateSignUp } from "../Utils/validateData";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    setErrMsg(isSignIn
      ? validateSignIn(email.current.value, password.current.value)
      : validateSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        ));
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/80 w-1/3 mx-120 my-30 rounded-md"
      >
        <h1 className="font-bold text-3xl p-8 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="border-1 border-white text-white text-lg p-4 mx-8 my-2 w-3/4 rounded-md"
            type="text"
            placeholder="Name"
          ></input>
        )}
        <input
          ref={email}
          className="border-1 border-white text-white text-lg p-4 mx-8 my-2 w-3/4 rounded-md"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="border-1 border-white text-white text-lg p-4 mx-8 my-2 w-3/4 rounded-md"
          type="password"
          placeholder="Password"
        ></input>
        <button
          className="font-bold text-white mx-8 my-2 px-auto py-2 w-3/4 rounded-md bg-red-700 cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-8 my-2 text-red-700 font-bold">{errMsg}</p>
        <p
          className="text-white mx-8 my-4 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignIn ? "New to netflix? Sign up now" : "Already a User? Sign In"}
        </p>
      </form>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-image"
        />
      </div>
    </div>
  );
};

export default Login;