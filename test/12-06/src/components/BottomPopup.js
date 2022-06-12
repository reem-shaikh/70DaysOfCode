import React from 'react'
import {Modal, Button} from 'react-bootstrap';

const BottomPopup = (props) => {
    //props send from App.js 
    //showModal (state which signifies whether the popup should be displayed or not), closeModal(set the showModal state to false), modalData (state which is responsible for setting data inside the popup)
  return (
    <>
      <Modal
        //show the popup based on showModal state, true or false?
        show={props.showModal}
        //close the popup 
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-60w"
        style={{backgroundColor: "white"}}>

        <Modal.Body style={{display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
              <p style={{marginLeft:"40px"}}>You have suscribed to {props.modalData?.user?.name} channel!</p>
                <Button variant="secondary" onClick={props.closeModal} 
                style={{fontSize:"10px", backgroundColor:"white", borderColor:"white", borderRight:"5px"}}> ❌</Button>
               
        </Modal.Body>
      
      </Modal>
    </>
  )
}

export default BottomPopup