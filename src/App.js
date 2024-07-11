import React from "react";
import styles from "./styles/App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import github from "./Assets/icon/github.svg";
import linkedin from "./Assets/icon/linkedin.svg";
import twitter from "./Assets/icon/twitter.svg";
import instagram from "./Assets/icon/instagram.svg";
import ContactForm from "./components/ContactForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Project",
      element: <Project />,
    },
  ]);
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
      <hr />
      <footer>
      
        <div className={styles.contact}>
          <div className={styles.contact_details}>
            <div className={styles.detail_info}>
              <p className={styles.header}>Let’s connect</p>
              <div className={styles}>
                <p className={styles.sub_title}>
                  Say hello at
                  <span>
                    {" "}
                    <a href="mailto:komolafeinioluwa9@gmail.com">
                      komolafeinioluwa9@gmail.com
                    </a>
                  </span>
                </p>
                <p className={styles.sub_title}>
                  For more info, here’s my{" "}
                  <span>
                    <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                      resume
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.detail_icon}>
              <a className={styles} href="https://github.com/INIstheguyy">
                <img src={github} alt="" />
              </a>
              <a
                className={styles}
                href="https://www.linkedin.com/in/inioluwa-komolafe-21684a213/"
              >
                <img src={linkedin} alt="" />
              </a>
              <a className={styles} href="https://x.com/INIstheguyy">
                <img src={twitter} alt="" />
              </a>
              <a className={styles} href="https://www.instagram.com/inistheguyy?igsh=MTVqcmdwMXhqbXhsMg%3D%3D&utm_source=qr ">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.contact_form}>
            <ContactForm/>
          </div>
        </div>
        <p>© 2024 Inistheguyy.</p>
      </footer>
    </div>
  );
}

export default App;
