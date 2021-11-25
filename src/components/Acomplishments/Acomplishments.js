import React from 'react';
import Link from 'next/link';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { CgArrowUpR } from 'react-icons/cg';

const data = [
  { number: 1, text: 'Sololearn Certicates(HTML & Java)'},
  { number: 2, text: 'Mlab Hackerthon Certificate(2th place)'},
  { number: 3, text: 'Pushing 10 projects to GitHub'},
];

const Acomplishments = () => (
  <Section id ="Achievements">
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
    <Link href="#header">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", paddingTop: '50px', paddingLeft: '50%'}}>
          <CgArrowUpR size="4rem" />
        </a>
      </Link>
  </Section>
);

export default Acomplishments;
