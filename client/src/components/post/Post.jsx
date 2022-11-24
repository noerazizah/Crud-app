import React from "react";
/*import { Link } from "react-router-dom";*/
import Image from "../../assets/6221846 1.png";
import image from "../../assets/edit (1).png";
import Img from "../../assets/delete.png";

export default function Post({img}) {
  return (
    <body>
    <div class>
      <img
        class="w-[955px] h-[422px] mb-[33.76px] mt-[22px] ml-[52px] mr-[52px] "
        src={Image}
        alt=""
    />
        <div className="flex">
            <span class="text-putih text-[30px] font-[600] font-poppins non-italic  ml-[67.07px] mr-[724.56px] drop-shadow-md">
                My Story
            </span>
            <a>
            <img className="mr-[17.5px] cursor-pointer" 
            src={image}
            alt=""/></a>
            <a>
            <img className="w-[25px] h-[25px] mr-[65.5px] cursor-pointer" 
            src={Img}
            alt=""/></a>
        </div>
        <p className="text-putih text-justify h-[166px] w-[929px] mr-[65px] ml-[65px] mt-[22.14px] font-playfair">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="postInfo ml-[65px] mr-[891x] mt-[10px]"> 
            <span className="text-[#939393]">1 hour ago</span>
        </div>
        
    </div>
    </body>
    ); 
}