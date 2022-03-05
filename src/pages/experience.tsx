import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading as DefaultHeading } from "../components/styled";
import { ThemeProvider } from "../theme/context";

const Heading = styled(DefaultHeading)`
  padding-bottom: 0.5rem;
`;

const Container = styled.div`
  width: 100%;
`;

const DetailContainer = styled.div`
  padding-bottom: 1.5rem;

  &:last-child {
    padding: 0;
  }
`;

const InformationContainer = styled.div<{ flipFlexDirection: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.flipFlexDirection ? "column" : "row")};
  padding-top: ${props => props.flipFlexDirection ? '0.5rem' : '0'};
`;

const Title = styled.span`
  font-weight: 600;
`;

const Duration = styled.span`
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
`;

const Business = styled.span`
  font-style: italic;
`;

const Location = styled.span`
  margin-left: 0.25rem;
`;

const BulletList = styled.ul`
  margin: 0;
`;

const ExperiencePage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Experience | Erik Carlson</title>
          <meta
            name="description"
            content="Software Engineer Erik Carlson's Job Experience"
          />
        </Helmet>
        <Container>
          <Heading>Education</Heading>
          <DetailContainer>
            <InformationContainer>
              <Title>B.S. in Computer Science</Title>
              <Duration>2013-2017</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>University of New Hampshire</Business>
              <Location>(Durham, NH)</Location>
            </InformationContainer>
          </DetailContainer>
        </Container>
        <Container>
          <Heading>Experience</Heading>
          <DetailContainer>
            <InformationContainer>
              <Title>Senior Front End Software Engineer</Title>
              <Duration>2021-Present</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Salem, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Architect and implement new features for Data Visualization
                  software using React, TypeScript and D3.
                </li>
                <li>
                  Interact with customers to remediate issues they're facing
                  with a focus on accuracy and efficiency.
                </li>
                <li>
                  Lead team design/architecture discussions, user story
                  refinement, and other re-occuring Agile planning meetings.
                </li>
              </BulletList>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>Software Engineer</Title>
              <Duration>2017-2020</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Bedford, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Participate in team design discussions, user story refinement,
                  and other re-occuring Agile planning meetings.
                </li>
                <li>
                  Maintain and contribute to company codebase through additional
                  features and bug fixes.
                </li>
                <li>
                  Design and implement Front-End features to be used in Customer
                  Relatonship Managmenet and Business Process Management.
                </li>
              </BulletList>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>Software Engineer Intern</Title>
              <Duration>Summer 2016</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Bedford, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Participate in team design discussions, user story refinement,
                  and amongst other re-occuring Agile planning meetings.
                </li>
                <li>
                  Maintain and contribute to company codebase through additional
                  features and bug fixes.
                </li>
                <li>
                  Design and implement Front-End features to be used in Customer
                  Relatonship Managmenet and Business Process Management.
                </li>
              </BulletList>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>IPSec and IKEv2 Technician</Title>
              <Duration>2014-2016</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>UNH Interoperability Lab</Business>
              <Location>(Durham, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Create cyber phsyical systems for use in IPv6 test beds.
                </li>
                <li>
                  Perform IPsec Interoperability and Conformance testing on
                  devices using standards set forth by the IETF.
                </li>
                <li>
                  Perform IKEv2 Interoperability and Conformance testing on
                  devices using standards set forth by the IETF.
                </li>
                <li>
                  Participate in committees that manage operation within the
                  company.
                </li>
              </BulletList>
            </InformationContainer>
          </DetailContainer>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default ExperiencePage;
