import React, {useState, useEffect} from "react";


const Search = (props) => {

  const {cityName} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    cityName(e.target.city.value)
  }
  



  return (
    <section>
      <h2>Find the weather in a city</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" name="city" placeholder="City"/>
          <input type="submit" value="Check out weather" />
      </form>
    </section>
 ) ;
};

export default Search;
