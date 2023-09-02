import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import cart from "../assets/images/cartIcon.png";
import Card from "../components/Card/Card";
import axios from "axios";
import BasicModal from "../components/Modal/Modal";
import CartDrawer from "../components/SideBar/SideBar";

const Loader = () => {
  return <div className={styles.loader}></div>;
};

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  let [loader, setLoader] = useState(true);
  let [openCart, setOpenCart] = useState(false);
  let [modalData, setModalData] = useState({});
  let [dataList, setDataList] = useState([]);
  let [cartValue, setCartValue] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = (elem) => {
    setOpen(true);
    setModalData(elem);
  };
  const handleClose = () => setOpen(false);

  let addToCart = (cartData) => {
    setCartValue([...cartValue, cartData])
  }  
  let openNavBar = () => {
    setOpenCart(true)

  }
 
  let fetchData = async () => {
    try {
      let data = await axios.get("https://fakestoreapi.com/products");

      if (data?.status === 200) {
        setDataList(data?.data);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loader ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.container}>
          <CartDrawer openCart={openCart} setOpenCart={setOpenCart} cartValue={cartValue}/>
          <header className={styles.header}>
            <h2 className={styles.title}>
              LEORAPTOR
              <div className={styles.cartIconContainer} onClick={openNavBar}>
                <img className={styles.cartIcon} src={cart} alt="cart" />
                <div className={styles.cartValue}>{cartValue?.length}</div>
              </div>
            </h2>
          </header>

          <div className={styles.bodyContainer}>
            {dataList.map((elem, i) => {
              return (
                <Card
                  key={i}
                  image={elem.image}
                  title={elem.title}
                  price={elem.price}
                  handleOpen={() => handleOpen(elem)}
                  handleClose={handleClose}
                />
              );
            })}
          </div>
          <BasicModal
            handleClose={handleClose}
            open={open}
            modalData={modalData}
            addToCart = {addToCart}
          />
        </div>
      )}
    </>
  );
};

export default Home;
