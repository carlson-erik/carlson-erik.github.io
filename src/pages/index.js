import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Section = styled.section`
  width: 100%;
  background-color: ${ props => props.bgColor || 'white'};
  display: flex;
  align-items: center;
`;

const Banner = styled(Section)`
  height: calc(100vh * .95);
`;

const IntroContainer = styled.div`
  padding-left: 2rem;

`;

const Accent = styled.span`
  color: red;
`;

const DescriptionHeader = styled.h1`
  font-size: 4rem;
  max-width: 75%;
`;

const descriptions = [
  'build what\'s in your mind\'s eye.',
  'build cool experiences across the web.',
  'learn and share new ideas.',
];


const Introduction = () => {
  const [currentDescription, setDescription] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDescription((currentDescription + 1) % descriptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentDescription, setDescription]);
  return (
    <IntroContainer>
      <h2>Hi, I'm <Accent>Erik Carlson</Accent>.</h2>
      <DescriptionHeader>I strive to {descriptions[currentDescription]}</DescriptionHeader>
      <h2><Accent>Full Stack</Accent> Software Engineer</h2>
    </IntroContainer>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <Introduction />
    </Banner>
    <Section bgColor='#f0f0f0'>about me section</Section>
    <Section>projects section</Section>
    <Section bgColor='#f0f0f0'>work history section</Section>
    <Section>technology used section</Section>
  </Layout>
);

export default IndexPage
