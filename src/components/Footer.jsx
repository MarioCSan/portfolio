import React from 'react'
import vite from './../images/vite.png'
const Footer = () => {
    const year = new Date().getFullYear()
    const styles = {
      main: {
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
    <div style={styles.main} className=' mb-2'>
        <p className='pr-4 mr-4'> Powered by React</p>
        <img 
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' 
              alt='react logo' style={styles.image}/>
               <img 
              src={vite} 
              alt='react logo' style={styles.image}/>
        <p className="p-4 m-2"> Madrid {year}</p>
       
    </div>
  )
}

export default Footer