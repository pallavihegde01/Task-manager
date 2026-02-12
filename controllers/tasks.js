const getAllTasks = (req,res)=>{
    res.send("get all tasks");
}

const getTask = (req,res)=>{
    res.json({id:req.params.id});
}

const updateTask = (req,res)=>{
    res.send("update Task");
}

const createTask = (req,res)=>{
    res.json(req.body);
}
const deleteTask = (req,res)=>{
    res.send("delete task");
}

module.exports = {
    getAllTasks,getTask,updateTask,createTask,deleteTask,
}