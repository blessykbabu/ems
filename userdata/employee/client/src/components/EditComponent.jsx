import axios from "axios"
import React ,{useState,useRef}from "react";
import { useParams,Link } from "react-router-dom";

export default function EditComponent(){
  
// const [data,setData] = useState([]);
let {id}=useParams();


// console.log("id from useParams : ", id);
    // api fetch for INDIVIDUAL
    
axios.get(`http://localhost:3000/api/get-employee/${id}`)
  .then((response)=>{
         setData(response.data);
         console.log(response.status,response.data);
    console.log("Single employee data : ", response.data);
     })
  .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
const nameInputRef = useRef(null);
const emailInputRef = useRef(null);

const phoneInputRef =useRef(null);
const placeInputRef =useRef(null);
const districtInputRef=useRef(null);
const stateInputRef=useRef(null);
const roleInputRef=useRef(null);
const  dateInputRef=useRef(null);
const  jdateInputRef=useRef(null);
const expInputRef=useRef(null);

const cemailInputRef=useRef(null);


const handleSubmit = (event) => {
  event.preventDefault();

  
  const name = nameInputRef.current.value;
  const email = emailInputRef.current.value;
  const phone=phoneInputRef.current.value;
  const place=placeInputRef.current.value;
  const district=districtInputRef.current.value;
  const  state=stateInputRef.current.value;
  const role=roleInputRef.current.value;
  const date=dateInputRef.current.value;
  const jdate=jdateInputRef.current.value;
  const exp=expInputRef.current.value;
  const cemail=cemailInputRef.current.value;
  const userData={name,email,phone,place,district,state,role,date,jdate,exp,cemail}
  axios.put(`http://localhost:3000/api/update/${id}`,userData)
  .then ((response)=>{
     console.log(response.data)
     alert("updated")
  })
  .catch((error)=>{
    console.log("get eror:",error.message? error.message:error)
  
  })
    
        }
           return (
            <>
            {/* <h3 style={{textAlign:'center',opacity:0.88,padding:20,color:"black"}}> Update {data.name}'s Profile</h3> */}
<div className="regfrm" style={{opacity:0.77}}>
 <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
 
 <form onSubmit={handleSubmit}>
   
     <div className="shadow-lg bg-body rounded" style={{ backgroundColor:"white",opacity:0.75}}>
     <div>
     <p style={{textAlign:"center",margin:10}}>PERSONAL INFORMATION</p>
   </div>
     <div className="mb-3 "  style={{padding:20}}>
     <label htmlFor="name" className="form-label">Name</label>
         <input type="text" className="form-control" id="name"    ref={nameInputRef}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="email" className="form-label"> Personal Email </label>
       <input type="email" className="form-control" id="email"  ref={emailInputRef}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="phone" className="form-label">Phone</label>
         <input type="text" className="form-control" id="phone"   ref={phoneInputRef}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
       <label htmlFor="place" className="form-label">Place</label>
       <input type="text" className="form-control" id="place"  ref={placeInputRef} />
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="district" className="form-label">District</label>
         <input type="text" className="form-control" id="district"  ref={districtInputRef}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="state" className="form-label">State</label>
         <input type="text" className="form-control" id="state" ref={stateInputRef}/>
       </div>
      
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
         <input type="text" className="form-control" id="date"  ref={dateInputRef}/>
       </div>
      
      

       <div>
     <p style={{textAlign:"center",margin:10}}>COMPANY DETAILS</p>
   </div>

   
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="role" className="form-label">Post</label>
         <input type="text" className="form-control" id="role"  ref={roleInputRef}/>
       </div>
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="jdate" className="form-label">Join Date</label>
         <input type="text" className="form-control" id="jdate"  ref={jdateInputRef}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="cemail" className="form-label">Email address</label>
       <input type="email" className="form-control" id="cemail"   ref={cemailInputRef}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="exp" className="form-label">Experience</label>
         <input type="text" className="form-control" id="exp"  ref={expInputRef}/>
       </div>
       <input  style={{margin:20}}  type="Submit" value="Save"/>
       
     
     </div>
   </form>  
   </div>
   </div>
   </>
           );
       
    
}