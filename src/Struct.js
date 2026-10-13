import React from 'react'
import ModalBox from './ModalBox'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
function Struct({ data }) {

    const [col, setCol] = useState(true)


    function theme() {

        setCol(!col)

    }
    return (
        <div>


            <div style={{ backgroundColor: col ? "pink" : "white", height: '100vh' }}>
                {col}

                <button onClick={theme}>{col ? "Click" : "click"}</button>


                <Link to="Crypto">Crypto</Link>
                <h2>
                    <ModalBox /></h2>
            </div>

        </div>

    )
}

export default Struct