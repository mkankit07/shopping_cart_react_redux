import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notifications from "./components/Notifications";
import { uiAction } from "./store/ui-Slice";
let isFirstRender=true
function App() {
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  const cart = useSelector((state) => {
    return state.cart;
  });
  useEffect(() => {
    if(isFirstRender){
      return isFirstRender=false;
    }
    dispatch(uiAction.showNotification({
      open:true,
      message:"Sending Request...",
      type:'warning',
    }))
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-b8234-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(uiAction.showNotification({
        open:true,
        message:"Sent Request to database successfully",
        type:'success',
      }))
    };
      sendRequest().catch(err=>{
      dispatch(uiAction.showNotification({
        open:true,
        message:"Sending Request failed",
        type:'error',
      }))
    });
  }, [cart,dispatch]);

  const notification=useSelector((state)=>state.ui.notification)
  return (
    <div className="App">
      {notification &&<Notifications type={notification.type} message={notification.message}/>}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
