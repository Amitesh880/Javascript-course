import { useState } from "react";

export function Createtodo() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");


    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            settitle(e.target.value);
        }} /> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setdescription(e.target.value);
        }}/> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },

                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("todo added");
                })
        }} >Add to Todo</button>
    </div>
}