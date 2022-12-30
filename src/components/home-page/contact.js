import React from 'react';

export default function Contact() {
    return (
        <div className='contact-content'>
            <div>
                <h2>Get in touch</h2>
                <p className='sub-heading'>Green from Created moved i lights us isn&#39;t tree midst herb, herb void
                    dominion
                    likeness
                    a won&#39;t,
                    deep.</p>
            </div>
            <div className="content">
                <div className="contact-form-container">
                    <form className="contact-form">
                        <input placeholder="Name" id="nameBox" required />
                        <input placeholder="E-mail" id="emailBox" type="email" required />
                        <input placeholder="Phone number" type="tel" id="phoneBox" required />
                        <textarea placeholder="Message" id="message-box" required></textarea>
                        <button id="submit-button">Send</button>
                    </form>
                </div>

                <div>
                    <picture>
                        <source srcSet={require('../../assets/images/contact/min-900.png')} media='(min-width: 900px)' />
                        <source srcSet={require('../../assets/images/contact/min-600.png')} media='(min-width: 600px)' />
                        <img src={require('../../assets/images/contact/max-599.png')} alt='chef' loading='lazy' />
                    </picture>
                    <p>Phone number: 902-999-9999</p>
                    <p>E-mail: inquiry@sultanskitchen.ca</p>
                </div>
            </div>

            <div className='location'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d26449.16282203406!2d-118.24802729810257!3d34.04030357672751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x80c2c633e76e882d%3A0x37f7f74ab21c52bc!2s730-712+San+Pedro+St%2C+Los+Angeles%2C+CA+90014%2C+USA!3m2!1d34.040207699999996!2d-118.2473107!5e0!3m2!1sen!2ssa!4v1547921511149"
                    title='location-map' frameBorder="0"></iframe>
            </div>
        </div>
    );
}