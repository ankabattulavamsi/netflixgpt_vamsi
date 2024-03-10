import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import {
  MOVIES_API_KEY,
  Netflix_Logo,
  SUPPORTED_LANGUAGES,
  movieSearchAPI,
  navItems,
} from "../utils/constants";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/langSlice";
import { searchResultMovies } from "../utils/movieSlice";
import useSpeechRecognition from "../Hooks/useSpeechRecognition";
import NavItems from "./NavItems";
import NavLinks from "./NavLinks";

const Header = ({ scroll }: any) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [navList, setNavList] = useState(navItems);
  const [searchResult, setSearchResult] = useState("");
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
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

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
        navigate("/browse");
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

  const handleSearchResult = () => {
    handleSearchMovies();
  };

  const handleSearchMovies = async () => {
    const data = await fetch(
      `${movieSearchAPI}query=${
        text || searchResult
      }&include_adult=true&api_key=${MOVIES_API_KEY}`
    );
    const json = await data.json();

    dispatch(searchResultMovies(json.results));
  };
  const handleNavOnckick = (id: any) => {
    const newNavList = navList.map((nav) => {
      // nav.active = false;
      // if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <div
      className={`fixed w-screen px-8 py-2 bg-gradient-to-r from-black z-50 flex flex-col md:flex-row ${
        scroll > 100 ? "scrolled" : undefined
      }`}
    >
      <img
        className="hidden md:inline-block w-36 mx-auto md:mx-0"
        src={Netflix_Logo}
        alt="img-logo"
      />

      {user && (
        <div className="-mx-6 gap-6 md:gap-0 md:mx-0  md:flex w-screen flex flex-col-reverse md:flex-row justify-between items-center md:items-center ">
          <div className="md:ml-6 ml-0">
            {!showGptSearch && (
              <div className="w-[380px] md:w-[450px] flex justify-between items-center">
                {hasRecognitionSupport ? (
                  <svg
                    onClick={startListening}
                    className="w-6 h-6 text-gray-800 z-10"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 8c.6 0 1 .4 1 1v3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a1 1 0 1 1 2 0v3a6 6 0 0 1-6 6h-1v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2h-1a6 6 0 0 1-6-6V9c0-.6.4-1 1-1Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
                  </svg>
                ) : (
                  <p className="text-red-600 text-lg">
                    You browser has no speech recognition
                  </p>
                )}

                <input
                  value={text || searchResult}
                  className="pl-10  py-2 w-full rounded-l-lg -ml-8"
                  onChange={(e) => setSearchResult(e.target.value)}
                />
                <button
                  onClick={handleSearchResult}
                  className="text-white bg-red-600 px-4 py-2 rounded-r-lg w-36 font-bold tracking-wider"
                >
                  Search
                </button>
              </div>
            )}
          </div>
          <div className="hidden md:inline-block justify-between min-w-96">
            {!showGptSearch && (
              <>
                {!isListening ? (
                  <div className="flex justify-between w-full">
                    {navList.map((nav) => (
                      <a
                        className="text-white"
                        href={nav.path}
                        onClick={() => setActiveLink(nav.title)}
                      >
                        {nav.title}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-white">Your broser currently listening</p>
                )}
              </>
            )}
          </div>
          <div className="flex w-full md:w-auto justify-between">
            {showGptSearch && (
              <select
                // defaultValue={}
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
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4 "
              onClick={handleGptSearchPage}
            >
              {showGptSearch ? "Home page" : "GPT Search"}
            </button>

            <img
              src={user?.photoURL}
              alt="image-photo"
              className="hidden md:inline-block w-10 h-10 rounded-xl"
            />
            <button
              className="text-white mr-6 md:mr-0"
              onClick={onClickhandleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
