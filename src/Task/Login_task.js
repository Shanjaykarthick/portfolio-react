import React from 'react'

const Login_task = () => {

    return (
        <div style={{ backgroundColor: 'pink', padding: '50px', height: '50%' }}>
            <div >
                <h2>LOGIN</h2>
                <form>
                    <p> <input type='name' placeholder='usename' /></p>
                    <p> <input type='email' placeholder='email' /></p>
                    <p> <input type='password' placeholder='password' /></p>
                    <button type='submit' >Login</button>
                </form>
            </div>
        </div >
    )
}

export default Login_task