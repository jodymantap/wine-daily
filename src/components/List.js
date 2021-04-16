import {Link} from 'react-router-dom'; 
import {useState, useEffect} from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import CardLoading from './CardLoading';
import InfiniteScroll from 'react-infinite-scroll-component';


function List() {
    const [loading, setLoading] = useState(true);
    const [productData, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const handleCart = (qty, name) => {
        checkInternetStatus();
        if (qty) {
            dispatch({type: "addtocart"});
            toast.success(name + " added to cart");
        }
        else toast.error(name + " was sold out!");
    }

    const handleBookmark = (name) => {
        checkInternetStatus();

            toast.success(name + " bookmarked");
    }

    function checkInternetStatus() {
        if(!navigator.onLine) {
            toast.error("Oops! You're offline. Please check your network connection...");
        }
    }

    const getNextData = () => {
        setCurrentPage(currentPage+1)
        axios.get(
            `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
            )
            .then(response => {
                setData(productData.concat(response.data.value.products));
                setLoading(false);
            })
    } 

    useEffect(() => {
        checkInternetStatus();
        if (currentPage == 1) {
            axios.get(
            `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
            )
            .then(response => {
                setData(productData.concat(response.data.value.products));
                setLoading(false);
            })
        }
    }, [])
    
    return (
      <div className="w-10/12 mt-24 lg:mt-20 mb-5 mx-auto">
          <InfiniteScroll
            dataLength={productData.length} //This is important field to render the next data
            next={() => getNextData()}
            hasMore={true}
            loader={<CardLoading/>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
            }>
          {loading ? <CardLoading/> : (
          <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
                    {productData && productData.map((e, i) => (
                                
                                <div className="shadow-md h-full hover:shadow-2xl">
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={e.image} alt="test" className="h-52 lg:block md:block hidden w-full object-contain" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                    <img src={e.image} alt="test" className="h-52 lg:hidden md:hidden w-full object-contain" />
                                    <div className="w-5/6 mx-auto pb-4 pt-2">
                                        <p className="border border-solid border-yellow-600 px-2 text-yellow-600 text-sm w-max text-center my-2 rounded-sm">{e.grapeVarietes.slice(0, 25)}{e.grapeVarietes.length > 25 ? (<span>...</span>) :null}</p>
                                        <Link to={`/details/${e.id}`}>
                                            <h3 className="font-bold text-red-900 mt-4">{e.name} {e.vintageYear !== "0" ? (<span>{e.vintageYear}</span>) :null} {e.name.length < 31 ? (<span className="opacity-0">DummyTextToFillSpaces</span>) : null}</h3>
                                        </Link>
                                        <p className="text-sm mb-5 mt-1">{e.region}, {e.country}</p>                   
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <p className="font-bold text-red-900 text-sm lg:text-base">S$ {e.price.toString().includes(".") ? e.price : e.price + ".00"}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-red-900 text-sm lg:text-base">{e.qty < 1 ? "sold out" : null} {e.qty <=5 && e.qty > 0 ? e.qty + " left" : null}</p>
                                            </div>
                                        </div>
                                        <div className="grid mt-5">
                                            <button onClick={() => handleCart(e.qty, e.name)} className={`bg-red-900 rounded-lg text-yellow-500 py-2 font-bold focus:outline-none transition duration-150 transform hover:-translate-y-1 ${e.qty < 1 ? "opacity-50" : ""} border-2 border-red-900`}>ADD TO CART</button>
                                            <button onClick={() => handleBookmark(e.name)} className="rounded-lg border-2 border-red-900 text-red-900 py-2 mt-2 focus:outline-none">SAVE FOR LATER</button>
                                        </div>
                                    </div>
                                </div> 
                    ))}
          </div>
          )}
          </InfiniteScroll>
      </div>
    );
  }
  
  export default List;
  