import React from 'react'
import noblqlogo from '../assets/images/noblqlogo.svg'

function Nav() {
    return(
        <nav className="Navigator" >
            <img src={noblqlogo} alt="" width="90px" style={{position:"absolute"  , left:"20px" , top:"18px"}} />
            <a href="/">Home</a>
            <a href="Upload-Details">Upload Details</a>
            <a href="Applicant-Pool">Applicant Pool</a>
            <a href="Emp-Resume-Assist">Emp_Resume AI Asssistance</a>             
        </nav>
    )
}

export default Nav;