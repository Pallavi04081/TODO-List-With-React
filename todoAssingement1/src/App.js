import {useState} from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './App.css';

function App() {
 
  const [input,setInput] = useState('')
  console.log(input)
  const [subInput,setSubmitInput] = useState([])
  const [edit,setEdit] = useState({
    ele:"",
    index:"",
    status:""
  })
  const [EditedChanges,setEditedChanges]=useState('')
   const submit = (index)=>{
    if(index!='flase'){
      setSubmitInput((previous)=>{
           return previous.map((ele,idx)=>{
                return idx===index ? EditedChanges : ele
           })
      })
      setEdit((previous)=>{
        return {...previous,status:""}
      })
      setEditedChanges("")
     }
    else{
      if(!input){
        alert('Invalid Data')
      }
      else{
        console.log(input)
      setSubmitInput((previous)=>{
        return [...previous,input] 
     })
        setInput("")
    }}
   }
    
    const change = (event)=>{
       event.target.style.color="green"
    }
  
    const Delete = (index1)=>{
     const output =  subInput.filter((ele,index)=>{
          if(index!=index1){
            return ele
          }
        })
     setSubmitInput(output);
      }

      const Edit = (event,index1)=>{
        console.log(event.target.style.color)
         const output = subInput.filter((ele,index)=>{
           if(index==index1){
            return ele
           }
         })
         setEdit({ele:output,index:index1,status:"true"})
         event.target.style.color="organge";
      }

    return (
      <>
      <div class="card" style={{width:"60%",margin:"auto",marginTop:"30px",}}>
      <h3 style={{margin:"auto"}}>TODO</h3>
      {
      edit.status ? 
      <div style={{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px"}}>
      <input type="text" class="form-control-plaintext" value={`${EditedChanges}`} style={{width:"85%",display:"inline",marginLeft:"20px"}} onChange={(e)=>{setEditedChanges(e.target.value)}} placeholder={`${edit.ele}`} />
      <EditIcon style={{width:"10%",display:"inline",color:"green",marginTop:"10px",marginLeft:"20px"}} onClick={()=>{submit(edit.index)}}/>
      </div>:
      <div style={{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px"}}>
      <input type="text" class="form-control-plaintext" value={`${input}`}  style={{width:"85%",display:"inline",marginLeft:"20px"}} onChange={(e)=>{setInput(e.target.value)}} placeholder="Write Your Todo Here" />
      <button class="btn btn-primary" style={{width:"10%",display:"inline",marginRight:"10px"}} onClick={()=>{submit('flase')}}>submit</button>
      </div>
      }
      <div>
        {
          subInput.map((ele,index)=>{
        return(<>
        <div style={{display:"flex",flexDirection:"row",marginLeft:"20px",position:"relative"}}>
        <div style={{width:"85%"}}>
        <p>{ele}</p>
        </div>
        <div style={{width:"10%",}}>
        <EditIcon size="small" style={{color:'black'}} onClick={(event)=>Edit(event,index)}  />
        <CheckCircleOutlineIcon size="small" style={{color:'black'}} onClick={change}/>
        <DeleteOutlineIcon size="small" style={{color:'red'}} onClick={()=>Delete(index)}/>
        </div>
        </div>  
        </>)    
          })}
     </div>
     </div>
      </>
    )
}

export default App;
