import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

const ButtonCloseModal = ({closeModal}) => {
    const [close, setClose] = useState(false);

    useEffect(() => {
      closeModal()
    }, [close]);

  return (
    <Button className='mt-2 float-end' variant='secondary' onClick={() => setClose(true)}>Close</Button>
  )
}

export default ButtonCloseModal