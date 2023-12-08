// import axios from "axios"
// import React, { useEffect, useState } from "react";
// import { useParams,Link} from "react-router-dom";

// export default function EmployeeComponent() {

//   let { id } = useParams("");
//   const [serverMessage, setServerMessage] = useState('');
//   const [DataUpdate, SetUpdate] = useState(
//     {
//       name: '',
//       email: '',
//       phone: '',
//       place: '',
//       district: '',
//       state: '',
//       role: '',
//       date: '',
//       jdate: '',
//       exp: '',
//       cemail: ''
//     }
//   );

//   console.log("edit data", DataUpdate)
//   // const[DataUpdate,SetUpdate]=useState([])
//   // console.log("id from useParams : ", id);
//   // ..........api fetch for INDIVIDUAL...........
//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/get-employee/${id}`)
//       .then((response) => {
//         SetUpdate(response.data.data);
//         console.log(response.status, response.data.data);
//         // console.log("Single employee data : ", response.data);
//       })
//       .catch((error) => {
//         console.log("get eror:", error.message ? error.message : error)

//       })
//   }, [])

//   // .............for update DataUpdate..........

//   const handleChange = (e) => {
//     console.log("Reached here")

//     SetUpdate((pre) => {
//       return { ...pre, [e.target.name]: e.target.value }
//     })
//   }
//   const handleSubmit = (e) => {
//     console.log("Reached handlesubmit");
//     e.preventDefault();
//     const { name, email, phone, place, district, state, role, date, jdate, exp, cemail } = DataUpdate;
//     console.log("Datas", DataUpdate)

//     axios.put(`http://localhost:3000/api/update/${id}`, DataUpdate)
//       .then((response) => {
//         // SetUpdate(response.data);
//         //  console.log(response.data)
//         console.log('updated successfully:', response.data.data);
//         // alert("updated")
//         setServerMessage(response.data.message);
//       })
//       .catch((error) => {
//         console.log(" axios get eror:", error.message ? error.message : error)

//       })
//   }

//   const handleClick = () => {
//     axios.delete(`http://localhost:3000/api/delete/${id}`)
//       .then((response) => {
//         console.log('delete successfully:', response.data.data);
//         alert("Deleted")
//       })

//   }
//   return (
//     <>
//     {serverMessage && <p>{serverMessage}</p>}
//       <h3 style={{ textAlign: 'center', padding: 20, color: "white" }}>Details Of {DataUpdate.name}</h3>
//       <div className="regfrm" >
//         <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">

//           <form onSubmit={handleSubmit}>

//             <div className="shadow-lg bg-body rounded" style={{ backgroundColor: "white", opacity: 0.75 }}>
//               <div>
//                 <p style={{ textAlign: "center", margin: 10 }}>PERSONAL INFORMATION</p>
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="name" name='name' value={DataUpdate.name} onChange={handleChange} />
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="email" className="form-label"> Personal Email </label>
//                 <input type="email" className="form-control" id="email" name='email' value={DataUpdate.email} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="phone" className="form-label">Phone</label>
//                 <input type="text" className="form-control" id="phone" name='phone' value={DataUpdate.phone} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="place" className="form-label">Place</label>
//                 <input type="text" className="form-control" id="place" name='place' value={DataUpdate.place} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="district" className="form-label">District</label>
//                 <input type="text" className="form-control" id="district" name='district' value={DataUpdate.district} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="state" className="form-label">State</label>
//                 <input type="text" className="form-control" id="state" name='state' value={DataUpdate.state} onChange={handleChange} />
//               </div>

//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
//                 <input type="text" className="form-control" id="date" name='date' value={DataUpdate.date} onChange={handleChange} />
//               </div>

//               <div>
//                 <p style={{ textAlign: "center", margin: 10 }}>COMPANY DETAILS</p>
//               </div>

//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="role" className="form-label">Post</label>
//                 <input type="text" className="form-control" id="role" name='role' value={DataUpdate.role} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="jdate" className="form-label">Join Date</label>
//                 <input type="text" className="form-control" id="jdate" name='jdate' value={DataUpdate.jdate} />
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="cemail" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="cemail" name='cemail' value={DataUpdate.cemail} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="exp" className="form-label">Experience</label>
//                 <input type="text" className="form-control" id="exp" value={DataUpdate.exp} name='exp' />
//               </div>

//               {/* <button className="btn btn-success"><Link to={`/edit/${DataUpdate._id}`}  style={{textDecoration:"none",color:"white"}}>Update</Link></button> */}
//               {/* <input  style={{margin:20}}  type="Submit" value="Update"/> */}
//               <button type="submit" className="btn btn-success m-2" style={{ color: "white" }}>
//                 Update
//               </button>
//               <Link to="/view"><button onClick={handleClick} type="button" className="btn btn-success" style={{ color: "white" }}>
//                 Delete

//               </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );

// }



















// ************************validation ****************


// ***************useformik*****



// EditPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EditForm } from './editForm';
import axios from "axios"

const EmployeeComponent = () => {
  let { id } = useParams("");
  const [initialData, setInitialData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    district: "",
    state: "",
    role: "",
    date: "",
    jdate: "",
    exp: "",
    cemail: "",
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch data for editing (e.g., from an API) and set it as initialData
    // Example: fetch('/api/user/123').then(response => response.json()).then(data => setInitialData(data));
 
    axios.get(`http://localhost:3000/api/get-employee/${id}`)
          .then((response) => {
            setInitialData(response.data.data);
            console.log(response.status, response.data.data);
            // console.log("Single employee data : ", response.data);
          })
          .catch((error) => {
            console.log("get eror:", error.message ? error.message : error)
    
          })
 
  }, []);
  // const handleChange = (e) => {
  //       console.log("Reached here")
    
  //       SetUpdate((pre) => {
  //         return { ...pre, [e.target.name]: e.target.value }
  //       })
  //     }

  const handleSubmit = values => {
    // Handle the form submission 
    
        const { name, email, phone, place, district, state, role, date, jdate, exp, cemail } = values;
        console.log(" updated Datas",values)
    axios.put(`http://localhost:3000/api/update/${id}`,values)
          .then((response) => {
            // SetUpdate(response.data);
            //  console.log(response.data)
            console.log('updated successfully:', response.data.data);
            // alert("updated")
            // setServerMessage(response.data.message);
          })
          .catch((error) => {
            console.log(" axios get eror:", error.message ? error.message : error)
    
          })
    console.log('Updated values:', values);
  };

    const handleDelete = () => {
      try {
        axios.delete(`http://localhost:3000/api/delete/${id}`)
      .then((response) => {
        setInitialData(response.data)
        console.log('delete successfully:', response.data);
        alert("Deleted")
      })
      } catch (error) {
        console.log("delete error:",error)
      }
    

  }

  return (
    <div>
      
      <EditForm initialValues={initialData} onSubmit={handleSubmit} onClick={handleDelete}/>
    </div>
  );
};

export default EmployeeComponent;










// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { object, string, number } from "yup";
// export default function EmployeeComponent() {
//   let { id } = useParams("");
//   const [serverMessage, setServerMessage] = useState("");
//   const [DataUpdate, SetUpdate] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     place: "",
//     district: "",
//     state: "",
//     role: "",
//     date: "",
//     jdate: "",
//     exp: "",
//     cemail: "",
//   });
 
//   // const initialValues = {
//   //   name:DataUpdate.name,
//   //   email:DataUpdate.email,
//   //   phone:DataUpdate.phone,
//   //   place:DataUpdate.place,
//   //   district:DataUpdate.district,
//   //   state:DataUpdate.state,
//   //   role:DataUpdate.role,
//   //   date:DataUpdate.date,
//   //   jdate:DataUpdate.jdate,
//   //   exp:DataUpdate.exp,
//   //   cemail:DataUpdate.cemail,
//   // };

//   // console.log("edit data", DataUpdate);
//   // const[DataUpdate,SetUpdate]=useState([])
//   // console.log("id from useParams : ", id);
//   // ..........api fetch for INDIVIDUAL...........
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/get-employee/${id}`)
//       .then((response) => {
//         SetUpdate(response.data.data);
//         console.log("recieved data" ,response.status, response.data.data);
//         // console.log("Single employee data : ", response.data);
//       })
//       .catch((error) => {
//         console.log("get eror:", error.message ? error.message : error);
//       });
//   }, []);

//   // .............for update DataUpdate..........

//   const handleChange = (e) => {
//     console.log("Reached here");

//     SetUpdate((pre) => {
//       return { ...pre, [e.target.name]: e.target.value };
//     });
//   };
//   const handleSubmit  = async (values, { resetForm }) =>{
//     console.log("Reached handlesubmit");
//     e.preventDefault();
//     const {
//       name,
//       email,
//       phone,
//       place,
//       district,
//       state,
//       role,
//       date,
//       jdate,
//       exp,
//       cemail,
//     } = DataUpdate;
//     resetForm()
//     console.log("Datas", DataUpdate);
     
//     axios
//       .put(`http://localhost:3000/api/update/${id}`, DataUpdate)
//       .then((response) => {
//         // SetUpdate(response.data);
//         //  console.log(response.data)
//         console.log("updated successfully:", response.data.data);
//         // alert("updated")
//         setServerMessage(response.data.message);
//       })
//       .catch((error) => {
//         console.log(" axios get eror:", error.message ? error.message : error);
//       });
//   };

//   const handleClick = () => {
//     axios.delete(`http://localhost:3000/api/delete/${id}`).then((response) => {
//       console.log("delete successfully:", response.data.data);
//       alert("Deleted");
//     });
//   };
//   return (
//     <>
//       {serverMessage && <p>{serverMessage}</p>}
//       <h3 style={{ textAlign: "center", padding: 20, color: "black" }}>
//         Details Of {DataUpdate.name}
//       </h3>
//       <div className="regfrm">
//         <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
//           <Formik
//             initialValues={DataUpdate}
//             onSubmit={handleSubmit}
          
//             validationSchema={object().shape({
//               name: string()
//                 .min(2, "Too Short!")
//                 .max(50, "Too Long!")
//                 .required("Required"),
//               email: string().email().required("Required"),

//               phone: string()
//                 // .typeError("That doesn't look like a phone number")
//                 // .positive("A phone number can't  initialValues={DataUpdate}start with a minus")
//                 // .integer("A phone number can't include a decimal point")
//                 .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.")
//                 .min(10, "Invalid phone number,it must contain 10 digit")
//                 .required("Required"),
//               place: string().required(" Required"),
//               district: string().required("Required"),
//               state: string().required("Required"),
//               date: string().required("Required"),
//               role: string().required("Required"),
//               jdate: string().required("Required"),
//               cemail: string().required("Required"),
//               exp: string().required("Required"),
//               password: string()
//                 .required("Required")
//                 .min(6, "Password is too short - should be 6 chars minimum"),
//             })}
//             enableReinitialize:true
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               isSubmitting,
//             }) => (
//               <Form>
//                 <div
//                   className="shadow-lg bg-body rounded"
//                   style={{ backgroundColor: "white", opacity: 0.75 }}
//                 >
//                   <div>
//                     <p style={{ textAlign: "center", margin: 10 }}>
//                       PERSONAL INFORMATION
//                     </p>
//                   </div>
//                   <div className="mb-3 " style={{ padding: 20 }}>
//                     <label htmlFor="name" className="form-label">
//                       Name
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       name="name"
//                       value={DataUpdate.name}
//                       onChange={handleChange}
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="mb-3 " style={{ padding: 20 }}>
//                     <label htmlFor="email" className="form-label">
                      
//                       Personal Email
//                     </label>
//                     <Field
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={DataUpdate.email}
//                       onChange={handleChange}
//                     />
//                      <ErrorMessage
//                       name="email"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="phone" className="form-label">
//                       Phone
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="phone"
//                       name="phone"
//                       value={DataUpdate.phone}
//                       onChange={handleChange}
//                     />
//                      <ErrorMessage
//                       name="phone"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="place" className="form-label">
//                       Place
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="place"
//                       name="place"
//                       value={DataUpdate.place}
//                       onChange={handleChange}
//                     />
//                      <ErrorMessage
//                       name="place"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="district" className="form-label">
//                       District
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="district"
//                       name="district"
//                       value={DataUpdate.district}
//                     />
//                      <ErrorMessage
//                       name="district"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="state" className="form-label">
//                       State
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="state"
//                       name="state"
//                       value={DataUpdate.state}
//                       onChange={handleChange}
//                     />
//                      <ErrorMessage
//                       name="state"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>

//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="Dateofbirth" className="form-label">
//                       Date of birth
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="date"
//                       name="date"
//                       value={DataUpdate.date}
//                       onChange={handleChange}
//                     />
//                      <ErrorMessage
//                       name="date"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>

//                   <div>
//                     <p style={{ textAlign: "center", margin: 10 }}>
//                       COMPANY DETAILS
//                     </p>
//                   </div>

//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="role" className="form-label">
//                       Post
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="role"
//                       name="role"
//                       value={DataUpdate.role}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="jdate" className="form-label">
//                       Join Date
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="jdate"
//                       name="jdate"
//                       value={DataUpdate.jdate}
//                     />
//                   </div>
//                   <div className="mb-3 " style={{ padding: 20 }}>
//                     <label htmlFor="cemail" className="form-label">
//                       Email address
//                     </label>
//                     <Field
//                       type="email"
//                       className="form-control"
//                       id="cemail"
//                       name="cemail"
//                       value={DataUpdate.cemail}
//                     />
//                   </div>
//                   <div className="mb-3" style={{ padding: 20 }}>
//                     <label htmlFor="exp" className="form-label">
//                       Experience
//                     </label>
//                     <Field
//                       type="text"
//                       className="form-control"
//                       id="exp"
//                       value={DataUpdate.exp}
//                       name="exp"
//                     />
//                   </div>

//                   {/* <button className="btn btn-success"><Link to={`/edit/${DataUpdate._id}`}  style={{textDecoration:"none",color:"white"}}>Update</Link></button> */}
//                   {/* <input  style={{margin:20}}  type="Submit" value="Update"/> */}
//                   <button
//                     type="submit"
//                     className="btn btn-success m-2"
//                     style={{ color: "white" }}
//                   >
//                     Update
//                   </button>
//                   <Link to="/view">
//                     <button
//                       onClick={handleClick}
//                       type="button"
//                       className="btn btn-success"
//                       style={{ color: "white" }}
//                     >
//                       Delete
//                     </button>
//                   </Link>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// }





