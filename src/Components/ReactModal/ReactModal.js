import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    console.log(props.setCartCount);
    const { title, image, price, description } = props.products;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.setCartCount();
    };
    const handleShow = () => setShow(true);

    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <img className='w-50 px-3' src={image} alt="" />
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>{description}</Modal.Body>
                    <h2 className='text-center'>${price}</h2>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Add to Cart
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default ReactModal;