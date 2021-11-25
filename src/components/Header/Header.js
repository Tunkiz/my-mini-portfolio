import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container id='header'>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FiAtSign size="4rem" /> <span>My-Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#home">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#Achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Tunkiz">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tunkis-mabunda">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
