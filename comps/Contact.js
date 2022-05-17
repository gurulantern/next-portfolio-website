import React from 'react'
import styles from "../styles/Contact.module.css"

function Contact() {
  return (
    <div id="Contact" className={styles.section}>
        <div className={styles.container}>
            <h1 className={styles.head}>
                Contact
            </h1>
            <p className={styles.meta}>
                If you want to chat or collaborate, drop me a 
                line here or email me directly!
            </p>
            <address>
                <a className={styles.address} href="mailto: alex.tianzhi.ho@gmail.com">alex.tianzhi.ho@gmail.com</a>
            </address>
            <div className='column3'>
                <form
                    action="https://usebasin.com/f/59875d8d43c1"
                    method="POST"
                    encType="multipart/form-data"
                    id="form"
                    className={styles.form}
                >
                    <input className={styles.input} type="text" name="name" placeholder='Name'/>
                    <input className={styles.input} type="email" name="email" placeholder='Email' required />
                    <textarea className={styles.inputmsg} name="message" placeholder='Message'></textarea>
                    <div>
                    <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact