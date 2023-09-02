import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styles from "./sidebar.module.css";
import { TfiClose } from "react-icons/tfi";

export default function CartDrawer({ openCart, cartValue, setOpenCart }) {
  const [left, setLeft] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeft({ [left]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 500, padding: "15px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {cartValue?.length === 0 ? (
        <>
          <TfiClose
            onClick={() => setOpenCart(false)}
            className={styles.closeSideBar}
          />
          <h2 className={styles.noItemCart}>No Items in Cart</h2>
        </>
      ) : (
        <>
          <TfiClose
            onClick={() => setOpenCart(false)}
            className={styles.closeSideBar}
          />
          <h3 className={styles.cartHeader}>Your Goodies</h3>
          <div className={styles.cartContainer}>
            {cartValue?.map((elem, i) => {
              return (
                <div className={styles.cartItem}>
                  <img src={elem?.image} alt="" className={styles.cartImage} />
                  <p className={styles.cartTitle}>{elem?.title}</p>
                  <p className={styles.cartPrice}>Price : {elem?.price} $</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Box>
  );
  return (
    <div>
      <Drawer anchor={"left"} open={openCart} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
