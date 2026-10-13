import React from 'react';
function Contact_task({ data }) {
    return (
        <div style={{ backgroundColor: 'pink', padding: '50px', height: '100%', justifyContent: 'center' }}>
            <div>
                {data.map((i) => {
                    return (
                        <div key={i.id}>
                            <h2>Contact Me</h2>
                            <p>Email: {i.contact.email}</p>


                            <p>
                                GitHub:
                                <a href={i.contact.github}>
                                    {i.contact.github}
                                </a>
                            </p>

                            <p>
                                LinkedIn:
                                <a href={i.contact.linkedin}>
                                    {i.contact.linkedin}
                                </a>
                            </p>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Contact_task;