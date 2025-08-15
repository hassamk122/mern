import {Schema,model} from "mongoose";




const status = {
    COMPLETED: "completed",
    INPROGRESS: "inProgress",
    UNCOMPLETED: "NotStarted"
};

const taskSchema = new Schema({
    title :{
        type:String,
        required:true,
    },
    description : {
        type : String,
        required : true,
    },
    dueDate : {
        type : Date,
        required : true,
    },
    status :{
        type : String,
        enum:Object.values(status),
        required : true,
        default: status.UNCOMPLETED
    }
},{timestamps:true});

const Task = model('task',taskSchema);

export default Task;