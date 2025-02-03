"use client";
import { useState } from "react";
import "../../styles/SearchBar.css";

/**
 * SearchBar Component
 *
 * This component provides an input field for searching events.
 * It sends the search query to the parent component via the `onSearch` prop.
 *
 * @param {Function} onSearch - A function that receives the search query string.
 */

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  /**
   * Handles input changes by updating the state and sending the query to the parent.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="input-box">
      {/* Search Icon */}
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#F9FBFF" />
        <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#E4ECF2" />
        <path d="M29.8247 28.9258L23.7683 22.8125C24.3265 22.1354 24.7679 21.3737 25.0925 20.5273C25.4171 19.668 25.5794 18.763 25.5794 17.8125C25.5794 16.7318 25.3716 15.7161 24.9562 14.7656C24.5537 13.8151 23.9955 12.9883 23.2814 12.2852C22.5803 11.582 21.7559 11.0286 20.8082 10.625C19.8604 10.2083 18.8543 10 17.7897 10C16.7121 10 15.6994 10.2083 14.7517 10.625C13.804 11.0286 12.9731 11.582 12.259 12.2852C11.5579 12.9883 11.0062 13.8151 10.6037 14.7656C10.2012 15.7161 10 16.7318 10 17.8125C10 18.8932 10.2012 19.9089 10.6037 20.8594C11.0062 21.8099 11.5579 22.6367 12.259 23.3398C12.9731 24.043 13.804 24.6029 14.7517 25.0195C15.6994 25.4232 16.7121 25.625 17.7897 25.625C18.7634 25.625 19.6852 25.4557 20.555 25.1172C21.4249 24.7786 22.2038 24.3099 22.8919 23.7109L28.9289 29.8047C29.0587 29.9349 29.208 30 29.3768 30C29.5456 30 29.6949 29.9349 29.8247 29.8047C29.9416 29.6875 30 29.5378 30 29.3555C30 29.1862 29.9416 29.043 29.8247 28.9258ZM17.7897 24.3945C16.8809 24.3945 16.024 24.2253 15.2191 23.8867C14.4271 23.5352 13.7326 23.0599 13.1353 22.4609C12.5511 21.862 12.0837 21.1654 11.7332 20.3711C11.3957 19.5768 11.2269 18.724 11.2269 17.8125C11.2269 16.901 11.3957 16.0482 11.7332 15.2539C12.0837 14.4596 12.5511 13.763 13.1353 13.1641C13.7326 12.5651 14.4271 12.0964 15.2191 11.7578C16.024 11.4062 16.8809 11.2305 17.7897 11.2305C18.6855 11.2305 19.5294 11.4062 20.3213 11.7578C21.1263 12.0964 21.8208 12.5651 22.4051 13.1641C23.0023 13.763 23.4697 14.4596 23.8072 15.2539C24.1577 16.0482 24.333 16.901 24.333 17.8125C24.333 18.724 24.1577 19.5768 23.8072 20.3711C23.4697 21.1654 23.0023 21.862 22.4051 22.4609C21.8208 23.0599 21.1263 23.5352 20.3213 23.8867C19.5294 24.2253 18.6855 24.3945 17.7897 24.3945Z" fill="#777E90" />
      </svg>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
