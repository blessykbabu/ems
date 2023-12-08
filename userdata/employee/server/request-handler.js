// import userSchema from "./model/employee.schema.js";

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const { sign } = jwt;

// export async function register(req, res) {
//     try {
//         let { name,email,phone,place,district,state,role,date,jdate,exp,password,cemail} = req.body;
//         // if( username.length <= 4 && password.length <= 4) {
//         //     return res.json("Invalid username or password");
//         // }
//         let hashedPass = await bcrypt.hash(password, 10);
//         let userExist = await userSchema.findOne( {$and: [ {email: email},{deleted:{$ne:true}} ] });
//         if(userExist) {
//             return res.status(401).send("User already exists");
//         }
//         // let empdata={ name,email,phone,place,district,state,role,date,jdate,exp,password: hashedPass}
//         // console.log("empdata",empdata)
//         let result = await userSchema.create({ name,email,phone,place,district,state,role,date,jdate,exp,cemail,password: hashedPass});
//         if(result){
//             return res.status(200).send("Registration successful!");
//         }else {
//             return res.status(400).send("Registration failed");
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error");
//     }
// }
// // export async function login(req, res) {
// //     try {
// //         let { name, password } = req.body;
// //         // if( username.length < 4 && password.length < 4) {
// //         //     return res.json("Invalid username or password");
// //         // }
// //         let user = await userSchema.findOne({ name });
// //         if(!user) {
// //             return res.status(403).send("Invalid username or password");
// //         }
// //         let passCheck = await bcrypt.compare(password, user.password);
// //         if(passCheck) {
// //             let token = await sign({
// //                 name: user.name,
// //                 id: user._id
// //             },
// //             process.env.SECRET_KEY,
// //             {
// //                 expiresIn: "24h"
// //             })
// //             return res.status(200).json({
// //                 msg: "Login successful...",
// //                 token: token
// //             })
// //         }
// //         return res.status(403).send("invalid username or password")
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send("Error");
// //     }
// // }

// // export async function  getAll(req,res){
// //     try {
// //         let info=await userSchema.find();
// //         return res.json(info)
// //     } catch (error) {
// //         console.log(error)
// //         return res.status(500).send("error occured")
// //     }
// // }

// export async function  getEmployee(req,res){
//     try{

//         // let {id}=req.params._id;
//         // console.log("id",id)

//         let id=req.params.id;
//         // console.log(id);
//         // let result=await userSchema.findOne({_id : id}, deleted:{$ne:true});
//         let result=await userSchema.findOne( {$and: [ {_id : id},{deleted:{$ne:true}} ] });

//         // console.log(result)
//         if(result){
//             return res.json(result);

//         }
//         return res.status(200).send({msg:"upload profile data"})
//     }
//     catch(error){
//         console.log(error)
//         return res.status(500).send("Error occured")
//     }
// }

//  export async function  EmpList(req,res){
//     try {
//         let info=await userSchema.find({
//         deleted:{$ne:true}
//         });
//         return res.json(info)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send("error occured")
//     }
// }
// export async function update(req,res){
//     try {
//        const{id}=req.params;
//   console.log("datas",req.body);
//   const { name,email,phone,place,district,state,role,date,jdate,exp,cemail}=req.body;
//   const result=await userSchema.updateOne({$and: [{_id:id},{$set:{ name,email,phone,place,district,state,role,date,jdate,exp,cemail}}]});
//   return res.json(result)
// } catch (error) {
//         console.log(error)
//         return res.status(500).send("error occured")
//     }
// }
// export async function Delete(req,res){
//     try {
//         console.log("rechead here");
//         const{id}=req.params;
//         const result=await userSchema.updateOne({$and: [ {_id:id},{$set:{deleted:true,deletedAt:new Date}}]});
//         // const result=await userSchema.deleteOne({_id:id});
//        return res.json(result)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send("error occured")
//     }
// }

import userSchema from "./model/employee.schema.js";
import { successFunction } from "./utils/response-handler.js";
import { errorFunction } from "./utils/response-handler.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { sign } = jwt;

export async function register(req, res) {
  try {
    let {
      name,
      email,
      phone,
      place,
      district,
      state,
      role,
      date,
      jdate,
      exp,
      password,
      cemail,
    } = req.body;
    // if( username.length <= 4 && password.length <= 4) {
    //     return res.json("Invalid username or password");
    // }
    let hashedPass = await bcrypt.hash(password, 10);
    let userExist = await userSchema.findOne({
      $and: [{ email: email }, { deleted: { $ne: true } }],
    });
    if (userExist) {
      // return res.status(401).send("User already exists");
      let response = errorFunction({
        statusCode: 401,
        message: "user already exist",
      });
      return res.status(401).send(response);
    }
    // let empdata={ name,email,phone,place,district,state,role,date,jdate,exp,password: hashedPass}
    // console.log("empdata",empdata)
    let result = await userSchema.create({
      name,
      email,
      phone,
      place,
      district,
      state,
      role,
      date,
      jdate,
      exp,
      cemail,
      password: hashedPass,
    });
    if (result) {
      // return res.status(200).send("Registration successful!");
      let response = successFunction({
        statusCode: 200,
        data:result,
        message: "Registration successful",
      });
      return res.status(200).send(response);
    } else {
      // return res.status(400).send("Registration failed");
      let response = errorFunction({
        statusCode: 400,
        message: "Registration Failed",
      });
      return res.status(400).send(response);
    }
  } catch (error) {
    console.log(error);
    // res.status(500).send("Error");
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}
// export async function login(req, res) {
//     try {
//         let { name, password } = req.body;
//         // if( username.length < 4 && password.length < 4) {
//         //     return res.json("Invalid username or password");
//         // }
//         let user = await userSchema.findOne({ name });
//         if(!user) {
//             return res.status(403).send("Invalid username or password");
//         }
//         let passCheck = await bcrypt.compare(password, user.password);
//         if(passCheck) {
//             let token = await sign({
//                 name: user.name,
//                 id: user._id
//             },
//             process.env.SECRET_KEY,
//             {
//                 expiresIn: "24h"
//             })
//             return res.status(200).json({
//                 msg: "Login successful...",
//                 token: token
//             })
//         }
//         return res.status(403).send("invalid username or password")
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error");
//     }
// }

// export async function  getAll(req,res){
//     try {
//         let info=await userSchema.find();
//         return res.json(info)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send("error occured")
//     }
// }

export async function getEmployee(req, res) {
  try {
    // let {id}=req.params._id;
    // console.log("id",id)

    let id = req.params.id;
    // console.log(id);
    // let result=await userSchema.findOne({_id : id}, deleted:{$ne:true});
    let result = await userSchema.findOne({
      $and: [{ _id: id }, { deleted: { $ne: true } }],
    }).select('-password');

    console.log("result",result)
    if (result) {
    //   return res.json(result);

    let response = successFunction({
        statusCode: 200,
        data:result,
        message: "Data Recieaved",
      });
      return res.status(200).send(response);
    }
    else{
        let response = errorFunction({
            statusCode: 400,
            message: "user not found",
          });
          return res.status(400).send(response);
    }
   
    // return res.status(200).send({ msg: "upload profile data" });
  } catch (error) {
    console.log(error);
    // return res.status(500).send("Error occured");

    let response = errorFunction({
        statusCode: 500,
        message: "Error occured",
      });
      return res.status(500).send(response);
  }
}

export async function EmpList(req, res) {
  try {
    let info = await userSchema.find({
      deleted: { $ne: true },
    });
    // return res.json(info);
    if(info){
        let response = successFunction({
            statusCode: 200,
            data:info,
            message: "Data Recieved",
          });
          return res.status(200).send(response);
    }
    else{
        let response = errorFunction({
            statusCode: 404,
            message: "Data not found",
          });
          return res.status(404).send(response);
    }
    
  }
   catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
        statusCode: 500,
        message: "Error occured",
      });
      return res.status(500).send(response);
  }
  
}
export async function update(req, res) {
  try {
    const { id } = req.params;
    let user = await userSchema.findOne({ _id: id, deleted: { $ne: true } });
    if (!user) {
    //   return res.status(401).send("User not exist");
    let response = errorFunction({
        statusCode:401,
        message: "User not exist",
      });
      return res.status(401).send(response);
  }
    
    
    console.log("datas", req.body);
    const {
      name,
      email,
      phone,
      place,
      district,
      state,
      role,
      date,
      jdate,
      exp,
      cemail,
    } = req.body;
    const result = await userSchema.updateOne(
      { _id: id },
      {
        $set: {
          name,
          email,
          phone,
          place,
          district,
          state,
          role,
          date,
          jdate,
          exp,
          cemail,
        },
      }
    );
    // return res.json(result);

    let response = successFunction({
        statusCode: 200,
        data:result,
        message: "Profile update successfully",
      });
      return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
        statusCode: 500,
        message: "Error occured",
      });
      return res.status(500).send(response);
  }
  }

export async function Delete(req, res) {
  try {
    console.log("rechead here");
    const { id } = req.params;
    let user = await userSchema.findOne({ _id: id, deleted: { $ne: true } });
    if (!user) {
    //   return res.status(401).send("User not exist");
    let response = errorFunction({
        statusCode:401,
        message: "User not exist",
      });
      return res.status(401).send(response);
    }
    const result = await userSchema.updateOne(
      { _id: id },
      { $set: { deleted: true, deletedAt: new Date() } }
    );
    // const result=await userSchema.deleteOne({_id:id});
    // return res.json(result);
    let response = successFunction({
        statusCode: 200,
        data:result,
        message: "Deleted",
      });
      return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
        statusCode:500,
        message: "Error  occured",
      });
      return res.status(500).send(response);
  }
}
