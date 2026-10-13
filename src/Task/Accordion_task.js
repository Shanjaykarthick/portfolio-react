import React from 'react';
function Accordion_task({ data }) {
    return (
        <div style={{ backgroundColor: 'pink', padding: '50px', height: '50%' }}>
            <div>

                <h2>My Accordion</h2>

                {data.map((i) => {
                    return (
                        <div key={i.id}>
                            {i.accordion.map((item, index) => {
                                return (
                                    <details key={index}>
                                        <summary>{item.title}</summary>
                                        <p>{item.content}</p>
                                    </details>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Accordion_task;