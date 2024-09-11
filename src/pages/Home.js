import React from 'react'
import '../assets/css/style.css'
import Logo  from  '../assets/images/noblqlogo.svg'
import Close  from  '../assets/images/close.svg'
import {useState} from 'react'
import {marked} from 'marked'
import Nav from '../components/Nav.js'

function Home() {

    const [addemply, setaddemply] = useState(false);
    const [selected_file, setselected_file] = useState("");
    const [chat, setchat] = useState(false);
    const [myquery, setmyquery] = useState();

     


    function chatbot() {
        setchat(pre=>!pre)
    }

    function addemployee() {
        setaddemply(pre=>!pre)
    }

    

        
        

        
    

    return(

        <div>
            <Nav></Nav>
            <div  className="flex" >
                <h1 style={{color:"rgb(7,132,123)"}}  >Interactive Chatbot</h1>
                <img src={Logo} alt=""  width="300px"   />
                <p>You can upload resumes and ask any questions directly to the chatbot based on the information from the uploaded resumes. The chatbot will provide instant answers by analyzing the details within the documents.</p>
                {/* <span>
                    <button onClick={addemployee} >Add Employee</button>
                    <button onClick={chatbot} >Chatbot</button>
                </span> */}
            </div>


            
        </div>
    )
    
}

export default Home;