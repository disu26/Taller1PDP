import React, { useState } from "react";
import Movimiento from "./Movimiento";
import { FcSearch } from "react-icons/fc";
import { Col, Form, Row } from "reactstrap";

const ListaMovimientos = (props) => {
    const [frmState, setFrmState] = useState({
        busqueda: '',
        movimiento: ''
    });

  const deleteMovimiento = (movimiento) => {
    const newMovimientos = props.movimientos.filter(
      (item) => item.id !== movimiento.id
    );
    props.setMovimientos(newMovimientos);
  };

  const onChange = ({ target }) => {
    setFrmState({ ...frmState, [target.name]: target.value });
  }

  const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target);
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input
              size="lg"
              type="search"
              className="form-control rounded col-xs-4"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              name="busqueda"
              onChange={onChange}
            />
          </Col>
          <Col>
            <button type="submit" className="btn btn-dark">
              <FcSearch />
            </button>
          </Col>
          <Col>
            <input
              className="form-check-input"
              type="radio"
              name="movimiento"
              id="todos"
              value="todos"
              onChange={onChange}
            />
            <label className="form-check-label">Todos</label>
          </Col>
          <Col>
            <input
              className="form-check-input"
              type="radio"
              name="movimiento"
              id="ingreso"
              value="ingreso"
              onChange={onChange}
            />
            <label className="form-check-label">Ingreso</label>
          </Col>
          <Col>
            <input
              className="form-check-input"
              type="radio"
              name="movimiento"
              id="gasto"
              value="gasto"
              onChange={onChange}
            />
            <label className="form-check-label">Gasto</label>
          </Col>
        </Row>
      </Form>
      {props.movimientos.map((movimiento) => (
        <Movimiento
          key={movimiento.id}
          movimiento={movimiento}
          deleteMovimiento={deleteMovimiento}
          editRow={props.editRow}
        />
      ))}
    </div>
  );
};

export default ListaMovimientos;
