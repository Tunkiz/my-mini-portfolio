import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm Tunkis😎. Welcome. <br />
          
        </SectionTitle>
        <SectionText>
            I am a talented Computer Science graduate with hunger to gain experience in the software development industry. 
            I am Confident, Honourable and Loving.
        </SectionText>
        <SectionText>
            I want to be a developer at SovTech because i want to learn from the best. I read your company’s mission and vision. After finding out
            more information about your company from social media, I can clearly see how my goals align with the purposes of the
            company. There's nothing I love more than when I am working with other engaged individuals towards a common goal,
            and that's what excited me about working here.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;