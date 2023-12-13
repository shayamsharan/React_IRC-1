import { useState } from "react";



const TempComp =()=>{

      const [data,setData] = useState({
        usrename:'',
        password:''
      })
      const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.targetvalue})
      }
      const handleSubmit = (e)=>{
        e.preventDefault
      }

    return(
        <>
        <form>
            <input type="text"/>
            <input type="password"/>
            <input type="submt" calue="Login"/>

        </form>
        </>
    )
}
export default  TempComp;