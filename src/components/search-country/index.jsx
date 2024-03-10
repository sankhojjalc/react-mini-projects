/**
 * Implement a dynamic search of countries- DONE
 * Render the capital of the country when user clicks search button -  DONE
 */

import { useState, useEffect } from "react";
import style from "./index.module.css";

export const CountrySearch = () => {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchCountryList = async () => {
    const list_raw = await fetch(
      `https://restcountries.com/v3.1/name/${input}`
    );
    const list = await list_raw.json();
    const listOfFive = list?.slice(0, 5);
    const filterCountryName = listOfFive
      ?.map((item) => item.name.common)
      .filter((name) => name);

    setCountryList(filterCountryName);
  };

  const handleSelectCountry = async (country) => {
    const country_raw = await fetch(
      `https://restcountries.com/v3.1/name/${country.target.innerText}?fullText=true`
    );
    const countrySelected = await country_raw.json();

    setSelectedCountry(countrySelected);
  };

  useEffect(() => {
    input.length > 2 && fetchCountryList();
    if (input.length === 0) {
      setCountryList([]);
    }
  }, [input]);

  return (
    <div className={style.wrapper}>
      <div className={style.searchWrapper}>
        <div className={style.searchWrapperChild}>
          <input
            placeholder="Search Country..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          {countryList.length > 0 && (
            <div className={style.search}>
              <ul>
                {countryList?.map((list) => (
                  <li key={list} onClick={(e) => handleSelectCountry(e)}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {selectedCountry?.length > 0 && input.length > 0 && (
          <>
            <h3 className={style.capital}>
              Selected Country: {selectedCountry?.[0]?.name?.common}
            </h3>
            <h3 className={style.capital}>
              Capital: {selectedCountry?.[0]?.capital?.[0]}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};
