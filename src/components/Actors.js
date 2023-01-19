import React from "react";
import { actors } from "../data";

function Actors() {
  return <>
    <h1>Actors Page</h1>
        {actors.map((actor) => {
          return (
            <div key={actor.id}>
              <h2>Name: {actor.name}</h2>
              <p>Movies</p>
              {actor.movies.map((movie, index)=><ul key={index}><li>{movie}</li></ul>)}
            </div>         
          )
        })}
    </>;
}

export default Actors;
