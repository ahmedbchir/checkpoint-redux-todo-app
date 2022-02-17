import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div >
        <div>
        <Button variant="primary" onClick={handleShow}
        >
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Title</Modal.Body>
        <Modal.Footer>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="col form-control"
        />
        <br/>
        <Form.Select>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </Form.Select>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      <Form.Select >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </Form.Select>
    </div>
  );
}

export default TodoInput;

