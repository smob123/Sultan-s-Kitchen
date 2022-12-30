import React, { Component } from 'react';

export default class Reservation extends Component {

    validateReservation() {
        const inputs = document.querySelectorAll('.reservation-form input');
        let valid = true; //assume that the inputs are valid

        for (let input of inputs) {
            //if any of the inputs is empty, or dosen't match its specified type
            if (input.value.trim() === '' || input.validity.typeMismatch) {
                valid = false;
            }
        }

        if (valid) {
            window.event.preventDefault();
            alert('Your reservation has been confirmed.\nSee you soon!');
            this.hideReservation();
        }
    }

    hideReservation() {
        const container = document.querySelector('.reservation-container');
        const body = document.querySelector('body');

        container.style['opacity'] = 0;
        container.style['pointer-events'] = 'none';

        //show the scroller for the body element
        body.style['overflow-y'] = 'scroll';
    }

    render() {
        return (
            <div className='reservation-container'>
                <div className='reservation-overlay' onClick={() => this.hideReservation()}></div>
                <div className='reservation-content'>
                    <picture>
                        <source srcSet={require('../../assets/images/reservation/min-600.png')} media='(min-width: 600px)' />
                        <img src={require('../../assets/images/reservation/max-599.png')} alt='table' loading='lazy' />
                    </picture>
                    <h1>Reserve a Table</h1>
                    <form className='reservation-form'>
                        <div className='reservation-form-content'>
                            <div>
                                <span>First Name</span>
                                <input type='text' required />
                            </div>
                            <div>
                                <span>Last Name</span>
                                <input type='text' required />
                            </div>
                            <div>
                                <span>Email</span>
                                <input type="email" required />
                            </div>
                            <div>
                                <span>Phone Number</span>
                                <input type='tel' required />
                            </div>
                            <div>
                                <span>How Many People?</span>
                                <select>
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>More than 3 People</option>
                                </select>
                            </div>
                            <div className='reservation-date'>
                                <span>Date</span>
                                <select>
                                </select>
                            </div>
                            <div>
                                <span>Time</span>
                                <select>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                    <option>6:00 PM</option>
                                    <option>7:00 PM</option>
                                    <option>8:00 PM</option>
                                    <option>9:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div className='message-container'>
                            <span>Message</span>
                            <textarea className='reservation-message'></textarea>
                        </div>
                        <button onClick={() => this.validateReservation()}>Reserve Now</button>
                    </form>
                </div>
            </div>
        );
    }
}