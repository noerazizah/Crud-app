import React from "react";
import SettingComp from "../../components/Settings/Settings";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";

export default function Setting() {
    return (
        <div>
            <NavBar />
            <Sidebar />
            <SettingComp/>
        </div>
    )
}