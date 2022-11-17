export default function Write() {
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
            </form>
            <button className="writeSubmit" type="submit">
                Publish
            </button>
        </div>
    );
}