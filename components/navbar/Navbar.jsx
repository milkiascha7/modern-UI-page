import React,{useState} from 'react'
import styles from '../../styles/navbar.module.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../public/images/logo.svg'
import Image from 'next/image'


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is Gpt</a></p>
    <p><a href="#possibility">Open Ai</a></p>
    <p><a href="#features">Case Study</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar__links}>
        <div className={styles.gpt3__navbar__links__logo}>
          <Image src={logo} alt="logo" width="62px" height="16px" />
        </div>
        <div className={styles.gpt3__navbar__links__container}>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className={styles.gpt3__navbar__sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.gpt3__navbar__menu}>
        {toggleMenu && (
        <div className={`${styles.gpt3__navbar__menu__container } ${styles.scale__up__center} `}>
          <div className={styles.gpt3__navbar__menu__container__links}>
            <Menu />
          </div>
          <div className={styles.gpt3__navbar__menu__container__links__sign}>
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}

        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
      </div>
    </div>
  );
};

export default Navbar