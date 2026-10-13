import React from 'react'

function Sturecord() {

    const student ={
        id : 1,
        name: "Shanjay",
        age: 19,
        dept: "CSE",
        mark: 100
    // },{
    //     id:2,
    //     name: "parthi",
    //     age:19,
    //     dept:"CSE",
    //     mark: 99
    // },{
    //     id:3,
    //     name:"sarathi",
    //     age:19,
    //     dept:"CSE",
    //     mark:100

    // },{
    //      id:4,
    //     name:"sana",
    //     age:19,
    //     dept:"CSE",
    //     mark:55
    // },{
    //     id:5,
    //     name:"Rohith",
    //     age:20,
    //     dept:"CSE",
    //     mark:75
    // },{
    //      id:6,
    //     name:"varshan",
    //     age:19,
    //     dept:"CSE",
    //     mark:99
    // },{
    //     id:7,
    //     name:"sanjai",
    //     age:19,
    //     dept:"CSE",
    //     mark:81
    // },{
        
    //     id:8,
    //     name:"srini",
    //     age:19,
    //     dept:"CSE",
    //     mark:36
    // },{
    //     id:9,
    //     name:"sanjiv",
    //     age:20,
    //     dept:"CSE",
    //     mark:95
    // },
    // {
    //     id:10,
    //     name:"mishra",
    //     age:21,
    //     dept:"CSE",
    //     mark:100
    // }
    }
    const updatestu={
        ...student,
        name:"ssk"
    }
    //const {id,name,age,dept,mark}=student
    const {id,name,age,...remains}=student;
  return (
    <>
    {name}
    </>


  )
}

export default Sturecord