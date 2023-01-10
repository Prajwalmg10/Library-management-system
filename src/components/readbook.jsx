import { useState,useEffect } from "react";
import {  useParams } from "react-router-dom";
const ReadBook = () => {
   let[book,setbook]=useState([])
   let params=useParams()
   useEffect(()=>{
        let fetchdat=async()=>{
            let response=await fetch(`http://localhost:1001/books/${params.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchdat()
   },[])
    return ( <div className="readbook">
    <h1>{book.title}</h1>
    <p>{book.shortDescription}</p>
    <p>{book.longDescription}</p>
        
    </div>);
}
 
export default ReadBook;