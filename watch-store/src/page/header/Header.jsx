import React from 'react';
import telImg from '../img/contact.svg'
import loginImg from '../img/login.svg'
import cartImg from '../img/header-cart.svg'
import searchImg from '../img/header-search.svg'
import './header.scss'
import BurgerMenu from './BurgerMenu';
export const Header = () => {
    return (
        <div className='container'>
            <div className="flex-container">
                <div className="row">
                    <div className="header">
                        <div className='row'>
                            <img src={telImg} alt="" className='header-contact-img'/>
                            <p className="header-contact"><a href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a>|    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
                        </div>
                        <div className="row">
                            <img src={loginImg} alt="" className='header-contact-img' />
                            <p className="header-contact"><a href="">Войти</a>/<a href="">Регистрация</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="header-navLink">
                    <div className="row">
                        <h3 className='header-navLink-brand-name'>PORTEN</h3>
                    </div>
                    <div className="row">
                        <div className="header-navLink-links active">
                            <a href=''>Понравилось</a>
                        </div>
                        <div className="header-navLink-links">
                            <a href=''>личный кабинет</a>
                        </div>
                        <div className="header-navLink-links">
                            <a href=''>настройки</a>
                        </div>
                        <BurgerMenu />
                        <a href="">
                        <img src={cartImg} alt="" className='header-navLink-img' />
                        </a>
                        <a href="">
                        <img src={searchImg} alt="" className='header-navLink-img' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

