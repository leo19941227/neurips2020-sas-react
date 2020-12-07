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
          <span style={{display: "block", height: 50}} id="deadlines"></span>
          <Information title="Important Dates" descriptions={[<div style={{textAlign: "center"}}>
              <div style={{margin: "30px 0 5px 0"}}>
                  <span style={{fontWeight: "bold", color: "red"}}><strike>23:59 (Anywhere on Earth), Oct 12, 2020</strike></span>
              </div>
              <block style={{margin: "5px 0 30px 0"}}><strike>Submission deadline</strike></block>
              <div style={{margin: "30px 0 5px 0"}}>
                  <span style={{fontWeight: "bold", color: "red"}}><strike>23:59 (Anywhere on Earth), Oct 27, 2020</strike></span>
              </div>
              <block style={{margin: "5px 0 30px 0"}}><strike>Notification of Acceptance/Rejection</strike></block>
              <div style={{fontWeight: "bold", color: "red", margin: "30px 0 5px 0"}}><strike>Nov 14, 2020</strike></div>
              <block style={{margin: "5px 0 30px 0"}}><strike>Talk Recording Deadline</strike></block>
              <div style={{fontWeight: "bold", color: "red", margin: "30px 0 5px 0"}}>Dec 11, 2020</div>
              <block style={{margin: "5px 0 30px 0"}}>Date of workshop</block>
            </div>]} />
          {/* <Information title="Invited Speakers" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} /> */}
          {/* <Information title="Schedule" descriptions={[<span style={{textAlign: "center"}}>To be decided</span>]} /> */}
          <span style={{display: "block", height: 50}} id="speakers"></span>
          <Speaker />
          <span style={{display: "block", height: 50}} id="schedule"></span>
          <Schedule />
          <span style={{display: "block", height: 50}} id="organizers"></span>
          <TeamSection />
          <span style={{display: "block", height: 50}} id="papers"></span>
          <Information title="Accepted Papers" descriptions={[<div style={{textAlign: "center"}}>
            {
              [
                [
                  'https://drive.google.com/file/d/1RZNprf0vnmcbted2LiQageLvgFDdqfsb/view?usp=sharing',
                  'Self-Supervised Learning using Contrastive Mixtures for Personalized Speech Enhancement',
                  'Aswin Sivaraman, Minje Kim',
                ],
                [
                  'https://drive.google.com/file/d/1y0RiDCiXRxHAD83DqSUD3hI78Ziut20j/view?usp=sharing',
                  'Self-supervised Pre-training Reduces Label Permutation Instability of Speech Separation',
                  'Sung-Feng Huang, Hung-yi Lee',
                ],
                [
                  'https://drive.google.com/file/d/1SRc_1epRLOd07TR-gyT_p7oaZPbS2j86/view?usp=sharing',
                  'Augmentation adversarial training for self-supervised speaker recognition',
                  'Jaesung Huh, Hee Soo Heo, Jingu Kang, Shinji Watanabe, Joon Son Chung',
                  'https://drive.google.com/file/d/1Szg4KDtoFAstiUUZeGU5WtZLI5r2nwh5/view?usp=sharing',
                ],                [
                  'https://drive.google.com/file/d/1_mUehXhkvx_a1FrofxQDYA3-fgDIptlu/view?usp=sharing',
                  'Neural Composition: Learning to Generate from Multiple Models',
                  'Aswin Sivaraman, Minje Kim',
                ],
                [
                  'https://drive.google.com/file/d/1B-8uf_V76IrfF5uGmeSSUfszxg_XP3Y8/view?usp=sharing',
                  'Towards Semi-Supervised Semantics Understanding from Speech',
                  'Cheng-I Lai, Jin Cao, Sravan Bodapati, Shang-Wen Li',
                ],
                [
                  'https://drive.google.com/file/d/1GXXxutXTw6xkpxEBi6GTlwNRZnWIKvG1/view?usp=sharing',
                  'The Zero Resource Speech Benchmark 2021. Metrics and baselines for unsupervised spoken language modeling',
                  'Tu Anh Nguyen, Maureen de Seyssel, Patricia Rozé, Morgane Rivière, Evgeny Kharitonov, Alexei Baevski, Ewan Dunbar, Emmanuel Dupoux',
                  'https://drive.google.com/file/d/1qrvVddEX7BsJFsM5UK1v4J6ctsTkbOwk/view?usp=sharing',
                ],
                [
                  'https://drive.google.com/file/d/15VgXHYUf09bMRv9jDcQ4yrgO8emKOTqE/view?usp=sharing',
                  'Towards Localisation of Keywords in Speech Using Weak Supervision',
                  'Kayode Olaleye, Benjamin van Niekerk, Herman Kamper',
                ],
                [
                  'https://drive.google.com/file/d/1_9lgsVZGj_ZF--D6a6cId_IeqbgLatys/view?usp=sharing',
                  'Text-Free Image-to-Speech Synthesis Using Learned Segmental Units',
                  'Wei-Ning Hsu, David Harwath, Christopher Song, James Glass',
                ],
                [
                  'https://drive.google.com/file/d/1t6wPaWLXY6a0sy6ch4fLA_b1yk9n6y3R/view?usp=sharing',
                  'Self-Supervised Audio-Visual Separation of On-Screen Sounds from Unlabeled Videos',
                  'Efthymios Tzinis, Scott Wisdom, Aren Jansen, Shawn Hershey, Tal Remez, Daniel P.W. Ellis, John R. Hershey',
                ],
                [
                  'https://drive.google.com/file/d/1PfzgtuCU36Wd2Fi3TCwKWeabbRaav64X/view?usp=sharing',
                  'Multi-Format Contrastive Learning of Audio Representations',
                  'Luyu Wang, Aäron van den Oord',
                ],
                [
                  'https://drive.google.com/file/d/1r4ymZdiBspvZvHCvQktJ9M8sK6EKzVkf/view?usp=sharing',
                  'Similarity Analysis of Self-Supervised Speech Representations',
                  'Yu-An Chung, Yonatan Belinkov, James Glass',
                ],
                [
                  'https://drive.google.com/file/d/1bR5-lDVPCywcnC8FeFPCOH-cRIkhL8wg/view?usp=sharing',
                  'Representation Learning for Sequence Data with Deep Autoencoding Predictive Components',
                  'Junwen Bai, Weiran Wang, Yingbo Zhou, Caiming Xiong',
                ],
                [
                  'https://drive.google.com/file/d/1UNO_-6ximv37sKhuh2uokvf46HZSNYjx/view?usp=sharing',
                  'Pushing the Limits of Semi-Supervised Learning for Automatic Speech Recognition',
                  'Yu Zhang, James Qin, Daniel S. Park, Wei Han, Chung-Cheng Chiu, Ruoming Pang, Quoc V. Le, Yonghui Wu',
                ],
                [
                  'https://drive.google.com/file/d/1RMPUTR7EvtxKc34u4d3yyIpQBJ4Ik7wN/view?usp=sharing',
                  'A Correspondence Variational Autoencoder for Unsupervised Acoustic Word Embedding',
                  'Puyuan Peng, Herman Kamper, Karen Livescu',
                ],
                [
                  'https://drive.google.com/file/d/14CjIP9Y-piVXSnvlKX36-ELnSKLun9tI/view?usp=sharing',
                  'HUBERT: How much can a bad teacher benefit ASR pre-training?',
                  'Wei-Ning Hsu, Yao-Hung Hubert Tsai, Benjamin Bolte, Ruslan Salakhutdinov, Abdelrahman Mohamed',
                ]
              ].map(info =>
                <div>
                  <div style={{margin: "30px 0 5px 0"}}>
                    <span style={{fontWeight: "bold"}}><a target="_blank" href={info[0]}><span style={{color: "#7986CB"}}>{info[1]}</span></a><a>{info.length > 3? <a target="_blank" href={info[3]}><span style={{color: "#f29e4c"}}> (supplementary)</span></a>:""}</a></span>
                  </div>
                    <block style={{margin: "5px 0 30px 0"}}>{info[2]}</block>
                </div>
                )
            }
          </div>]} />
          <span style={{display: "block", height: 50}} id="committee"></span>
          <Information title="Program Committee" descriptions={[
            <div style={{textAlign: "center"}}>
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
                <div>
                  <div style={{margin: "30px 0 5px 0"}}>
                    <span style={{fontWeight: "bold"}}>{info[0]}</span>
                  </div>
                    <block style={{margin: "5px 0 30px 0"}}>{info[1]}</block>
                </div>
              )}
            </div>]} />
          <span style={{display: "block", height: 50}} id="contact"></span>
          <Information title="Contact" descriptions={[<span style={{textAlign: "center"}}>neurips.sas.2020@gmail.com</span>]} />
          <p style={{height: 50}}></p>
        </div>
      </div>
      <p style={{height: 50}}></p>
    </div>
  );
}
