import React from 'react';

export default class Recover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     fetch('/api/v1/auth/login', {
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         if (res.status === 200) {
    //             console.log("Props: ", this);
    //             console.log( "Response: ", res );

    //             this.props.changeView('login');

    //             // this.props.history.push('/');
    //         } else {
    //         const error = new Error(res.error);
    //         throw error;
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         alert('Error logging in please try again');
    //     });
    // }

    render () {
        return (
            <form className="md-auth__container" onSubmit={this.onSubmit}>
                <h2 className="md-auth-title__subheader">Recover Your Account</h2>
                <label className="md-auth-form__label" htmlFor="email">Email</label>
                <input
                    className="md-auth-form__input"
                    type="email"
                    name="email"
                    // placeholder="Email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    className="md-auth-form__submit md-auth__button"
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
};