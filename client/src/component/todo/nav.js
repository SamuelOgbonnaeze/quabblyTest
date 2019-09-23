import React, { Component } from 'react'
import todoImage from '../../component/todoimage/todimage.png'
import { Grid, Cell } from 'react-mdl'
import Taskdd from './taskdd'
import '../../component/styles/task.css'
// import Axios from 'axios'




class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             nametext: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    

    
    
    render() {

    return (
        
        <div>
                
                    <img src={todoImage} alt="" style={{ height: '300px', width: "100%"}}/>
            <div className="align-items">
                <form class="form-inline" onSubmit={this.handleSubmit}>
  
                <div class="form-group mx-sm-3 mb-2">
                    <h1>My Todo List</h1>
               <label for="inputPassword2" class="sr-only"></label>
                        <input type="nametext" class="form-control" id="taskname" placeholder="Task name"
                            onChange={this.handleChange} value={this.state.nametext} name="nametext"/>
                        
                    <button type="submit" class="btn btn-primary mb-2">submit</button>
  </div>
  
            </form>
            <hr style={{ borderTop: "3px solid #e22947", width: "100%" }} />
            <Grid>
                <Cell>
                    
                    <Taskdd />
                </Cell>
                </Grid>
                
            </div>
            
                </div>
            
        
        )
    }

}

export default Nav;
