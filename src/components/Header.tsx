import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store: any) => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickhandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("signout error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser({}));
        navigate("/");
      }
    });

    //Unsubscribe when component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="img-logo"
      />

      {user && (
        <div className="flex  items-center">
          <img
            src={user?.photoURL}
            alt="image-photo"
            className="w-10 h-10 rounded-xl"
          />
          <button onClick={onClickhandleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
