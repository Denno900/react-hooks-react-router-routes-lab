import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
            <div key={director.id}>
              <h2 key={director.id}>{director.name}</h2>
              {director.movies.map((movie, index)=><ul key={index}><li>{movie}</li></ul>)}
            </div>
          
          )
        })}
  </div>;
}

export default Directors;
