import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

 class Taskdd extends Component {
    render() {
        return (
            <div>
                
                    <Grid className="task-grid" style={{display: 'flex'}}>
                    <Cell col={10}>
                        <h2>Task Description</h2>
                            <form class="form-inline">
                                <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only"></label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Describe your task" />
                                </div>
                            <button type="submit" class="btn btn-primary mb-2" style={{background: "black"}}>submit</button>
                            </form>
                        </Cell>
                    <Cell col={8}>
                        <h2>Task Date</h2>
                            <form class="form-inline">
                                <div class="form-group mx-sm-3 mb-2">
                                
                                <label for="inputPassword2" class="sr-only"></label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="choose a date" />
                                </div>
                            <button type="submit" class="btn btn-primary mb-2" style={{ background: "#e22947"}}>submit</button>
                            </form>
                    </Cell>
                    <Cell col={8}>
                        <h2>Date created</h2>
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">

                                <label for="inputPassword2" class="sr-only"></label>
                                <input type="password" class="form-control" id="inputPassword2" placeholder="date created" />
                            </div>
                            
                        </form>
                    </Cell>
                    </Grid>
                </div>
                
        
        )
    }
}

export default Taskdd
