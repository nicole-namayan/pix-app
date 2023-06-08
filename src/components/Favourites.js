import React from "react";
import '../App';
import { useAppContext } from "../context/appContext";

const Favourites = () => {

     const {favourites, addToFavourites, removeFromFavourites} = useAppContext();
      
     console.log("favourites are",favourites);

     const favouritesChecker = (id) => {
        const boolean = favourites.some((photo)  => photo.id === id);
        return boolean;
     };

    return (
     <div className="favourites">
     {favourites.length > 0 ? favourites.map((photo)=> (
        <div  key={photo.id}>
            <div><h4>{photo.title}</h4></div>
            <div><img src={photo.image} alt=""/></div>
            <div>
                {favouritesChecker(photo.id) ? (
                <button onClick={() => removeFromFavourites(photo)}>remove From Favourites</button> 
                ) : (
                <button onClick={() => addToFavourites(photo)}>Add to Favourites</button>
                )}
            </div>
        </div>
       )) :<h1>You don't have any favourite photo yet.</h1>}
       </div>
    );
 };

export default Favourites;