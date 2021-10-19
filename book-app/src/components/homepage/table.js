import React from "react";
import {Link} from "react-router-dom"

class Infotable extends React.Component{
    constructor(){
        super();
        
      }
    render()
  {
    return(
        <div >
        <table className="table">
                          <thead>
                            <tr>
                              
                              <th scope="col">Title</th>
                              <th scope="col">Author Name</th>
                              <th scope="col">Description</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead> 
                            <tbody>
                            {
                            this.props.getDats.length > 0 ?
                            (
                                this.props.getDats.map(e=>
                                    <tr>
                                        
                                        <td>{e.Title}</td>
                                        <td>{e.Author}</td>
                                        <td>{e.Description}</td>
                                        <td><button type="button" id="buttton-primary" onClick={
                                            event=>{this.props.setdata(e)}
                                        }>Edit</button>
                                        <button type="button" id="buttton-primary"
                                        onClick ={event=>{this.props.del(e)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                           ):(
                            <tr> 
                                <td>No Data</td>
                            </tr> 
                           )
                            }
                            </tbody> 
                      </table></div>
    )
  }
  }
  
  export default Infotable;