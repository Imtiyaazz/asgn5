import React,{useState} from "react";

export const Emp = ()=>{
    const [empid,setEmpId]=useState()
    const [email,setEmail]=useState()
    const [company,setCompany]=useState()
    return(
        <div className="main">
            <input onChange={(e)=>setEmpId(e.target.value)} type="text" placeholder="Enter Emp id" />
            <br />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email id" />
            <br />
            <input onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter Company"/>
            <br />
            <div className="disp">
                <h3>Emp Details</h3>
                <h5>Empid -{empid} </h5>
                <h5>Email - {email}</h5>
                <h5>Company Name - {company}</h5>
            </div>
        </div>
    )
}