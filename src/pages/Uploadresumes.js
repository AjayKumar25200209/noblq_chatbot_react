import React from 'react'
import Close  from  '../assets/images/close.svg'
import {useState} from 'react'
import Nav from '../components/Nav.js'
import cloud from '../assets/images/cloud.svg'

function Uploadresumes(params) {

    const [selected_file, setselected_file] = useState("");
    const [addemply, setaddemply] = useState(false);


    

    function updateFileName(e) {
        // Check if a file is selected
        const element=e.target
       
        
        if (element.files.length > 0) {
            var fileName = element.files[0].name; // Get the file name
            console.log(fileName);
            setselected_file(fileName)

        }
    }


    function uploadinfo(e) {
        e.preventDefault()
        const form_element=document.getElementById("form2")
        console.log(form_element);
        const form_data=new FormData(form_element)
        
        
        fetch(`${process.env.REACT_APP_SERVER_URL}/upload3`  ,
            {
            method:'POST',
            body:form_data
      
        })
          .then(res=>{
            return res.json()
          })
      
          .then(data=>{
            
            console.log(data);
          })
          .catch(err=>{
            alert(err)
          })
          
        
        
    }

    function uploadfile(e) {
        e.preventDefault()
        
        const form_element=document.getElementById("form")
        console.log(form_element);
        const form_data=new FormData(form_element)
        fetch(`${process.env.REACT_APP_SERVER_URL}/upload2`  ,
            {
            method:'POST',
            body:form_data
      
        })
          .then(res=>{
            return res.json()
          })
      
          .then(data=>{
            
            console.log(data);
          })
          .catch(err=>{
            alert(err)
          })
          
        
          
        }


    return(
        <div>

                <Nav></Nav>
                <div className="getdetaill"  style={{margin:"auto" , width:"70%" , padding:"20px" }} >
                <h1 >Upload Resume for Chatbot Analysis</h1>
                    <form action="" id="form2" >

                        <span>
                            <p>Name</p>
                            <input type="text" name="Name" id="" placeholder="Enter the Name" />
                        </span>
                        <span>
                            <p>Email</p>
                            <input type="email" name="Email" id="" placeholder="Enter the Email" />
                        </span>
                        <span>
                            <p>Mobile Number</p>
                            <input type="number" name="Number" id="" placeholder="Enter the Number" />
                        </span>
                        <span>
                            <p>Skills</p>
                            <input type="text" name="Skills" id="" placeholder="Enter the Skills " />
                        </span>
                        <span>
                            <p>Experience</p>
                            <input type="text" name="" name="Experience" placeholder="Enter No.of Years Experience in which skill" />
                        </span>
                        <button onClick={uploadinfo} >Submit</button>

                    </form>
                </div>
                <p style={{textAlign:"center"}}  >Or</p>
                <div className="upload"   >

                   
                        <form action="" id="form" >
                            <span>
                                <p style={{paddingBottom:"5px"  , fontSize:"15px"}} >Choose a Resume to Upload in PDF Format</p>
                                <label htmlFor="filee" ><span><img src={cloud} alt="" width="40px" />Click Here to Upload </span><p className="bbtn" htmlFor="filee"  >Browse Files</p></label>
                                <input type="file" name="myfile" id="filee" hidden onChange={updateFileName} />
                                <p>{selected_file}</p>
                            </span>
                            <button onClick={uploadfile} >Submit</button>
                        </form>
                </div>
        </div>
    )
}


export default Uploadresumes;