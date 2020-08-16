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
          <span style={{display: "block", height: 50}} id="organizers"></span>
          <TeamSection />
          <span style={{display: "block", height: 50}} id="schedule"></span>
          <Schedule />
          <span style={{display: "block", height: 50}} id="miscs"></span>
          <Information title="Diversity commitment" descriptions={[<span>The team of organizers and invited speakers consists of academic and industrial researchers with various levels of seniority, from young scientists to senior researchers with abundant experience in organizing technical events in top-tier conferences. The team is diverse in gender and race. We aim to provide a platform for researchers with different backgrounds to share experiences, opinions, and innovation about self-supervised learning. The diversity allows the workshop to provide comprehensive coverage in speech and audio problems and research directions, and motivate the mix of scientists.</span>]} />
          <Information title="Access" descriptions={[<span>We will build a website for publicity once the proposal is accepted. On the website, we will provide information including the call for contributions, titles and speaker biographies for invited talks, workshop schedule, technical advisory committee and reviewers, and accepted submissions for contributed talks and posters. We will record all the talks and panel, and publish the recording along with accepted submissions on the website. We will also encourage contributors to upload their accepted submissions to <strong>arXiv</strong> for broader access.</span>]} />
          <Information title="Previous related workshops" descriptions={[<span>The team organized a special session about self-supervised learning for speech processing at <strong>INTERSPEECH</strong> early this year, and some of the team members are also involved in another successful workshop on a similar topic in <strong>ICML 2020</strong> (<a target="_blank" href="https://icml-sas.gitlab.io">https://icml-sas.gitlab.io/</a>). Due to the significant amount of positive feedback and the active participation from the speech and audio processing field, we decided to host a similar event at <strong>NeurIPS</strong> to attract an audience with diverse machine learning background, in hopes of inspiring more innovation in self-supervision for the speech and audio processing field and allow the field to contribute to the general machine learning community. In this NeurIPS workshop, we invite a brand new group of speakers to cover not only the <strong>speech and audio processing</strong> field, but also <strong>natural language understanding</strong>, <strong>robotics</strong>, and <strong>computer vision</strong>. We aim to have a platform for researchers from different areas to exchange viewpoints, challenge each other, and spark new ideas. To avoid submission of published works, we will explicitly discourage contributors to do so in the call for submissions. Works with a concrete contribution to the advancement of this research direction will be a requirement in our review process. We will also work with invited speakers to make sure their talks cover a review of approaches and original, unpublished innovation.</span>]} />
          <p style={{height: 30}}></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
