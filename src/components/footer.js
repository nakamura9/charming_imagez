import React from 'react'
import style from '../styles.css'
const Footer = (props) =>{
    return(<footer className={style.footer}>
            <div>Made with love by <b>Umisoft</b>
                <p><i class="fa fa-copyright" aria-hidden="true"></i> 2019</p>
            </div>
            <div>
            <h5>Links</h5>
                <p>About</p>
                <p>Blog</p>
                <p><i className="fa fa-user fa-2x"></i> Admin</p>

            </div>
            <div>
            <h5>Social</h5>
                <p><i className="fab fa-facebook fa-2x" ></i> Facebook</p>
                <p><i className="fab fa-instagram fa-2x" ></i> Instagram</p>
                <p><i className="fas fa-envelope fa-2x" ></i> Email</p>
            </div>
        </footer>)
}

export default Footer