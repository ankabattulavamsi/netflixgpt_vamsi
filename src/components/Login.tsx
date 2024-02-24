import React, { useRef, useState } from "react";
import Header from "./Header";
import { validationForm } from "../utils/ValidationForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_Image_URL, Photot_Url } from "../utils/constants";

const Login = () => {
  const [signInUser, setSignInUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name: any = useRef(null);
  const email: any = useRef(null);
  const password: any = useRef(null);

  const handleSignInUser = () => {
    setSignInUser(!signInUser);
  };

  const onHandleSubmitForm = () => {
    const message: any = validationForm(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!signInUser) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user: any = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: Photot_Url,
          })
            .then(() => {
              const { uid, email, password, displayName, photoURL }: any =
                auth.currentUser;
              dispatch(
                addUser({
                  uuid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error?.message);
            });
        })
        .catch((error) => {
          const errorCode: any = error.code;
          const errorMessage: any = error.message;
          // ..
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover"
          src={Background_Image_URL}
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e: any) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80
      "
      >
        <h1 className="font-bold text-xl md:text-2xl">
          {signInUser ? "Sign In" : "Sign Up"}
        </h1>
        {!signInUser && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-transparent border-2 border-zinc-600 rounded-lg"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-transparent border-2 border-zinc-600 rounded-lg"
          placeholder="Email or phone number "
          type="email"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-transparent border-2 border-zinc-600 rounded-lg"
          placeholder="Password"
          type="password"
        />
        <p className="text-red-700 text-lg py-1">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg text-lg tracking-wide"
          onClick={onHandleSubmitForm}
        >
          {signInUser ? "Sign in" : "Sign Up"}
        </button>

        <div className="text-white" onClick={handleSignInUser}>
          {signInUser ? (
            <p>
              <span className="text-stone-400 cursor-pointer">
                New to Netflix?
              </span>{" "}
              <span> Sign Up Now</span>
            </p>
          ) : (
            <p>
              <span className="text-stone-400 cursor-pointer">
                Already registered?
              </span>{" "}
              <span> Sign In Now.</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
