import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo } from "../utils/constants";

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-36 mx-auto md:mx-0" src={Netflix_Logo} alt="img-logo" />

      {user && (
        <div className="flex  items-center">
          <img
            src={user?.photoURL}
            alt="image-photo"
            className="w-10 h-10 rounded-xl"
          />
          <button className="text-white" onClick={onClickhandleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
