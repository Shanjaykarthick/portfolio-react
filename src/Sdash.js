import React from "react";
const Sdash = () =>{
    const student =[{
        id : 1,
        name: "Shanjay",
        age: 19,
        department: "CSE",
        marks: 100
    },{
        id:2,
        name: "parthi",
        age:19,
        department:"CSE",
        marks: 99
    }]
    // const data = student.map((i) =>{
    //     return (
    //         <>
    //         {i.name}
    //         </>
            
            
    //     ))
   
    const numbers =[1,2,3,4,5,6];
    const filtered=numbers.filter(
        function (x){
            return x > 5
        }
    )
     //console.log("pop", numbers.pop(),numbers)
     //console.log("push",numbers.push(7),numbers )
     //console.log("shift",numbers.shift(),numbers)
    //console.log("unshift",numbers.unshift(0),numbers)

    // console.log(filtered)
    
    // const datamark=student.filter(
    //     function (i){
    //         return i.marks>95
    //     }
    // )
    // console.log(datamark)
    
    // const datamark=student.filter((i) =>i.marks>95)
    // console.log(datamark)

    const names=["nadhu","shanjay","parthi","ragul"]
    const result=names.slice(1,3)
    console.log("result",result,names)
       
    const spliceres=names.splice(1,2,"sarathiad")// start from 1 till the count 2 add the value splice(index,count,add)

    console.log(">>>>>",spliceres)
    console.log(names)
    return (
        <>

     {/* {student.map((i)=>{
        // return i.name(

       
     })
    } */}
     {/* <center>
            <table>
                <tr>
                <th>NAME</th>
                <th>ID</th>
                <th>AGE</th>
                <th>DEPARTMANT</th>
                <th>MARKS</th>
                </tr>
               
                <tbody>
                <tr>
                    <td>Shanjay</td>
                    <td>1</td>
                    <td>19</td>
                    <td>CSE</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>parthi</td>
                    <td>2</td>
                    <td>19</td>
                    <td>CSE</td>
                    <td>95</td>
                </tr>
                </tbody>
            </table>
            </center> */}
            {/* {datamark.map((i)=>{
                return(
                    <>
                    {i.name}
                    </>
                )
            }
            )} */}
        </>
    )
}
export default Sdash;

//have to read splice operation