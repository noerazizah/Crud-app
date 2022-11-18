import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
<<<<<<< HEAD
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    };
=======
    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");
    // const [file, setFile] = useState(null);
    // const { user } = useContext(Context);
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newPost = {
    //       username: user.username,
    //       title,
    //       desc,
    //     };
    //     if (file) {
    //       const data =new FormData();
    //       const filename = Date.now() + file.name;
    //       data.append("name", filename);
    //       data.append("file", file);
    //       newPost.photo = filename;
    //       try {
    //         await axios.post("/upload", data);
    //       } catch (err) {}
    //     }
    //     try {
    //       const res = await axios.post("/posts", newPost);
    //       window.location.replace("/post/" + res.data._id);
    //     } catch (err) {}
    //   };
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc

    return (
        <div className="pt-12">
            <img
                className="ml-36 w-[80vw] h-80 rounded-xl object-cover"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="relative">
                <div className="flex ml-36 item-center">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput bg-biru-abu"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="flex ml-36 item-center">
                    <textarea
                        className="writeInput writeText bg-biru-abu"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit">
<<<<<<< HEAD
                    Publish
                </button>
            </form>
=======
                Publish
            </button>
            </form>
            
>>>>>>> a659170c255cd6a16abf12700cc606fde771a1dc
        </div>
    );
}