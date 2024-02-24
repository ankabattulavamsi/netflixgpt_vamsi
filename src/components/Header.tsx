import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const user = useSelector((store: any) => store?.user);
  const showGptSearch = useSelector((store: any) => store?.gpt?.showGptSearch);
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

  const handleGptSearchPage = () => {
    dispatch(toggleGptSearchPage());
  };

  const handleSelectLan = (e: any) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-36 mx-auto md:mx-0" src={Netflix_Logo} alt="img-logo" />

      {user && (
        <div className="-mx-5 md:mx-0  flex  justify-between items-center md:items-center ">
          <div>
            {showGptSearch && (
              <select
                onChange={handleSelectLan}
                className="mr-4 p-2 m-2 bg-gray-900 text-white rounded-lg"
              >
                {SUPPORTED_LANGUAGES.map((language: any) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4 "
            onClick={handleGptSearchPage}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="image-photo"
            className="hidden md:inline-block w-10 h-10 rounded-xl"
          />
          <button
            className="text-white ml-0 md:ml-2"
            onClick={onClickhandleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
