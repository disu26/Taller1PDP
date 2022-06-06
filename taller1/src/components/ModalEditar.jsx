import React from 'react'
import Form from './form'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const ModalEditar = ({ editing, movimiento }) => {
  return (
    <Modal isOpen={editing}>
        <ModalHeader>
            <div><h3>Editar Movimiento</h3></div>
        </ModalHeader>
        <ModalBody>
            <Form />
        </ModalBody>
        
    </Modal>
  )
}

export default ModalEditar