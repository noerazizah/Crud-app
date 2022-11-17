import React from 'react';
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
import Image from "../../Image/download.jpeg";


export default function Sidebar() {
  return (
    <div class="my-12">
    <div className="sidebar fixed flex flex-col min-h-full p-[10px] w-[338px] h-[550px] mr-11 my-auto overflow-y-auto overflow-x-hidden right-0 bg-biru-abu rounded-3xl">
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle m-5  left-[1154px] top-[200px] text-center font-playfair font-normal text-judul2 text-white">ABOUT ME</span>
        <img
          src={Image}
          alt="" class="w-[225px] h-[225px] left-[1085px] top-[234px] my-0 rounded-3xl object-cover"
        />
        <p className="p-6 text-center h-[153px] left-[1095px] top-[524px] font-playfair font-normal text-teks1 text-white">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Life">
              Life
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Music">
              Music
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Sport">
              Sport
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Style">
              Style
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Tech">
              Tech
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" to="/posts?cat=Cinema">
              Cinema
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </div>
    </div>
  );
}