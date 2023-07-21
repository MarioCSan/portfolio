import React from 'react'
import react from '../images/react.png'
import vite from '../images/vite.png'


const Footer = () => {
    const year = new Date().getFullYear()
    const styles = {
      landing: {
        color: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: '500'
      },
      parrafo:{
        rightPadding: '4px'
      },
      image:{
        heigth: '20px',
        width: '25px',
        rightPadding: '4px'
      }
    };
    return (
    <div style={styles.landing} className=' mb-2'>
        <p className='pr-4 mr-4'> Powered by React </p>
        <img src={react} alt='react logo' style={styles.image}/>
        <p className='pr-4 mr-4'>and Vite </p>
        <img src={vite} alt='react logo' style={styles.image}/>
        <p className='pl-4 m-2'> Madrid {year}</p>
       
    </div>
  )
}

export default Footer