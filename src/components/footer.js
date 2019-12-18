import React from 'react'
import style from '../styles.css'
const Footer = (props) =>{
    return(<footer className={style.footer}>
            <div>Umisoft</div>
            <div><i className="fa fa-user fa-2x"></i> Admin</div>
            <div>
                <i className="fab fa-facebook fa-2x" ></i>
                <i className="fab fa-instagram fa-2x" ></i>
                <i className="fas fa-envelope fa-2x" ></i>
            </div>
        </footer>)
}

export default Footer