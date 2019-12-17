import React from 'react'
import style from './styles.css'
const Footer = (props) =>{
    return(<footer className={style.footer}>
            <div>Umisoft</div>
            <div><i className="fa fa-user"></i> Admin</div>
            <div>
                <i class="fab fa-facebook" ></i>
                <i class="fab fa-instagram" ></i>
            </div>
        </footer>)
}

export default Footer