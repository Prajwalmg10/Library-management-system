import { useState,useEffect } from "react";
import '../styles/booklist.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookList = () => {
    let[book,setbook]=useState([])
    let navigate=useNavigate()
    let location=useLocation()

    useEffect(()=>{

        let fetchdata=async()=>{
            let response=await fetch("http://localhost:1001/books")
            let data=await response.json()
            setbook(data)
        }
        fetchdata()
    },[book])
    let handledelete= (id,title)=>{
         fetch(`http://localhost:1001/books/${id}`,{
                method:'DELETE'
         });
         alert(`${title} will be delteted permanently`)
    }
    let handleremove=(id,title)=>{
        setbook(book.filter(d=>d.id!=id))
        alert(`${title} will be removed`)
    }
    let read=(id)=>{
       if (location.pathname=='/admin/book-list/') {
        navigate(`/admin/book-list/${id}`)
       } else {
        navigate(`/user/book-list/${id}`)
       }
    }

    return (<div className="booklist">
        <div className="detail">
        <h1>Book List</h1>
        <h2>Number of Books : {book.length}</h2>
        </div>
             {book.map((d)=>(
                <div className="books">
                    <div className="booksimg">
                    <img src={d.thumbnailUrl} alt="" />
                    </div>
                    <div className="booksinfo">
                    <h2>{d.title}</h2>
                    <h4>Authors :{d.authors.toString()}</h4> 
                    <h5>Page Count : {d.pageCount}</h5>
                    <h4>Category : {d.categories.toString()}</h4> <br />
                    <button id="read"  onClick={()=>{read(d.id)}}>Read Mode</button>
                    {location.pathname=='/admin/book-list' && <button className="delete" onClick={()=>{handledelete(d.id,d.title)}}>Delete</button>}
                    </div>
                </div>
             ))}
    </div>);
}

export default BookList;