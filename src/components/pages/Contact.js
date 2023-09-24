import React from 'react';
import { useState } from 'react';
import { emailCheck } from '../utils/helper';

const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    },
    icon: {
        height: 20,
        marginRight: 5
    },
    lines: {
        height: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
}


export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // set state according to the type of input field
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        } else {
            setUserName(value);
        }
    };

    // handle blur event, check if the input is empty
    const handleBlur = (e) => {
        // Getting the name of the input which triggered the blur event
        const { name, value } = e.target;

        // Check if the input is empty and set the error message
        if (value.trim() === '') {
            setErrorMessage(`${name} is a required field.`);
        } else {
            setErrorMessage('');
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        setErrorMessage('');

        // First we check to see if the email is not valid. If so, we set an error message to be displayed on the page.
        if (!emailCheck(email)) {
            setErrorMessage('Email is not valid');
            return;
        }
        if (userName.length < 3) {
            setErrorMessage('User name is not valid, must have at least 3 characters');
            return;
        }
        if (message.length < 10) {
            setErrorMessage('Message is not valid, must have at least 10 characters');
            return;
        }

        alert(`Hello ${userName}, we will content you soon!`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setMessage('');
        setEmail('');
    };


    return (
        <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
                <h3>Hello {userName}, please share your thoughts with me!</h3>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">E-mail:</span>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email address"
                            required
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            // check if the input is empty
                            onBlur={handleBlur}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name:</span>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onBlur={handleBlur}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Text :</span>
                        <input
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Leave a message here"
                            required
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onBlur={handleBlur}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                </form>
            </div>
            <div className="container text-center">
                {errorMessage && (
                    <div style={{ padding: '10px' }}>
                        <p className="error-text" style={{ fontSize: '20px' }}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
);
}