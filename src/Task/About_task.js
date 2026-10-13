import React from 'react';
function About_task({ data }) {
    return (
        <div style={{ backgroundColor: 'pink', padding: '50px' }}>
            <div>

                {data.map((i) => {
                    return (
                        <div key={i.id}>
                            <h2>About Me</h2>
                            <p>{i.about.title}</p>
                            <p>{i.about.degree}</p>
                            <p>{i.about.college}</p>
                            {/* <p>{i.about.cgpa}</p> */}
                            {/* <p>{i.about.graduationyear}</p> */}
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default About_task;