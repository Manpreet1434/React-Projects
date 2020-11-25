import React, { Component } from 'react';

class AddTask extends Component {


    // constructor(props) {
    //     super(props);
    //     // this.inputTextHandler = this.inputTextHandler.bind(this);        
    // }

    inputTextHandler(e){
        console.log(e.target.value);
        this.props.setInputText(e.target.value);
    }

    submitHandler = (e) =>{
        e.preventDefault();
        console.log("Hekk");
        this.props.setTasks([
            ...this.props.taskList,
            {text: this.props.inputText, completed: false, id: Math.random() *  1000}
        ]);
        this.props.setInputText("");
    }

    render() { 
        return ( 
            <form>
                <input 
                    type="text"
                    value={this.props.inputText} 
                    onChange={(event) => { this.inputTextHandler(event)}} 
                    className="todo-input" 
                />
                
                <button 
                    onClick={(event) => {this.submitHandler(event)}} 
                    className="todo-button" 
                    // type="submit"
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                
                <div className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
         );
    }
}
 
export default AddTask;