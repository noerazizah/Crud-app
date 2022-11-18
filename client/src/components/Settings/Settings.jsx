import React from "react";
// import { Link } from "react-router-dom";
import "./Settings.css";
import people from "../../assets/people.png"
import pencil from "../../assets/pencil.png"

export default function Settings() {
    return (
        <div class="settings">
            <div class="settingtitle">
                Settings
            </div>
            <div class="editbutton">
                <div class="border">
                <div class="changetitle">
                        Change
                </div>
                <img class="pencil"
                    src={pencil}
                    alt="pencil logo"
                />
                </div>
            </div>
            <div class="changeborder">
                <img class="imgset"
                src={people}
                alt="prof icon"
                />
                <img class="imgset2"
                src={pencil}
                alt=""
                />
                <div class="changetext">
                    Change Profile picture
                </div>
            </div>
            <div class="nameborder">
                <div class="nametitle">
                    Username
                </div>
                <div class="thename">
                    Fanny Tifanny
                </div>
                <div class="line">
                </div>
            </div>
            <div class="emailborder">
                <div class="emailtitle">
                    Email
                </div>
                <div class="emailname">
                    youremail@mail.com
                </div>
                <div class="line2"></div>
            </div>
            <div class="passwordborder">
                <div class="passwordtitle">
                    Password
                </div>
                <div class="passwordname">
                    ********
                </div>
                <div class="line3"></div>
            </div>
            <div class="deleteacc">
                Delete Account
            </div>
        </div>
);
}