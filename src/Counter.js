import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const btn = {
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "green",
        color: "white"

    }
    // useEffect(() => {
    //     document.title = "counter";

    // }, [])

    // useEffect(() => {
    //     document.title = Counter;
    // }, [count])

    // useEffect(() => {
    //     setCount(42)
    // })
    function timeout() {
        setTimeout(
            () => {
                console.log("test")
            }, 3000
        );
    }

    function interval() {
        setInterval(() => {
            console.log("intervel test")
        }, 1000)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button style={btn} onClick={() => setCount(count + 1)}>Increament</button>
            <button style={btn} onClick={() => setCount(count - 1)}>Decreament</button>
            <button style={btn} onClick={() => setCount(0)}>Reset</button>

            <button style={btn} onClick={timeout}>timeout</button>
            <button style={btn} onClick={interval}>interval</button>

        </div>
    )
}

export default Counter