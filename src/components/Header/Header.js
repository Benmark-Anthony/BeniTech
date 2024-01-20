import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
      <Link href="/" legacyBehavior>
      <div style={{display:"flex", alignItems:"center", color:'white', marginBottom:'20px'}}>
        <DiCssdeck  size={30} /> <Span>BeniTech</Span>
      </div>
    </Link>
  </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
            <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
      <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
    <Link href="#about" legacyBehavior>
        <NavLink>About</NavLink>
    </Link>
  </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Benmark-Anthony?tab=repositories">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://twitter.com/anthony_benmark">
      <AiFillTwitterCircle size="3rem"/>
    </SocialIcons>

      <SocialIcons href="https://t.co/dF8yTvKdlk">
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      
    </Div3>
      
 </Container>
);

export default Header;
