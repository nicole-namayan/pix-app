import React,{useState,useEffect} from "react";
import '../App';
import { API_URL } from "../Api";
import axios from 'axios'

const PhotoList = () => {

     const [photos,setPhotos] = useState([]);
    
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
            <div><button>Add to Favourites</button></div>
        </div>
       ))}
     </div>
    );
 };

export default PhotoList;