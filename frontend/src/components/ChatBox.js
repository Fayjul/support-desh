import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageBody, setMessageBody] = useState('');
  const supportHandler = (e) => {
    setIsOpen(true);
  };
  const closeHandler = (e) => {
    setIsOpen(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!messageBody.trim()) {
      alert('Eror, Please type message');
    } else {
      console.log(messageBody);
    }
  };
  return (
    <div className="chatbox">
      {!isOpen ? (
        <Button variant="primary" onClick={supportHandler}>
          Chat with us
        </Button>
      ) : (
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <strong>Support</strong>
              </Col>
              <Col className="text-end">
                <Button
                  className="btn-sm btn-secondary"
                  type="button"
                  onClick={closeHandler}
                >
                  x
                </Button>
              </Col>
            </Row>
            <hr />
            <ListGroup>
              <ListGroup.Item>no messages</ListGroup.Item>
            </ListGroup>
            <form onSubmit={submitHandler}>
              <InputGroup className="col-6">
                <FormControl
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  type="text"
                  placeholder="type message"
                ></FormControl>
                <Button type="submit" variant="primary">
                  Send
                </Button>
              </InputGroup>
            </form>
          </Card.Body>
        </Card>
        // <Card>
        //   <Card.Body>
        //     <Row>
        //       <Col>
        //         <strong>Support</strong>
        //       </Col>
        //       <Col className="text-end">
        //         <Button
        //           className="btn-sm btn-secondary"
        //           type="button"
        //           onClick={closeHandler}
        //         >
        //           x
        //         </Button>
        //       </Col>
        //     </Row>
        //     <hr />
        //     <ListGroup>
        //       <ListGroup.Item>no messages</ListGroup.Item>
        //     </ListGroup>
        //     <form onSubmit={submitHandler}>
        //       <InputGroup className="col-6">
        //         <FormControl
        //           value={messageBody}
        //           onChange={(e) => setMessageBody(e.target.value)}
        //           type="text"
        //           placeholder="type message"
        //         ></FormControl>
        //         <Button type="submit" variant="primary">
        //           Send
        //         </Button>
        //       </InputGroup>
        //     </form>
        //   </Card.Body>
        // </Card>
      )}
    </div>
  );
}
