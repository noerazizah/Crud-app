import React from 'react'
import Lookist from "../../assets/lookist.png"

export default function Header() {
  return (
    <>
      <div className="mx-auto">
        <img
          src={Lookist}
          alt="Logo lookist" class="mx-auto object-contain scale-80"
        />
      </div>
      <div class="container w-[1300px] h-[530px] mx-auto mt-2 rounded-lg">
        <img src="https://source.unsplash.com/1300x530?night" alt="" class="object-contain w-full rounded-xl" />
      </div>
    </>
  );
}