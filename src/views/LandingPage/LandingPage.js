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
        brand="NeurIPS SAS"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={"https://images.prismic.io/vancouverconvention/109ef82b-1f8e-4b56-99cb-58e729c34264_1826987.jpg?auto=compress,format&rect=0,196,1500,804&w=1400&h=750"}>
        <div style={{paddingBottom: "30px"}} className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.subtitle}>NeurIPS 2020 workshop</h2>
              <h1 className={classes.title}>Self-Supervised Learning for Speech and Audio Processing</h1>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://openreview.net/group?id=ICML.cc/2020/Workshop/SAS"
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
          <Information title="Important Dates" descriptions={[<ul style={{textAlign: "left"}}>
              <li style={{margin: "20px 0"}}><span style={{fontWeight: "bold", color: "red"}}>Oct 02, 2020</span>: Paper submission deadline</li>
              <li style={{margin: "20px 0"}}><span style={{fontWeight: "bold", color: "red"}}>Oct 23, 2020</span>: Notification of Acceptance/Rejection</li>
              <li style={{margin: "20px 0"}}><span style={{fontWeight: "bold", color: "red"}}>Nov 14, 2020</span>: Talk Recording Deadline</li>
            </ul>]} />
          <Information title="Invited Speakers" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <Information title="Schedule" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <span style={{display: "block", height: 50}} id="organizers"></span>
          <TeamSection />
          <Information title="Program Committee" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <Information title="Accepted Papers" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} />
          <Information title="Contact" descriptions={[<span style={{textAlign: "center"}}>neurips.sas.2020@gmail.com</span>]} />
          <p style={{height: 30}}></p>
        </div>
      </div>
      <p style={{height: 50}}></p>
    </div>
  );
}
