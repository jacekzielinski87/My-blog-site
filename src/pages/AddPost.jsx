/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../Firebase-config';
import { useNavigate } from 'react-router-dom';

function AddPost ({isAuth}) {

  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const postCollectioRef = collection(db, "posts")
  let navigate = useNavigate();


  // eslint-disable-next-line no-unused-vars
  const createPost = async () => {
    await addDoc(postCollectioRef, {
        title,
        postText, 
        author:{name: auth.currentUser.displayName, id: auth.currentUser.uid},
    });
  navigate('/');
};

useEffect(() => {
  // eslint-disable-next-line no-undef
  if (!isAuth) {
    navigate('/login');
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer"></div>
       <h1>Create Post</h1>
       <div className="inputGp">
        <label>Title:</label>
        <input placeholder='Title...' 
          onChange={(event) => {
          setTitle(event.target.value)}}
        />
        </div>
       <div className="inputGp">
       <label>Post:</label>
       <textarea placeholder='Post...'
          onChange={(event) => {
          setPostText(event.target.value)}}/>
       </div>
       <button onClick={createPost}>Submit Post</button>
    </div>
  )
}

export default AddPost;