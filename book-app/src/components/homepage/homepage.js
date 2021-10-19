import axios from "axios";
import React, { useEffect, useState } from "react"
import "./homepage.css"




import Infoform from "./form";
import  Infotable from "./table"
class Homepage extends React.Component{
constructor(){
  super();
  this.state={
    data:[],
    EditData:[]
  }

}
create = data =>
{
  if(!data.isediT){
    axios.post("http://localhost:9000/info/add",data).then(res=>{
      this.getAll(); 
    })
  }
  else{
    axios.put("http://localhost:9000/info/update",data).then(res=>{
       this.getAll();
    })
  }
  
}

componentDidMount()
{
this.getAll();
}

getAll(){
axios.get("http://localhost:9000/info/get").then(res=>{
  this.setState({
    data:res.data
  })

})
}

update = data => {
   console.log(data);
   this.setState({
    EditData:data
   })
}
del = data =>{
  var option =window.confirm(`Are you want delete${data.Title}`)
  if(option){
    axios.delete(`http://localhost:9000/info/del/${data._id}`).then(res=>{
     this.componentDidMount();
     console.log(res);
    })
  }
}


  render()
{
  return(
      <div className ="container">
         <div id="buttonlogout" onClick={this.props.setLoginUser} >Logout</div>
        <div className="row">
          <div className="col-6"  >
          <Infoform mydata ={this.create} setForm={this.state.EditData}/>
          </div>
          <div className="col-5">
          <Infotable getDats={this.state.data}  setdata={this.update}
          del={this.del}/>
          </div>
        </div>
      </div>

  )
}
}

export default Homepage;