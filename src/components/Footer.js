import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    const styles = {
      landing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: '500',
        position: 'relative',
        zindex: 3,
        color: 'white'
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
    <footer style={styles.landing} className='mb-2'>
        <p className='pl-4 m-2'>Desarrollado con ♥. Madrid {year}</p>
    </footer>
  )
}

export default Footer
