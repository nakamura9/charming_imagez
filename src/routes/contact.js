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
            <div style={{margin: "0px auto", width: "50%", padding: '36px', borderRadius: "8px", boxShadow: "inset 0px 0px 10px #bbb", backgroundColor: 'white' }}> 
                <form method="POST" name='contact' data-netlify="true">
                    <label htmlFor="">
                        Name: 
                    </label>
                    <input className='form-control' type="text"/>
                    <label htmlFor="">
                        Email Address: 
                    </label>
                    <input className='form-control' type="text"/>
                    <label htmlFor="">
                        Subject: 
                    </label>
                    <input className='form-control' type="text"/>
                    <label htmlFor="">Message:</label>
                    <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
                    <button className="btn quarternary text-white " style={{marginTop: "5px"}}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage