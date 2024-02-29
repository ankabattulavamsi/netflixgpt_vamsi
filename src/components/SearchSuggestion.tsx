import React from "react";

const SearchSuggestion = (props: any) => {
  const { suggestionName, listInSearch } = props;
  return (
    <div
      onClick={listInSearch}
      className="flex items-center hover:shadow-lg py-2 cursor-pointer h-300"
    >
      <svg
        className="h-5 w-5 text-white ml-4 mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="7" />{" "}
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
      <p className="text-white text-lg">{suggestionName}</p>
    </div>
  );
};

export default SearchSuggestion;
