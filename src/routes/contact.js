import React, {useState} from 'react'

const ContactPage = (props) =>{
    return(
        <section style={{
            backgroundImage: "url(/static/images/email-pattern.png)", backgroundRepeat: 'repeat'}}>
            <h1 style={{
        fontFamily: 'AlexBrush', 
        fontSize: '5rem', 
        padding: '0.75rem',
        fontWeight: '400',
        textAlign: 'center'
        
    }}>Contact Us</h1>
            <div classname='contact-form'> 
                <form method="POST" action="https://formspree.io/xjvydwrg">
                    <label htmlFor="">
                        Name: 
                    </label>
                    <input className='form-control' type="text" name='name'/>
                    <label htmlFor="">
                        Email Address: 
                    </label>
                    <input className='form-control' type="text" name='email'/>
                    <label htmlFor="">
                        Subject: 
                    </label>
                    {/* <label htmlFor="">
                        Second Name:
                        <input type='text' id='second-name'/> 
                    </label> */}
                    <input className='form-control' type="text" name='subject'/>
                    <label htmlFor="">Message:</label>
                    <textarea className='form-control' name="subject" cols="30" rows="10"></textarea>
                    <button className="btn quarternary text-white " style={{marginTop: "5px"}}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage