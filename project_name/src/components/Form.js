import React, { useState,useEffect } from 'react'
import APIService from './APIService'
function Form(props) {
    const[title,setTitle]=useState(props.article.title)
    const[body,setBody]=useState(props.article.body)
    useEffect(()=>{
      setTitle(props.article.title)
      setBody(props.article.body)
    },[props.article]

    )

    const updateArticle =()=>{
        APIService.UpdateArticle(props.article.id,{title,body})
      .then(resp=>props.updatedData(resp))
      .catch(error=>console.log(error))
    }
    const insertArticle=()=>{
      APIService.InsertArticle({title,body})
      .then(resp=>props.insertedArticle(resp))
      .catch(error=>console.log(error))
    }
  return (
    <div>
        {props.article ?( <div className="mb-3">
        <label htmlFor='title' className='form-label'>Title</label>
        <input type="text" className='form-control' value={title} placeholder='Please enter Title'
        onChange={(e)=>setTitle(e.target.value)}
        //change value in the form to Title
        ></input>
        <label htmlFor='body' className='form-label'>Description</label>
        <textarea row='5' className='form-control' value={body} placeholder='Please Enter Description'
        onChange={(e)=>setBody(e.target.value)}></textarea>
        {
          props.article.id?  <button onClick={updateArticle}
          className='btn btn-success mt-3'>Update</button>:
          <button onClick={insertArticle}
          className='btn btn-success mt-3'>Insert</button>
        }
      
    </div>    ):null}
    
        
        
    </div>
  )
}

export default Form