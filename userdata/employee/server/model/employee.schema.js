import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
       
    },
  
    phone: {
        type: String,
        required: true
    },

      place:{
        type:String,
        required:true
    },

    district:{
      type:String
  },

  state:{
    type:String
},

role:{
  type:String
},

date:{
  type:String
},

jdate:{
  type:String
},

exp:{
  type:String
},
cemail:{
  type:String
},

password:{
  type:String
},
deleted:{
  type:Boolean,
  default:false, 
},
deletedAt:{
  type:Date
}
},{
  timestamps:true
});

export default mongoose.model.employees || mongoose.model("employee", schema);
