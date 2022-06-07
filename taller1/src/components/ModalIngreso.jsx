import React from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';

const ModalIngreso = ({ registroExitoso, closeModalRegistro, registros }) => {

  return (
    <Modal isOpen={registroExitoso}>
        <ModalHeader>
            <div><h3>Registro Exitoso</h3></div>
        </ModalHeader>
        <ModalBody>
            {
              registros.tipoMovimiento === "ingreso" ? "Ingreso agregado con exito" : "Gasto agregado con exito"
            }
            <Button className='mt-2 float-end' variant='secondary' onClick={() => closeModalRegistro()}>Close</Button>
        </ModalBody>
    </Modal>
  )
}

export default ModalIngreso;