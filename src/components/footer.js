import React from 'react'
import style from '../styles.css'
const Footer = (props) =>{
    return(<footer className={style.footer}>
            <div>
                <p>Made with love by <b>GonC</b> <i class="fa fa-copyright" aria-hidden="true"></i> 2019</p>
            </div>
            <div>
            <h5>Links</h5>
                <a className='footer__link' href='/#/about/'> <i class="fas fa-info-circle fa-2x"></i> About</a>
                <a className='footer__link' href='https://be.contentful.com/login'> <i className="fas fa-blog fa-2x"></i> Blog</a>
                <a className='footer__link' href='#'><i className="fa fa-user fa-2x"></i> Admin</a>

            </div>
            <div>
            <h5>Social</h5>
                <a className='footer__link' href='https://facebook.com/CharmingImagez
                '><i className="fab fa-facebook fa-2x" ></i> Facebook</a>
                <a className='footer__link' href=' https://www.instagram.com/charming_imagez'><i className="fab fa-instagram fa-2x" ></i> Instagram</a>
                <a className='footer__link' href='mailto:geraldczw@gmail.com'><i className="fas fa-envelope fa-2x" ></i> Email</a>
            </div>
        </footer>)
}

export default Footer