/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState  } from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../Firebase-config';


function Home({isAuth}) {
  const [postsLists, setPostLists] = useState([]);
  const postCollectioRef = collection(db, "posts")

 useEffect (() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectioRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();
  }, []);

 return (
    <div className='homePage'>
      {postsLists.map((post) => {
        return (
        <div 
          key={post.id} className='post'>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className='postTextContainer'>{post.postText}</div>
        </div>
        );
      })}
    </div>
  );
}

export default Home;