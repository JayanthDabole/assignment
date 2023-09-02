import React, { useState } from 'react'
import styles from './card.module.css'


const Card = ({image,title,price, handleOpen, handleClose}) => {
 

  return (
    <>
     <div className={styles.cardContainer}>
        <img src={image} alt="Image" className={styles.cardImage} />
        <p>{title}</p>
        <p>Price : {price} $</p>
        <div  className={styles.buttonContainer}>
           <button className={styles.buyButton} >Buy now</button>
        <button className={styles.viewButton} onClick={handleOpen}>View Details</button>
        </div>
    </div>
    
  
    
    </>
  )
}

export default Card