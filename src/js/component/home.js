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
    )
}
