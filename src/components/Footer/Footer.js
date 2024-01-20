import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:09015237766">+234-901-5237-766</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:chiben198@gmail.com">
          chiben198@gmail.com.
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <img
        src='./images/logo15.jpg'
       alt='logo'
        width="100"
        height="100"
       
      />
  
          <Slogan>You Imagine, We Create.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Benmark-Anthony?tab=repositories">
        <AiFillGithub size="3rem"/>
         </SocialIcons>

        <SocialIcons href="https://twitter.com/anthony_benmark">
        <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://t.co/dF8yTvKdlk">
        <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
