import React from 'react';
function Skills_task({ data }) {

    return (
        <div style={{ backgroundColor: 'pink', padding: '50px', height: '50%' }}>
            <div>
                <h2>My Skills</h2>

                {data.map((i) => {
                    return (
                        <div key={i.id}>
                            {i.skills.map((skill, index) => {
                                return <p key={index}>{skill}</p>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills_task;