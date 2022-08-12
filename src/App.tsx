import React, { useState } from 'react';
import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Perfil } from './types/perfil';

import LogoReact from '../src/images/reactjs.svg';
import LogoTypeScript from '../src/images/typescript.svg';
import LogoRedux from '../src/images/redux.svg';
import LogoJavaScript from '../src/images/javascript.svg';
import LogoCSS from '../src/images/css3.svg';
import LogoHTML from '../src/images/html5.svg';
import LogoReactNative from '../src/images/react-native.svg';
import LogoGit from '../src/images/git.svg';

import ProjectFoodShop from '../src/images/food-shop.png';
import ProjectCurriculo from '../src/images/curriculo-typescript.png';
import ProjectInstagram from '../src/images/instagram-clone.png';
import ProjectTwitter from '../src/images/twitter-clone.png';
import ProjectTransportadora from '../src/images/transportadora.png';
import ProjectPortfolio from '../src/images/portfolio.png';
import ProjectEmporio from '../src/images/emporio.png';

function App() {
  const skillsAPI = {
    skills: [
      {
        id: 1,
        name: 'ReactJS',
        image: LogoReact,
      },
      {
        id: 2,
        name: 'TypeScript',
        image: LogoTypeScript,
      },
      {
        id: 3,
        name: 'Redux',
        image: LogoRedux,
      },
      {
        id: 4,
        name: 'React Native',
        image: LogoReactNative,
      },
      {
        id: 5,
        name: 'Git',
        image: LogoGit,
      },
      {
        id: 4,
        name: 'JavaScript',
        image: LogoJavaScript,
      },
      {
        id: 5,
        name: 'CSS3',
        image: LogoCSS,
      },
      {
        id: 6,
        name: 'HTML5',
        image: LogoHTML,
      },
    ],
    projects: [
      {
        id: 5,
        title: 'Institutional Website',
        description: `Freelance work done for a communication agency of a carrier's institutional website. WordPress site with CSS customizations`,
        image: ProjectTransportadora,
        codeLink: '',
        liveLink: 'http://awcompany.com.br/',
      },
      {
        id: 7,
        title: 'Beer Empire',
        description: `Personal project based on a real website. It's a complete CRUD with authentication and access level. Made with React, Reduxx, Typescript and Styled Components`,
        image: ProjectEmporio,
        codeLink: 'https://github.com/leandronunesdev/beer_empire',
        liveLink: '',
      },
      {
        id: 1,
        title: 'Instagram Clone',
        description:
          'Instagram Clone project using React, TypeScript and Redux.',
        image: ProjectInstagram,
        codeLink: 'https://github.com/leandronunesdev/instagram_clone_22',
        liveLink: '',
      },
      {
        id: 2,
        title: 'Food Shop',
        description:
          'Online Store Project using API. Tools: React and TypeScript.',
        image: ProjectFoodShop,
        codeLink: 'https://github.com/leandronunesdev/food-shop',
        liveLink: 'https://leandronunesdev.github.io/food-shop/',
      },
      {
        id: 3,
        title: 'Online Curriculum',
        description: 'Online Resume Design using React and TypeScript.',
        image: ProjectCurriculo,
        codeLink: 'https://github.com/leandronunesdev/curriculo-typescript2',
        liveLink: 'https://leandronunesdev.github.io/curriculo-typescript2/',
      },
      {
        id: 4,
        title: 'Twitter Clone',
        description: 'Twitter Clone Project using ES6 Classes',
        image: ProjectTwitter,
        codeLink: 'https://github.com/leandronunesdev/twitter-clone2',
        liveLink: 'https://leandronunesdev.github.io/twitter-clone2/',
      },
      {
        id: 6,
        title: 'Portfolio',
        description:
          'Personal portfolio website using React, TypeScript and SASS',
        image: ProjectPortfolio,
        codeLink: 'https://github.com/leandronunesdev/portfolio-2021',
        liveLink: 'https://leandronunes.dev/',
      },
    ],
  };

  const [resposta] = useState<Perfil>(skillsAPI);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <Skills dados={resposta} />
      <Projects dados={resposta} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
