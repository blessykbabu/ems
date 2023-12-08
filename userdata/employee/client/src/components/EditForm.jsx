// // EditForm.js
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const EditForm = ({ initialValues, onSubmit }) => {
//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       // Define your validation schema here
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       // Add more fields as needed
//     }),
//     onSubmit: values => {
//       onSubmit(values);
//     },
//   });
// console.log()
//   return (
//    <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         id="name"
//         name="name"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.name}
//       />
//       {formik.touched.name && formik.errors.name && (
//         <div>{formik.errors.name}</div>
//       )}

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email && (
//         <div>{formik.errors.email}</div>
//       )}

//       {/* Add more fields as needed */}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default EditForm;

// EditForm.js
import React from "react";
import { useFormik } from "formik";
import {Link} from "react-router-dom"
import * as Yup from "yup";

export function EditForm({ initialValues, onSubmit,onClick }) {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      // Define your validation schema here
      // name: Yup.string().required("Name is required"),
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Email is required"),
      // Add more fields as needed


      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  
      email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  
      place:Yup.string()
      .min(2,"Invalid Address")
      .required("Required"),

  
      password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Password must contain one Uppercase and one lowercase and a number.'),
  
    phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.")
    }),
    onSubmit: (values) => {
      onSubmit(values);
      onClick()
     
    },
   
    enableReinitialize: true,
    
  });
  const handleDelete = () => {
    onClick();
    
  };

  // const handleSubmit = async (values, { resetForm }) => {
  //   try {
  //     console.log("reched");
  //     const response = await axios.put(
  //       `http://localhost:3000/api/update/{id}`,
  //       values
  //     );
  //     console.log("Form Submitted", response.data.data);
  //     resetForm();
  //   } catch (error) {
  //     console.error("Not Submitted", error);
  //   }
  // };

  return (
    <>
      <h3 style={{ textAlign: "center", padding: 20, color: "white" }}>
        Details of {initialValues.name}
      </h3>
      <div className="regfrm">
        <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="shadow-lg bg-body rounded"
              style={{ backgroundColor: "white", opacity: 0.75 }}
            >
              <div>
                <p style={{ textAlign: "center", margin: 10 }}>
                  PERSONAL INFORMATION
                </p>
              </div>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div style={{color:"red"}}>{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="email" className="form-label">
                  Personal Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div style={{color:"red"}}>{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div style={{color:"red"}}>{formik.errors.phone}</div>
                )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="place" className="form-label">
                  Place
                </label>
                <input
                id="place"
                name="place"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.place}
              />
              {formik.touched.place && formik.errors.place && (
                <div style={{color:"red"}}>{formik.errors.place}</div>
              )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="district" className="form-label">
                  District
                </label>
                <input
                  id="district"
                  name="district"
                  type="district"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                />
                {formik.touched.district && formik.errors.district && (
                  <div style={{color:"red"}}>{formik.errors.district}</div>
                )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="state"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state&& (
                  <div style={{color:"red"}}>{formik.errors.state}</div>
                )}
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="Dateofbirth" className="form-label">
                  Date of birth
                </label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date && (
                  <div style={{color:"red"}}>{formik.errors.date}</div>
                )}
              </div>

              <div>
                <p style={{ textAlign: "center", margin: 10 }}>
                  COMPANY DETAILS
                </p>
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="role" className="form-label">
                  Post
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="form-control"
                  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                />
               
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="jdate" className="form-label">
                  Join Date
                </label>
                <input
                   id="jdate"
                   name="jdate"
                   type="text"
                   className="form-control"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.jdate}
                 />
              </div>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="cemail" className="form-label">
                  Email address
                </label>
                <input
                   id="cemail"
                   name="cemail"
                   type="email"
                   className="form-control"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.cemail}
                 
                />
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="exp" className="form-label">
                  Experience
                </label>
                <input
                 id="exp"
                 name="exp"
                 type="text"
                 className="form-control"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.exp}
               />
              </div>

              {/* <button className="btn btn-success"><Link to={`/edit/${DataUpdate._id}`}  style={{textDecoration:"none",color:"white"}}>Update</Link></button> */}
              {/* <input  style={{margin:20}}  type="Submit" value="Update"/> */}
              <button
                type="submit"
                className="btn btn-success m-2"
                style={{ color: "white" }}
              >
                Update
              </button>
              <Link to="/view">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-success"
                  style={{ color: "white" }}
                >
                  Delete
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
