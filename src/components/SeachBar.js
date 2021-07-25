import React from 'react';

export default class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
            term: ""
        };
        
    }
    
    changeHandler=(event)=>{
        this.setState({term: event.target.value})
    }
    
    handleSumbit=event=>{
        event.preventDefault();
        //passing this.state.term from child(searchbar) to parent (app.js)
        this.props.onFormSubmit(this.state.term);

    };


    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.handleSumbit}>
                    <label>Video Search</label>
                    <div className='field'>
                        <input type='text' value={this.state.term} onChange={this.changeHandler} autoFocus></input>
                    </div>
                </form>
            </div>
            );
    }
}




