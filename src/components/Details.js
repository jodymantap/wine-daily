import React, {useState, useEffect} from 'react';

import {useParams } from 'react-router-dom';

function Details() {
    let {email} = useParams();
    return (
        <div className="flex flex-wrap justify-between text-center mx-20 my-10">
            <h1>{email}</h1>
            <h1>{localStorage.getItem("nama")}</h1>
            <h1>{localStorage.getItem("telepon")}</h1>
            <h1>{localStorage.getItem("alamat")}</h1>
        </div>
    )
}

export default Details
