import { useState } from "react";
import '../styles/addbook.css'
import {useNavigate} from 'react-router-dom';

const AddBooks = () => {
    let [title, setTitle] = useState([])
    let [pageCount, setPageCount] = useState([])
    let [categories, setCategories] = useState([])
    let [authors, setAuthors] = useState([])
    let [shortDescription, setShortDescriptions] = useState([])
    let [longDescription, setLongDescriptions] = useState([])
    let[thumbnailUrl,setThumbnailUrl]=useState([])
    let navigate=useNavigate()

    let addbook = (e) => {
        e.preventDefault()
        let data={title,pageCount,categories,authors,shortDescription,longDescription,thumbnailUrl}

        fetch(`http://localhost:1001/books`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        alert(`Adding the book to booklist`)
        navigate("/admin/add-book")
    }
    return (<div className="addbooks">
        <h1 style={{textAlign:"center",margin:"0px"}}>ADD BOOKS</h1>
        <div className="forms">
            <form action="" onSubmit={addbook}>
                <div className="addbooks-title">
                    <label htmlFor="title">Title*</label>
                    <input required type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter  Title" />
                </div>
                <div className="addbooks-authors">
                    <label htmlFor="authors">Authors*</label>
                    <input required type="text" name="authors" value={authors} onChange={(e) => { setAuthors(e.target.value) }} placeholder="Enter Authors" />
                </div>
                <div className="addbooks-pageCount">
                    <label htmlFor="pageCount">Page Count*</label>
                    <input required type="numbner" name="pageCount" value={pageCount} onChange={(e) => { setPageCount(e.target.value) }} placeholder="Enter Page Count" />
                </div>
                <div className="addbooks-categories">
                    <label htmlFor="categories">Categories*</label>
                    <input required type="text" name="categories" value={categories} onChange={(e) => { setCategories(e.target.value) }} placeholder="Enter Categories" />
                </div>
                <div className="addbooks-shortDescription">
                    <label htmlFor="shortDescription">Short descriptions*</label>
                    <textarea required type="text" name="shortDescriptions" value={shortDescription} onChange={(e) => { setShortDescriptions(e.target.value) }} placeholder="Enter Short Descriptions" />
                </div>
                <div className="addbooks-longDescriptions">
                    <label htmlFor="longDescriptions">Long descriptions*</label>
                    <textarea required type="text" name="longDescriptions" value={longDescription} onChange={(e) => { setLongDescriptions(e.target.value) }} placeholder="Enter Long Descriptions" />
                </div>
                <div className="addbooks-thumbnailUrl">
                    <label htmlFor="thumbnailUrl">thumbnailUrl*</label>
                    <input required type="text" name="thumbnailUrl" value={thumbnailUrl} onChange={(e) => { setThumbnailUrl(e.target.value) }} placeholder="Enter thumbnailUrl" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>);
}

export default AddBooks;