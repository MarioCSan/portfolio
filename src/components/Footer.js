import React from 'react'

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
        <img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' alt='react logo' style={styles.image}/>
        <p className='pl-4 m-2'> Madrid {year}</p>
       
    </div>
  )
}

export default Footer