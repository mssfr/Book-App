import React from "react";

class Infoform extends React.Component{
    constructor(){
        super();
        this.state={
            _id:"",
            Title:"",
            Author:"",
            Description:"",
            isediT:false,
        }
      }
    infochange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    infosubmit= (event)=>
    {
        if(!this.state.isediT)
        { 
            
            let data=
                {
                    isediT:this.state.isediT,
                    Title:this.state.Title,
                    Author:this.state.Author,
                    Description:this.state.Description
                }
            this.props.mydata(data);
        }else
        { event.preventDefault();
                let data={
                    isediT:this.state.isediT,
                    _id:this.state._id,
                    Title:this.state.Title,
                    Author:this.state.Author,
                    Description:this.state.Description
                } 
            this.props.mydata(data);
        } 
    }

    componentWillReceiveProps(props)
    {
            if(props.setForm._id !=null){
            this.setState({
                isediT:true,
                _id:props.setForm._id,
                Title:props.setForm.Title,
                Author:props.setForm.Author,
                Description:props.setForm.Description
            })  
        }
    }

    
    render()
  {
    const arr=this.state.isediT;
    return(
        
        <div className ="continer">
            
         <form onSubmit={this.infosubmit}>  
            <h1>Book app</h1><br/>
            <button type="submit" arr>reset</button>
            <label>Title</label><br/>
            <input type="text" 
            onChange={this.infochange}
            name="Title"
            value={this.state.Title}
        
            ></input><br/>
            <label>Author Name</label><br/>
            <input type="text" 
             onChange={this.infochange}
             name="Author"
             value={this.state.Author}
           ></input>
            <br/>
            <label>Description</label><br/>
            <input type="text" 
             onChange={this.infochange}
             name="Description"
             value={this.state.Description}
            ></input><br/><br/>{
                arr? <button type="submit">Update </button>
            :<button type="submit">Create</button>}
            

 
        </form>
        </div>
  
    )
  }
  }
  
  export default Infoform;