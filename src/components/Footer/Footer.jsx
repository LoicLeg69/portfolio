import style from "./Footer.module.css";


function Footer() {
  return (
    <>
          <div className={style.card}>
        <img src="src\assets\images\icon-linkedin.png" alt="github" />
        <img src="src\assets\images\icon-github.png" alt="linkedin" />
        <img src="src\assets\images\icon-cv.png" alt="cv" />
      </div>
    </>
  );
}

export default Footer;
