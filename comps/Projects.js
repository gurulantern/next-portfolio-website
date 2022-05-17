import React from 'react'
import styles from "../styles/Projects.module.css";
import Image from 'next/image';


function ProjectTile(props) {
    return (
        <div className={props.class} id={styles.tile}>
            <h3 className={styles.title}>{props.title}</h3>
            <Image src={props.image} width={50} height={50} alt='' className={styles.image} />
            <a href={props.Url}><button className={global.button}>View</button></a>
        </div>
    )
}

function Projects() {
  return (
    <div className={styles.section} id="Projects">
        <div>
            <h1 className={styles.head}>
                Coding Projects
            </h1>
            <p className={styles.meta}>
                Some of the code I&apos;ve written so far (with the grace of a few tutorials)
            </p>
        </div>
        <div className={styles.container}>
            <ProjectTile 
                class={styles.project4}
                title="Birthday Countdown"
                image='/Birthday.png'
                Url="https://codepen.io/gurulantern/full/yLPKNzY"    
            />
            <ProjectTile 
                class={styles.project5}
                title="To-Do List App"
                image='/To do.png'
                Url="https://codepen.io/gurulantern/full/dyVrLGq"    
            />
            <ProjectTile 
                class={styles.project6}
                title="Random Quotes"
                image='/Quotes.png'
                Url="https://codepen.io/gurulantern/full/eYGPdbm"    
            />
            <ProjectTile 
                class={styles.project1}
                title="Coming Soon"
                image='/hourglass_blue.png'
                Url="https://buildspace-dao-starter-1.alexho7.repl.co/"    
            />
            <ProjectTile 
                class={styles.project2}
                title="Coming Soon"
                image='/hourglass_red.png'
                Url="https://codepen.io/gurulantern/full/wvPjMeq"    
            />
            <ProjectTile 
                class={styles.project3}
                title="BobbyDAO"
                image='/DAO.png'
                Url="https://buildspace-dao-starter-1.alexho7.repl.co/"    
            />
        </div>
    </div>
  )
}

export default Projects 