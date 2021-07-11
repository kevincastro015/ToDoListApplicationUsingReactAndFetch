import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "../component/button";
import { Context } from "../store/appContext";

export const Name = () => {
    const {store, actions } = useContext((Context));
    const [state, setState] = useState("");
    console.log("store", store.data);
    return (
            <input onChange={e => setState(e.target.value)} />
            <button onClick={() => actions.updateArray(state)}>Update</button>

            {store.data.map((e, index) => (
                <div key={index} className="text-center mt-5">
                    <p>{e}</p>
                    <button naming={e} style={"btn btn-success"} index={index} />
                </div>
            ))}
    );
};
