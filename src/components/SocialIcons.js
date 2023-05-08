const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/DrunkPsyduck" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Perfil GitHub "></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mariocanalessanchez/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Perfil Linkedin"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
