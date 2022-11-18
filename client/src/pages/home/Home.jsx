import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header"
<<<<<<< HEAD
import NavBar from '../../components/navbar/NavBar'
import Posts from "../../components/posts/Posts"
import Sidebar from '../../components/sidebar/Sidebar'
=======
import NavBar from '../../components/navbar/NavBar';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Write from '../write/Write';
import axios from "axios"
import {useLocation} from "react-router";
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc

export default function Home() {
    // const [posts,setPosts]= useState([]);
    // useEffect(()=>{
    //     const fetchPosts = async ()=>{
    //         const res = await axios.get("/posts" + search);
    //         setPosts(res.data);
    //     };
    //     fetchPosts();
    // },[search])

    return (
        <>
<<<<<<< HEAD
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
=======
        <div>
            <Header />
            {/* <div className="home">
                <Posts posts={posts}/>
                <Sidebar/> */}
            {/* </div> */}
        </div>
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc
        </>
    )
}
