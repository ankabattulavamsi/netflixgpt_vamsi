import React, { useEffect } from "react";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  // const dispatch = useDispatch();
  const appStore = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, password }: any = user.uid;
  //       dispatch(addUser({ uid: uid, email: email, password: password }));
  //     } else {
  //       dispatch(removeUser({}));
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  return <RouterProvider router={appStore} />;
};

export default Body;
