import style from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <ul className={style.Navigation}>
        <li className="menu-item" data-name="home">
          <a href="/" className="menu-link" id="link-home" aria-label="Home">
            <img src="src\assets\images\icon-home.png" alt="home" />
          </a>
        </li>

        <li data-name="projects">
          <a
            href="/Projects"
            className="menu-link"
            id="link-projects"
            aria-label="Projects"
          >
            <img src="src\assets\images\icon-projects.png" alt="projects" />
          </a>
        </li>

        <li className="menu-item" data-name="tools">
          <a
            href="/Tools"
            className="menu-link"
            id="link-tools"
            aria-label="Tools"
          >
            <img src="src\assets\images\icon-tool.png" alt="tools" />
          </a>
        </li>

        <li className="menu-item" data-name="contact">
          <a
            href="/Contact"
            className="menu-link"
            id="link-contact"
            aria-label="Contact"
          >
            <img src="src\assets\images\icon-contact.png" alt="contact" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
