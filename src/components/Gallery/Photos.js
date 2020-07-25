import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import classes from './Gallery.module.css'


const Photos = ({photo, index}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Col md={6}>
                <img src={process.env.PUBLIC_URL + photo} alt={index} onClick={handleShow}/>
            </Col>

            <Modal size={"lg"} show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <img className={classes.fullImage} src={process.env.PUBLIC_URL + photo} alt={'full' + index}/>
            </Modal>
        </React.Fragment>
    )
};
export default Photos;