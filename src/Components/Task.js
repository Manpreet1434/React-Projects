import React, {Component} from 'react'

class Job extends Component {
    constructor(props) {
        super(props);
        console.log(props.text);
    }

    
    render() { 
        return (  
            <div className="todo">
                <li className="todo-item">
                    {this.props.text}
                </li>
                <button className="complete-btn"><i className="fas fa-check"></i></button>
                <button className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        );
    }
}
 
export default Job;