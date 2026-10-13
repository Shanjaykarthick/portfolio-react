import { React, useState } from 'react';
import './ModalBox.css';

function ModalBox() {

  const [Model, setModel] = useState(false);

  return (
    <>
      <div>ModalBox</div>

      {Model ? <div className="model">
        <span> ARE YOUR SURE, DO YOU WANT SELL..</span>
        <button className="con" onClick={() => setModel(false)}> OK </button>
      </div> : ""}

      <button className="con" onClick={() => setModel(true)}>SELL</button>
    </>
  )
}

export default ModalBox

