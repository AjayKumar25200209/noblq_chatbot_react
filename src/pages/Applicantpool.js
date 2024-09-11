import React from 'react'
import Close  from  '../assets/images/close.svg'
import {useState} from 'react'
import {marked} from 'marked'
import Send  from  '../assets/images/send.svg'
import Nav from '../components/Nav.js'

function Applicantpool() {
    const [chat, setchat] = useState(false);
    const [myquery, setmyquery] = useState();


    function getHtml(text2){
        return  { __html: marked(text2) } 
      };

    function sendchat(e) {
        e.preventDefault()
        setmyquery()
        const data1=`<p class="mymsg" >Me : ${myquery}</p>`
        
        document.getElementById("chat2").innerHTML += data1
        setmyquery("")
        fetch(`${process.env.REACT_APP_SERVER_URL}/chatbot3`  ,
            {
            method:'POST',
            body:JSON.stringify({"query":myquery})
      
        })
          .then(res=>{
            return res.json()
          })
      
          .then( (data)=>{

            const text4=getHtml(data["output"])
            let text3=`${text4["__html"]}`
            document.getElementById("chat2").innerHTML += text3
        
            
            
          })
          .catch(err=>{
            alert(err)
          })

        
        
        
    }
   


    return(
        <div>

                <Nav></Nav>
                <div className="chatbot" >
                        
                        <h1 >
                        Applicant Pool AI Asstitance
                        </h1>
                        <div className="chats" id="chat2" >

                            
                           
                            

                        </div>
                        <form action="">
                            <input type="text" name="" id=""  value={myquery}  onChange={(e)=>{setmyquery(e.target.value)}}  placeholder="Ask Any Question" />
                            <button onClick={sendchat} ><span><img src={Send} alt="" /></span></button>
                        </form>


                </div>
        </div>
    )
}


export default Applicantpool;