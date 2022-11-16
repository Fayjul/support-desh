import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const supportHandler = (e) => {
    setIsOpen(true);
  };
  const closeHandler = (e) => {
    setIsOpen(false);
  };
  return (
    <div className="chatbox">
      {!isOpen ? (
        <Button variant="primary" onClick={supportHandler}>
          Chat with us
        </Button>
      ) : (
        <Button
          className="btn-sm btn-secondary"
          type="button"
          onClick={closeHandler}
        >
          X
        </Button>
      )}
    </div>
  );
}
