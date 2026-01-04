import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast"
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    //To check login seller status
    const fetchSeller = async()=>{
        try {
            const {data} = await axios.get('/api/seller/is-auth');
            if(data.success){
                setIsSeller(true)
            }
            else{
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false);
            console.log(error.message)
        }
    }

    const fetchProducts = async()=>{
      try {
        const {data} = await axios.get('/api/product/list');
        if(data.success){
            setProducts(data.products)
        }
        else{
            toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    //Add to cart Function
    const addToCart = (itemId)=>{
       let cartData = structuredClone(cartItems);
       if(cartData[itemId]){
        cartData[itemId] += 1;
       }
       else{
        cartData[itemId] = 1;
       }
       setCartItems(cartData);
       toast.success("Added To Cart");
    }

    //Update Cart Item
    const updateCartItem = (itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId]= quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    };

    //Total cart items
    const cartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item]
        }
        return totalCount
    }

    //Total Cart Amount
    const totalCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id===items);
            if(cartItems[items]>0){
               totalAmount += cartItems[items]*itemInfo.offerPrice;
            }
        }
        return Math.floor(totalAmount*100)/100
    };

    //Remove Cart Function
    const removeFromCart = (itemId)=>{
      let cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        cartData[itemId] -=1;
        if(cartData[itemId]===0){
            delete cartData[itemId];
        }
        toast.success("removed from cart");
        setCartItems(cartData);
      }
    }

    useEffect(()=>{
        fetchSeller()
        fetchProducts()
    },[])

    {/* Here we pass all the state as a value so we can access through any jsx pages */}
    const value = {navigate,user,setUser,isSeller,setIsSeller,
        showUserLogin,setShowUserLogin,fetchProducts,products,addToCart,updateCartItem,cartCount,
        totalCartAmount,removeFromCart,cartItems,searchQuery,setSearchQuery,axios};
    return (
        <AppContext.Provider value={value}>
           {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider ;