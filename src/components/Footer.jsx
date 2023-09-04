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
        bottom: '0px',
        zindex: 3,
        color: '#d1bdbdd2'
      }
    };
    return (
    <footer style={styles.landing} className='mb-2'>
        <p className='pl-4 m-2'>Desarrollado con ♥. Madrid {year}</p>
    </footer>
  )
}

export default Footer
