import React, { useEffect, useState } from 'react'
import { addTask, addUser, deleteTask, savearr , editTask, checkComplete, countComplete, searchFunc, filterComplet, filterUnComplet, mapAll } from '../../Redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function Users() {
    
    let[edit,setEdit]=useState(false)
    let[id,setId]=useState(null)
    let [updateTitle,setUpdateTitle]=useState('')
    let [updateDiscription,setUpdateDiscription]=useState('')
    let [val,setval]=useState('')
    let [selectval,setSelectval]=useState('')
  console.log(selectval)


    let [title,setTitle]=useState('')
    let [description,setDescription]=useState('')
    let [error,setError]=useState('')
    // let [count,setcount]=useState('')

    

   

    let {userList ,searchList } =useSelector((state)=>state.user)
  
    let dispatch=useDispatch()
   console.log(userList)
   let [bigArray,setBigArray]=useState(userList)
  


   useEffect(()=>{
    dispatch(savearr())
   
    
       },[])


  
  
      
  return <>

  <div className='usersTask'>
   <div className='container my-5 p-4 rounded-4 shadow-lg text-center py-5'>
 
  <h1 className='title mb-5'>Users Tasks </h1>
  

   <form 
   
   onSubmit={(e)=>{
    e.preventDefault()
    if(title == '' || description== ''){
        setError('Enter data')
    }
    else{
        dispatch(addTask({id:userList.length +1 , title , description , done:false}))
        setTitle('')
        setDescription('')
    }


   }} action="">
    <input
    value={title}
    onChange={(e)=>{
        setTitle(e.target.value)

    }}
     type="text" className='form-control mt-4 w-50 mx-auto' placeholder='Enter Title' />
    <textarea 
    value={description}
     onChange={(e)=>{
        setDescription(e.target.value)

    }}
    name="description" className='form-control my-4  w-50  mx-auto' placeholder='Enter Description' ></textarea>
    {error ? <p className='alert alert-danger'>{error}</p> : ''}
    <button className='btn bg-success text-light' type='submit'>Add Task</button>
   </form>


   
   <input
   
   onChange={(e)=>{
       setval(e.target.value)
    
   }}
   onKeyUp={()=>{
       dispatch(searchFunc(val))
   }}
    className="form-control my-2 w-50 me-auto" type="search" placeholder="Search By Title" aria-label="Search"/>




   <div className='tasks mt-5'>
    <div className='row g-3'>

        {val.length > 0 ?  searchList.map((task,index)=>{
            return<div key={index} className='col-md-6'>
            <div className={` position-relative cont  p-4 rounded-4 ${task.done ? 'taskcomplete' : 'task'}`}>
            <label htmlFor='lang1' className={`checkdiv ${task.done ? 'bg-success' : 'bg-warning'}`}>
              
                 <input  type="checkbox" id="lang1" name="lang1" value={task.done} onChange={()=>{
                    dispatch(checkComplete(task.id))
                 }} />
            </label>
            {task.done==false? '' : <span className='bg-success text-light end-0 top-0 p-2 rounded-5 position-absolute'>Completed</span>}
            {/* <span className='bg-success text-light end-0 top-0 p-2 rounded-5 position-absolute'>{task.done ? 'Completed': ''}</span> */}
            
                <h3>{task.title}</h3>
                <h6>{task.description}</h6>
                
            
                <div className='icons d-flex justify-content-around'>
                <i 
                onClick={()=>{
                    dispatch(deleteTask(task.id))
                }}
                 className="fa-solid fa-trash-can"></i>
                <i
                onClick={()=>{
                    setEdit(true)
                    setId(task.id)
                    
                   
                }}
                
                  className="fa-solid fa-file-pen"></i>
                </div>
                {edit && id==task.id && 
                <>
              <input onChange={(e)=>setUpdateTitle(e.target.value)}  className='form-control mt-3' type='text' placeholder='Update Title'/>
              <input onChange={(e)=>setUpdateDiscription(e.target.value)}  className='form-control my-3' type='text' placeholder='Update Description'/>
              {/* <p className='alert alert-danger'>{error.length > 0 ? {error} : ''}</p>  */}
              <button
              onClick={()=>{
                if(updateTitle =='' || updateDiscription ==''){
                   return 
                }
                else{
                    dispatch(editTask({id:task.id ,title: updateTitle ,description: updateDiscription}))
                setEdit(false)
                }
                
              }}
               type='submit'
              className='btn bg-warning'>Update</button>
            
              </>
                }

            </div>
           
           
        </div>

        } ) :   userList.length > 0  ? userList.map((task,index)=>{
            return<div key={index} className='col-md-6'>
            <div className={` position-relative cont  p-4 rounded-4 ${task.done ? 'taskcomplete' : 'task'}`}>
            <label htmlFor='lang1' className={`checkdiv ${task.done ? 'bg-success' : 'bg-warning'}`}>
              
                 <input  type="checkbox" id="lang1" name="lang1" value={task.done} onChange={()=>{
                    dispatch(checkComplete(task.id))
                 }} />
            </label>
            {task.done==false? '' : <span className='bg-success text-light end-0 top-0 p-2 rounded-5 position-absolute'>Completed</span>}
            {/* <span className='bg-success text-light end-0 top-0 p-2 rounded-5 position-absolute'>{task.done ? 'Completed': ''}</span> */}
            
                <h3>{task.title}</h3>
                <h6>{task.description}</h6>
                
            
                <div className='icons d-flex justify-content-around'>
                <i 
                onClick={()=>{
                    dispatch(deleteTask(task.id))
                }}
                 className="fa-solid fa-trash-can"></i>
                <i
                onClick={()=>{
                    setEdit(true)
                    setId(task.id)
                    
                   
                }}
                
                  className="fa-solid fa-file-pen"></i>
                </div>
                {edit && id==task.id && 
                <>
              <input onChange={(e)=>setUpdateTitle(e.target.value)}  className='form-control mt-3' type='text' placeholder='Update Title'/>
              <input onChange={(e)=>setUpdateDiscription(e.target.value)}  className='form-control my-3' type='text' placeholder='Update Description'/>
              {/* <p className='alert alert-danger'>{error.length > 0 ? {error} : ''}</p>  */}
              <button
              onClick={()=>{
                if(updateTitle =='' || updateDiscription ==''){
                   return 
                }
                else{
                    dispatch(editTask({id:task.id ,title: updateTitle ,description: updateDiscription}))
                setEdit(false)
                }
                
              }}
               type='submit'
              className='btn bg-warning'>Update</button>
            
              </>
                }

            </div>
           
           
        </div>

        }) : <h3> Empty tasks</h3>} 
        {/* {search ()} */}
       
    </div>
   </div>
   </div>
  </div>

 
  </>
}
