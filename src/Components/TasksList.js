import React, {Component} from 'react';
import Task from './Task';

class TasksList extends Component {

    constructor(props){
        super(props);
    }   


    render() { 
        return ( 
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        this.props.taskList.map(task => (
                            <Task 
                                text={this.props.taskList.text}
                                key ={this.props.taskList.id} 
                            />
                        ))
                    }    
                </ul>
            </div>
         );
    }
}
 
export default TasksList;