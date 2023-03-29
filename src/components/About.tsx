import React from "react";
import Image from "next/image";
import HomeImage from "../images/dev-cat.png";
import styles from "../styles/About.module.css";
import { fontIndieFlower, fontPoppins } from "@/utils/font";
import Container from "./Container";
const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Container className={styles.flex}>
        <div>
          <h2 data-aos="fade-right" className={fontIndieFlower}>
            Acerca de mi...
          </h2>
          <p className={fontPoppins}>
            Que tal, Soy Jaziel un desarrollador frontend enfocado en crear
            asombrosas interfaces de usuario, animaciones increíbles y software
            de gran calidad.
          </p>
        </div>
        <div>
          <h2 data-aos="fade-right" className={fontIndieFlower}>
            Experiencia...
          </h2>
          <ul>
            <li className={fontPoppins}>
              <p>IT Tech-Group {"(Remoto)"}</p>
              <p>
                - Pasantía como desarrollador frontend creando multiples
                proyectos con React, usando GIT para versionar el software asi
                como las distintas estancias de trabajo entre los miembros del
                equipo.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default About;
