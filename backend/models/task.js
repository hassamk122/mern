import {Schema,model} from "mongoose";


const priorty = {
    HIGH: "high",
    MEDIUM: "medium",
    LOW: "low"
};

const status = {
    COMPLETED: "completed",
    INPROGRESS: "inProgress",
    UNCOMPLETED: "unComplete"
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
    priority : {
        type : String,
        enum:Object.values(priorty),
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