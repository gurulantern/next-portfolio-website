import React from 'react'
import Image from 'next/image';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.section} id="About">
        <div className={styles.container} >
            <Image src='/DSCN7654.jpeg' width={380} height={240} alt="Ho on the Rocks"/>
            <div className={styles.meta}>
                <h1 className={styles.head}>
                    About Me
                </h1>
                <p className={styles.text}>
                    I am a self-taught web developer with a background in 
                    learner-driven education, acting, writing and customer service.   
                </p>
                <p className={styles.text}>
                    My interests include reading, playing video games, board games, hiking,
                    and learning new skills. 
                </p>
                <p className={styles.text}>
                    Currently, I am learning about smart contracts as well
                    as discovering more about sustainable agriculture on smaller scales. 
                </p>
                <p className={styles.text}>
                    You can download my resume to see more about my experience! 
                </p>
                <div className={styles.button}>
                    <a href='/Alex Ho - resume.docx' download><button type="button" className={styles._btn}>Download Resume</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About