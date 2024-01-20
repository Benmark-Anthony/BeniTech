import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         Hello Welcome To <br/>
         My Domain.
      </SectionTitle>
        <SectionText>
          My purpose as a web developer, is to help my client bring their idealolgy into life through my creativity, to create a user-friendly, accessible, and responsive web application across all devices, also to ensure the website is secure, quick loads,and also maintain the web application so that it&apos;s up to date and working properly
        </SectionText>
          <Button onClick={() => window.location='https://chiben198@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

