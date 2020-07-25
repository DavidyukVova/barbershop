import React, {useState} from 'react';
import classes from './Training.module.css'
import i18n from '../../i18n';
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {connect} from "react-redux";


const FirstSection = ({env}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={classes.firstSection}
             style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/trainingBg.jpg")`}}>
            <div className={classes.contentBlock}>
                <div>
                    <h1 className={classes.firstTitle}>Cartel Barbershop</h1>
                    <h3 className={classes.subTitle}>{i18n.t('Barber Art Training Set')}</h3>
                    <Button
                        size={"lg"}
                        className={classes.centeredButton}
                        variant="outline-secondary"
                        onClick={handleShow}
                    >
                        {i18n.t('Entry')}
                    </Button>
                </div>
            </div>
            <div className={classes.shadow}></div>

            <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {i18n.t('Registration for training')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {env.phone}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        {i18n.t('Close')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps) (FirstSection);