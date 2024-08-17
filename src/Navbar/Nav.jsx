import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './nav.css';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Courses', href: '/Course' },
    { name: 'Contact', href: '/Contact' },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [isJapanese, setIsJapanese] = useState(() => localStorage.getItem('language') === 'ja');

    useEffect(() => {
        // Load language from localStorage or default to English
        const language = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(language);
    }, [i18n]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleLanguage = (lang) => {
        const newLang = lang === 'ja' ? 'ja' : 'en';
        setIsJapanese(newLang === 'ja');
        localStorage.setItem('language', newLang);
        i18n.changeLanguage(newLang);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
        const checkBox = document.getElementById('burger-checkbox');
        if (checkBox) {
            checkBox.checked = false;
        }
        window.scrollTo(0, 0);
    };

    const handleLanguageChange = (e) => {
        toggleLanguage(e.target.value);
    };

    useEffect(() => {
        const mainHeader = document.getElementById("hide-header");

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (mainHeader) {
                mainHeader.style.top = currentScrollPos < (window.prevScrollpos || 0) ? "0" : "-480px";
                mainHeader.style.background = currentScrollPos === 0 ? 'transparent' : '#000';
                mainHeader.style.filter = currentScrollPos === 0 ? 'none' : '';
                window.prevScrollpos = currentScrollPos;
            }
        };

        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            const checkBox = document.getElementById('burger-checkbox');
            if (checkBox.current && !checkBox.current.contains(event.target)) {
                setIsMenuOpen(false);
                if (checkBox) {
                    checkBox.checked = false;
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav id="hide-header" className="lg:px-[6rem] px-5 py-3 bg-black z-30">
            <div className="mx-auto flex items-center justify-between py-2">
                <div className="inline-flex items-center space-x-2">
                    <div className="flex justify-center my-auto">
                        <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/site-logo-new.png?raw=true" alt="nav-logo" className="rounded-3xl lg:size-11 size-10 brightness-[120%] border-2 border-orange-700" />
                        <div className="flex flex-col my-auto text-start text-white ml-3">
                            <h1 className="tracking-wider font-semibold lg:text-base text-[15px]">YJLS</h1>
                            <p className="lg:text-xs text-[10px] tracking-wider ml-[1px]">{t('Yume')}</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    id="navItems"
                                    to={item.href}
                                    onClick={handleMenuItemClick}
                                    className="menuItems tracking-[1px] relative text-white font-[500] text-[15px]"
                                    activeClassName="active"
                                >
                                    {t(item.name)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <select
                        value={isJapanese ? 'ja' : 'en'}
                        onChange={handleLanguageChange}
                        className="ml-8 bg-transparent cursor-pointer text-white border-none p-1"
                    >
                        <option value="en" className="text-black">ENG</option>
                        <option value="ja" className="text-black">日本語</option>
                    </select>
                </div>

                <div className="lg:hidden">
                    <div className="flex">
                        <div>
                            <input id="burger-checkbox" type="checkbox" onClick={toggleMenu} />
                            <label className="burger" htmlFor="burger-checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className={`absolute inset-x-0 top-[5rem] origin-top-right transform p-2 transition lg:hidden ${isMenuOpen ? 'transparent' : '#000'}`}>
                        <div className="px-6 py-10 rounded-2xl bg-gradient-to-b from-gray-400 to-orange-300">
                            <nav className="grid gap-y-4">
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        onClick={handleMenuItemClick}
                                        className="-m-3 flex items-center rounded-md p-3 text-sm font-base"
                                        activeClassName="active"
                                    >
                                        <span className="ml-3 text-base font-medium text-gray-700">
                                            {t(item.name)}
                                        </span>
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="grid place-content-start gap-4 lg:mt-7 mt-4 lg:ml-0 ml-[5px]">
                                <select
                                    value={isJapanese ? 'ja' : 'en'}
                                    onChange={handleLanguageChange}
                                    className="text-white cursor-pointer bg-transparent border-none p-1"
                                >
                                    <option value="en" className="text-black">ENG</option>
                                    <option value="ja" className="text-black">日本語</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
