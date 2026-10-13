import React from 'react';
function Projects_task({ data }) {
    return (
        <div style={{ backgroundColor: 'pink', padding: '50px', height: '50%' }}>
            <div>
                <h2>My Projects</h2>

                {data.map((i) => {
                    return (

                        <div key={i.id}>
                            {i.projects.map((project, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects_task;