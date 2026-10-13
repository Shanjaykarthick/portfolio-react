import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home_task = () => {
    const data = [{
        id: "212",
        name: "Shanjaykarthick",
        username: "Shanjay@12",
        contact: "7770890789",
        Role: "front-end developer",
        skills: ['java', 'python', 'react', 'mernstack'],
        email: "shanjaykarthickmec19@gmail.com",
        location: "salem",
        about: "",
        projects: [{ title: "AI-case management system", description: "sort cases based on the priorety" },
        { title: "AI-accident detection system", description: "detect accient and send alter message" },
        { title: "portfolio", description: "my details" }
        ],
        social: {},
        accordion: [{}]
    }]
    return (
        <>
            <div>Home_task</div>

        </>
    )
}

export default Home_task