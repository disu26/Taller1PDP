import React, { useEffect } from 'react'
import ButtonCloseModal from './ButtonCloseModal';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

const ModalGasto = ({ errorGasto, closeModal }) => {

  return (
    <Modal isOpen={errorGasto}>
        <ModalHeader>
            <div><h3>Error</h3></div>
        </ModalHeader>
        <ModalBody>
            No cuenta con saldo suficiente para realizar este movimiento
            <ButtonCloseModal closeModal={closeModal}/>
        </ModalBody>
    </Modal>
  )
}

export default ModalGasto