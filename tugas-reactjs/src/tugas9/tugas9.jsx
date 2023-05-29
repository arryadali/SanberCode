import React from "react";
import { useState } from "react";
import '../App.css';

const Tugas9 = () => {

    const [angka, setAngka] = useState(0)

    const handleAngka = () => {
        setAngka(angka + 1)
    }

    return (
        <div className="App">
            <div className='nama'>
                <h1 className="hook">{angka}</h1>
        
                <div className='buttHook'>
                    <button onClick={handleAngka}>Tambah</button>
                    <p>{angka > 10 ? "State count sudah lebih dari 10" : null}</p>
                </div>
            </div>
        </div>
    )
}

export default Tugas9;