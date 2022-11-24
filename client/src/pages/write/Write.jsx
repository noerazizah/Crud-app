import React from "react";
import Imgg from "../../assets/6221846 1.png";
import Imgee from "../../assets/Vector.png";
import "./Write.css";

export default function Write() {
  return (
    <div class="write">
        <img
        className="writeImg"
        src={Imgg}
        alt=""
      />
      <form className="writeForm">
        <div class="flex-container">
            <img className="Iconadd"
            src={Imgee}
            alt=""
        />
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" >
          Publish
        </button>
      </form>
    </div>
  );
}