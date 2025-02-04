"use client";
import React, { Fragment, useState } from "react";
import { SignInFlow } from "../types ";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <Fragment>
      <div className="flex justify-center items-center bg-[#5C3B58] h-full ">
        <div className="md:h-auto md:w-[420px]">
          {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
        </div>
      </div>
    </Fragment>
  );
};

export default AuthScreen;
