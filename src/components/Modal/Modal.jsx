import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './modal.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: '5px',
  display:'flex',
  p:4,
  pt:2,
  pb:3,
  flexDirection:'column',
  justifyContent:"center",
  alignItems:'center', border:'none',
  gap:"15px"
};



export default function BasicModal({handleClose, open,modalData, addToCart}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
      
         <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Add to Cart</h2>
            <TfiClose onClick={handleClose} className={styles.closeModal}/>
         </div>
        <img src={modalData?.image} alt="Image" className={styles.modalImage} />
        <p>{modalData?.title}</p>
        <p className={styles.ratingContainer}> {modalData?.rating?.rate}   <AiOutlineStar className={styles.ratingIcon}/></p>
        <p>Price : {modalData?.price} $</p>
        <div  className={styles.buttonContainer}>
           <button className={styles.closeButton} onClick={handleClose} >Close</button>
        <button className={styles.addToCartButton} onClick={()=>addToCart(modalData)}>Add to Card</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

