import React, { useState } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';

const ModalGasto = ({ errorGasto }) => {
    const [open, setOpen] = useState(errorGasto);

    const closeModal = () => setOpen(false);
    
  return (
    <Modal isOpen={open}>
        <ModalHeader>
            <div><h3>Error</h3></div>
        </ModalHeader>
        <ModalBody>
            No cuenta con saldo suficiente para realizar este movimiento
            <Button className='mt-2 float-end' variant='secondary' onClick={closeModal()}>Close</Button>
        </ModalBody>
    </Modal>
  )
}

export default ModalGasto