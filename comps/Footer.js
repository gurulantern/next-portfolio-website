import React from 'react'
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.section}>
        <h2 className={styles.head}>
            Thanks for stopping by!
        </h2>
        <div className={styles.container}>
            <a href='https://www.linkedin.com/in/alex-ho-a9471833/'>
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </a>     
            <a href='https://github.com/gurulantern'>
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </a>
            <a href='https://codepen.io/your-work/'>
                <FontAwesomeIcon className={styles.icon} icon={faCodepen} />
            </a>
        </div>
    </div>
  )
}

export default Footer