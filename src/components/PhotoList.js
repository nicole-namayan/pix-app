import React,{useState,useEffect} from "react";
import '../App';
import { API_URL } from "../Api";
import axios from 'axios'
import { useAppContext } from "../context/appContext";

const PhotoList = () => {

     const [photos,setPhotos] = useState([]);

     const {favourites, addToFavourites, removeFromFavourites} = useAppContext();
      
     console.log("favourites are",favourites)

     const favouritesChecker = (id) => {
        const boolean = favourites.some((photo)  => photo.id === id);
        return boolean;
     }
    
     useEffect(() => {
        axios.get(API_URL).then(res => {
            console.log(res.data)
            setPhotos(res.data)
        }).catch(err=>console.log(err))
     },[]);

    return (
     <div className="photo-list">
       {photos.map((photo)=> (
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
       ))}
     </div>
    );
 };

export default PhotoList;