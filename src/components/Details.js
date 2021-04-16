import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function Details() {
    let {id} = useParams();
    const [details, setDetails] = useState({});
    const [price, setPrice] = useState(0); 
    const [name, setName] = useState("No Name"); 
    const [description, setDescription] = useState("No Description"); 
    const dispatch = useDispatch();
    const handleCart = (qty, name) => {
        if (qty > 1) {
            dispatch({type: "addtocart"});
            toast.success(name + " added to cart");
        }
        else toast.error(name + " was sold out!");
    }
    const handleBookmark = (name) => {
        toast.success(name + " bookmarked");
    }
    useEffect(() => {
        axios.get(
            `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}`
            )
            .then(response => {
                setDetails(response.data.value);
                setPrice(response.data.value.price);
                setName(response.data.value.name);
                setDescription(response.data.value.description);

            })
    }, [])
    return (
        <div>
            <Link to="/">
                <button className="lg:ml-20 md:ml-18 ml-11 mt-5 mb-1 rounded-full bg-red-900 text-yellow-500 px-3 font-semibold py-1 focus:outline-none">Browse all</button>
            </Link>
                <button className="mt-5 mb-1 lg:inline-block md:inline-block hidden ml-2 rounded-full bg-red-900 text-yellow-500 px-3 font-semibold py-1 focus:outline-none">Products {">"} Detail {">"} {name}</button>
        <div className="flex lg:flex-nowrap md-flex-nowrap flex-wrap lg:mx-20 md:mx-18 mx-auto border p-11 rounded-xl shadow-lg">
            <div className="flex lg:w-auto md:w-auto w-full justify-center">
                <TransformWrapper>
                    <TransformComponent>
                        <img className="lg:h-96 md:h-96 h-44" src={details.image} alt=""/>
                    </TransformComponent>
                </TransformWrapper>
            </div>
            <div className="lg:ml-11 w-full">
                <h1 className="text-red-900 lg:text-4xl text-lg font-medium">{name}</h1>
                <h1 className= "lg:text-xl text-md mt-2 text-yellow-500 font-normal">{details.grapeVarieties} {details.vintageYear}</h1>
                <div className="mt-8 flex items-center justify-between lg:flex-nowrap md:flex-nowrap flex-wrap">
                    <h1 className="lg:text-xl md:text-xl text-lg text-red-900 font-semibold">S$ {price.toString().includes(".") ? price : price + ".00"}</h1>
                    <div className="">
                        <button onClick={() => handleCart(details.qty, details.name)} className={`bg-red-900 lg:mt-0 md:mt-0 mt-2 rounded-lg lg:w-auto md:w-auto w-full text-yellow-500 py-2 px-5 font-bold focus:outline-none transition duration-150 transform hover:-translate-y-1 ${details.qty < 1 ? "opacity-50" : ""} border-2 border-red-900`}>ADD TO CART</button>
                        <button onClick={() => handleBookmark(name)} className="rounded-lg border-2 lg:w-auto md:w-auto w-full px-5 border-red-900 lg:ml-2 md:ml-2 text-red-900 py-2 mt-2 focus:outline-none">SAVE FOR LATER</button>
                    </div>
                </div>
                <div className="flex justify-between mt-8 lg:flex-nowrap md:flex-nowrap flex-wrap">
                    <div className="lg:mr-0 md:mr-0 mr-3">
                        <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Region</h1>
                        <h1 className="lg:text-lg md:text-lg text-md text-red-900 lg:mb-0 md:mb-0 mb-5">{details.region}, {details.country}</h1>
                    </div>
                    <div>
                        <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Producer</h1>
                        <h1 className="lg:text-lg md:text-lg text-md text-red-900">{details.producer}</h1>
                    </div>
                    <div>
                        <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Bottle</h1>
                        <h1 className="lg:text-lg md:text-lg text-md text-red-900">{details.bottleSize}ml</h1>
                    </div>
                    <div>
                        <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Alcohol</h1>
                        <h1 className="lg:text-lg md:text-lg text-md text-red-900">{details.alcohol}%</h1>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Description</h1>
                    <h1 className="lg:text-lg md:text-lg text-md text-red-900">{description && description.slice(17)}</h1>
                </div>
                <div className="mt-5">
                    <h1 className="opacity-75 text-yellow-700 lg:text-sm md:text-sm text-xs">Tasting Notes</h1>
                    <h1 className="lg:text-lg md:text-lg text-md text-red-900">{details.tastingNotes && details.tastingNotes}</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Details
