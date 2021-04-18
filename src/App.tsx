import React, { useState } from 'react';
import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Perfil } from './types/perfil';

import LogoReact from '../src/images/reactjs.svg'
import LogoTypeScript from '../src/images/typescript.svg'
import LogoRedux from '../src/images/redux.svg'
import LogoJavaScript from '../src/images/javascript.svg'
import LogoCSS from '../src/images/css3.svg'
import LogoHTML from '../src/images/html5.svg'

import ProjectFoodShop from '../src/images/food-shop.png'
import ProjectCurriculo from '../src/images/curriculo-typescript.png'
import ProjectInstagram from '../src/images/instagram-clone.png'
import ProjectTwitter from '../src/images/twitter-clone.png'
import ProjectTransportadora from '../src/images/transportadora.png'
import ProjectPortfolio from '../src/images/portfolio.png'
import ProjectEmporio from '../src/images/emporio.png'

function App() {

  const skillsAPI =
  {
    skills: [
      {
        id: 1,
        name: "ReactJS",
        image: LogoReact          
      },
      {
        id: 2,
        name: "TypeScript",
        image: LogoTypeScript          
      },
      {
        id: 3,
        name: "Redux",
        image: LogoRedux          
      },
      {
        id: 4,
        name: "JavaScript",
        image: LogoJavaScript          
      },
      {
        id: 5,
        name: "CSS3",
        image: LogoCSS          
      },
      {
        id: 6,
        name: "HTML5",
        image: LogoHTML
      }
    ],
    projects: [
      {
        id: 7,
        title: "Empório da Cerveja",
        description: "Projeto baseado no site da Ambev de mesmo nome. Consumo de API através de autenticação via Token. Simulação de um carrinho de compras. Tecnologias utilizadas: React, TypeScript e Redux.",
        image: ProjectEmporio,        
        codeLink: "https://github.com/leandronunesdev/emporio",
        liveLink: ""
      },
      {
        id: 1,
        title: "Instagram Clone",
        description: "Projeto de Instagram Clone utilizando React, TypeScript e Redux.",
        image: ProjectInstagram,        
        codeLink: "https://github.com/leandronunesdev/instagram-clone2",
        liveLink: ""
      },
      {
        id: 2,
        title: "Food Shop",
        description: "Projeto de Loja Online usando consumo de API. Ferramentas: React e TypeScript.",
        image: ProjectFoodShop,        
        codeLink: "https://github.com/leandronunesdev/food-shop",
        liveLink: "https://leandronunesdev.github.io/food-shop/"
      },
      {
        id: 3,
        title: "Currículo Online",
        description: "Projeto de Currículo Online utilizando React e TypeScript.",
        image: ProjectCurriculo,        
        codeLink: "https://github.com/leandronunesdev/curriculo-typescript2",
        liveLink: "https://leandronunesdev.github.io/curriculo-typescript2/"
      },
      {
        id: 4,
        title: "Twitter Clone",
        description: "Projeto de Twitter Clone utilizando Classes ES6",
        image: ProjectTwitter,        
        codeLink: "https://github.com/leandronunesdev/twitter-clone2",
        liveLink: "https://leandronunesdev.github.io/twitter-clone2/"
      },
      {
        id: 5,
        title: "Site Institucional",
        description: "Trabalho Freelance realizado para a agência Imaggine de site institucional de transportadora. Site em Wordpress com customizações do CSS",
        image: ProjectTransportadora,        
        codeLink: "",
        liveLink: "http://awcompany.com.br/"
      },
      {
        id: 6,
        title: "Portfolio",
        description: "Site de portfolio pessoal utilizando React, TypeScript e SASS",
        image: ProjectPortfolio,        
        codeLink: "https://github.com/leandronunesdev/portfolio-2021",
        liveLink: "https://leandronunes.dev/"
      }
    ]
  }

const [resposta] = useState<Perfil>(skillsAPI)


  return (
    <div className="App">
      <Header />   
      <Hero />   
      <Skills dados={resposta}/>
      <Projects dados={resposta}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
