import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SummarySection from "./Sections/SummarySection.js";
import CallSection from "./Sections/CallSection.js";
import TeamSection from "./Sections/TeamSection.js";
import Schedule from "./Sections/Schedule.js";
import Information from "./Sections/Information.js"
import Speaker from "./Sections/Speaker.js"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <span id="top"></span>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NeurIPS SAS 2020"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/location.jpg")}>
        <div style={{paddingBottom: "30px"}} className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.subtitle}>NeurIPS 2020 workshop</h2>
              <h1 className={classes.title}>Self-Supervised Learning for Speech and Audio Processing</h1>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://cmt3.research.microsoft.com/SAS2020/Submission/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit papers
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <span style={{display: "block", height: 50}} id="description"></span>
          <SummarySection />
          <span style={{display: "block", height: 50}} id="call"></span>
          <CallSection />
          <Information title="Submission Guidelines" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <span style={{display: "block", height: 50}} id="deadlines"></span>
          <Information title="Important Dates" descriptions={[<div style={{textAlign: "center"}}>
              <div style={{margin: "30px 0 5px 0"}}>
                  <span style={{fontWeight: "bold", color: "red"}}><strike>23:59 (Anywhere on Earth), Oct 12, 2020</strike></span>
              </div>
              <block style={{margin: "5px 0 30px 0"}}><strike>Submission deadline</strike></block>
              <div style={{margin: "30px 0 5px 0"}}>
                  <span style={{fontWeight: "bold", color: "red"}}>23:59 (Anywhere on Earth), Oct 27, 2020</span>
              </div>
              <block style={{margin: "5px 0 30px 0"}}>Notification of Acceptance/Rejection</block>
              <div style={{fontWeight: "bold", color: "red", margin: "30px 0 5px 0"}}>Nov 14, 2020</div>
              <block style={{margin: "5px 0 30px 0"}}>Talk Recording Deadline</block>
              <div style={{fontWeight: "bold", color: "red", margin: "30px 0 5px 0"}}>Dec 11, 2020</div>
              <block style={{margin: "5px 0 30px 0"}}>Date of workshop</block>
            </div>]} />
          {/* <Information title="Invited Speakers" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} /> */}
          {/* <Information title="Schedule" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} /> */}
          <Speaker />
          <Schedule />
          <span style={{display: "block", height: 50}} id="organizers"></span>
          <TeamSection />
          <Information title="Program Committee" descriptions={[
            <div style={{textAlign: "left", maxWidth: 500, margin: "auto"}}>
              <ul>
              {
                [
                  ['Jahangir Alam',	'Computer Research Institute of Montreal'],
                  ['Mattia Di Gangi', 'Fondazione Bruno Kessler'],
                  ['Annie	Dong', 'Amazon'],
                  ['Benjamin Elizalde', 'Carnegie Mellon University'],
                  ['Yusuke Fujita', 'Hitachi'],
                  ['Paola Garcia', 'Johns Hopkins University'],
                  ['David Harwath', 'The University of Texas at Austin'],
                  ['Po-chun	Hsu', 'National Taiwan University'],
                  ['Wei-Ning Hsu', 'Facebook'],
                  ['Van hamme Hugo', 'KU Leuven'],
                  ['Shigeki	Karita', 'Google'],
                  ['Cheng-I	Lai', 'Massachusetts Institute of Technology'],
                  ['Alex Lamb', 'Universite de Montreal'],
                  ['Andy Liu', 'ASUS AICS'],
                  ['Chunxi Liu', 'Facebook'],
                  ['Yuzong Liu', 'Amazon'],
                  ['Michael Mandel', 'Brooklyn College, CUNY'],
                  ['Florian Metze', 'Carnegie Mellon University'],
                  ['Lucas	Ondel', 'Brno University of Technology'],
                  ['Andrew Rosenberg', 'Google'],
                  ['George Saon', 'IBM'],
                  ['Themos Stafylakis', 'Omilia - Conversational Intelligence'],
                  ['Georg	Stemmer', 'Intel'],
                  ['Cem	Subakan', 'MILA'],
                  ['Hao	Tang', 'The University of Edinburgh'],
                  ['Andros Tjandra', 'NAIST'],
                  ['Weiran Wang', 'Salesforce Research'],
                  ['Scott	Wisdom', 'Google'],
                  ['Yuan-kuei	Wu', 'National Taiwan University'],
                  ['Shu-Wen	Yang', 'National Taiwan University'],
                  ['Ching-Feng Yeh', 'Facebook'],
                  ['Yu Zhang', 'Google'],
                ].map(info =>
                  <li>
                    <span><strong>{info[0]}</strong></span><span style={{marginLeft: 15}}>{info[1]}</span>
                  </li>)
              }
              </ul>
            </div>]} />
          <Information title="Accepted Papers" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <span style={{display: "block", height: 50}} id="contact"></span>
          <Information title="Contact" descriptions={[<span style={{textAlign: "center"}}>neurips.sas.2020@gmail.com</span>]} />
          <p style={{height: 50}}></p>
        </div>
      </div>
      <p style={{height: 50}}></p>
    </div>
  );
}
