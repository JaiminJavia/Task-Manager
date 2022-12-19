const Tasks = require('../models/tasks')
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error.js')
//Function to fetch all the task 
const getAllTasks = asyncWrapper(async(req,res)=>{
   
    const allTasks = await Tasks.find();
    res.status(200).json({allTasks})
})
//Function to create a new task 
const createTasks = asyncWrapper(async(req,res)=>{
    const task = await Tasks.create(req.body)
    res.status(201).json({task}); 
})
//function to fetch single task
const getTask = asyncWrapper(async (req,res,next)=>{
        const singleTask = await Tasks.findById(req.params.id);
        if(!singleTask){
            return next(createCustomError('No task found with that id',404))
        }
        res.status(200).json({singleTask})
    
})
//function to delete specific task
const deleteTasks = asyncWrapper(async(req,res)=>{
        const id = req.params.id;
        const task = await Tasks.findById(id);
        if(!task){
            return next(createCustomError('No task found with that id',404))
        }
        await task.remove();
        res.status(200).json({task,msg:'Task deleted'});
})
//function to update specific task
const updateTasks = asyncWrapper(async(req,res)=>{
        const {id:taskID} = req.params
        const task = await Tasks.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        if(!task){
            return next(new createCustomError('No task found with that id',404))
        }
        res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    updateTasks,
    deleteTasks,
    createTasks,
    getTask
}