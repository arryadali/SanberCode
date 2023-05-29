import React from "react";
import '../App.css';

function Tugas8(props) {
    console.log(props.name, props.email, props.batch)

  return (
    <div className="App">
      <div className='nama'>
        <h1>Data diri peserta kelas Reactjs</h1>
        <hr/>
        
        <div className='batch'>
          <ul>
            <li><b>Nama Lengkap : </b>{props.name}</li>
            <li><b>Email : </b>{props.email}</li>
            <li><b>Batch Pelatihan : </b>{props.batch}</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Tugas8;
