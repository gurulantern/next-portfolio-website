import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css';
import { init } from "ityped";
import { useEffect, useRef } from "react";


function Hero() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1750,
            strings: ['Storyteller', 'Developer', 'Designer', 'Educator', 'Gamemaker', 'Writer']
        })
    },[]);

  return (
    <div className={styles.hero} id="Home">
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.welcome}>
                    WELCOME TO MY HOMEPAGE
                </h1>
                <div className={styles.home}>
                    <Image src='/home.png' width={200} height={200} className={styles.homeImg} alt="" />
                </div>
                <h2 className={styles.intro}>
                    Hello there! I&apos;m Alex Ho,
                </h2>
                <h3 className={styles.specialties}>
                    <span className={styles.text} ref={textRef}></span>
                </h3>                      
                <div className={styles.goat}>
                    <Image src='/goat.png' width={75} height={75} className={styles.goatImg} alt="" />
                </div>
                <div className={styles.controller}>
                    <Image src='/controller.png' width={75} height={75} className={styles.controllerImg} alt="" />
                </div>
                <div className={styles.plant}>
                    <Image src='/plant.png' width={75} height={75} className={styles.plantImg} alt="" />
                </div>
                <h2 className={styles.location}>
                    based in the US.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Hero;