import React, { Component } from 'react'

class userComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            state:'',
            city:'',
            country:'',
            visitingplace:'',
            date:''
        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeCountryHandler=this.changeCountryHandler.bind(this);
        this.changeVisitingPlaceHandler=this.changeVisitingPlaceHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});

    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});

    }

    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});

    }

    changeStateHandler=(event)=>{
        this.setState({state: event.target.value});

    }

    changeCityHandler=(event)=>{
        this.setState({city: event.target.value});

    }

    changeCountryHandler=(event)=>{
        this.setState({country: event.target.value});

    }

    changeVisitingPlaceHandler=(event)=>{
        this.setState({visitingplace: event.target.value});

    }

    
    changeDateHandler=(event)=>{
        this.setState({date: event.target.value});

    }
    render(){
        return(
            <div>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>State:</label>
                                        <input placeholder="State" name="state" className="form-control"
                                        value={this.state.state} onChange={this.changeStateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input placeholder="City" name="city" className="form-control"
                                        value={this.state.city} onChange={this.changeCityHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Country:</label>
                                        <input placeholder="Country" name="country" className="form-control"
                                        value={this.state.country} onChange={this.changeCountryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Visiting Place:</label>
                                        <input placeholder="Visiting Place" name="visitingplace" className="form-control"
                                        value={this.state.visitingplace} onChange={this.changeVisitingPlaceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Date:</label>
                                        <input placeholder="Date" name="date" className="form-control"
                                        value={this.state.date} onChange={this.changeDateHandler}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default userComponent