import React from 'react'
import styles from "../styles/Writing.module.css"
import Image from "next/image"

function WritingTile(props) {
    return (
        <div className={props.class} id="tile2">
            <h3 className={styles.title}>{props.title}</h3>
            <Image src={props.image} width={50} height={50} alt='' className='writing-image' />
            <a href={props.Url}><button>View</button></a>
        </div>
    )
}

function RadioPlayTile(props) {
    return (
        <div className={props.class} id="tile2">
            <h3 className={styles.title}>{props.title}</h3>
            <Image src={props.image} width={50} height={50} alt='' clasName='writing-image' />
            <div>
                <a href={props.Url1}><button>View</button></a>
                <a href={props.Url2}><button>Listen</button></a>
            </div>
        </div>
    )
}

function Writing() {
  return (
    <div className={styles.section} id="Writing">
        <div>
            <h1 className={styles.head}>
                Writing
            </h1>
            <p className={styles.meta}>
                Some of the stories I have written
            </p>
        </div>
        <div className={styles.container}>
            <RadioPlayTile 
                class={styles.writing1}
                title="Under the Bed Radioplay"
                image="/Monster.png"
                Url1="https://drive.google.com/file/d/1afBGyHVSE1lbE5zf4vSl53qoU2ut2U77/view?usp=sharing"
                Url2="https://drive.google.com/file/d/0B8FI01UVh6qIVlZ4eWNDUmhvTjA/view?usp=sharing&resourcekey=0-3i3It6LfCXK-18hklxYBbQ"   
            />
            <WritingTile 
                class={styles.writing2}
                title="Pandemic Learning Quest"
                image="/Virus.png"
                Url="https://drive.google.com/file/d/1Jh9xsNo7eeRXUGbnMtealW2F8iHMQvn8/view?usp=sharing"    
            />
            <WritingTile 
                class={styles.writing3}
                title="The Lost Suitcase"
                image="/Suitcase.png"
                Url="https://codepen.io/gurulantern/full/wvPjMeq"    
            />
        </div>
    </div>
  )
}

export default Writing