import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Settings from "../../components/settings/Settings";

export default function Setting() {
    return (
        <div>
            <NavBar />
            <Sidebar />
            <Settings />
        </div>
    )
}