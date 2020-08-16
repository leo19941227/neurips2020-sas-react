import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomizedTables from "components/Table/Table.js"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Paper} from "@material-ui/core";
import NameCard from "components/Card/NameCard";

import styles from "assets/jss/material-kit-react/views/landingPageSections/scheduleStyle.js";

const useStyles = makeStyles(styles);

export default function Information(props) {
  const {name, object} = props
  const classes = useStyles();
  const infos = [
    [
      "Chelsea Finn",
      "Stanford",
      "https://ai.stanford.edu/~cbfinn/_files/ChelseaFinn_hires.jpg",
    ],
    [
      "Mark Hasegawa-Johns​on",
      "UIUC",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB-xcGVCbeC36jf2HF8qKcpr01hrSaVgcUhQ&usqp=CAU",
    ],
    [
      "Katrin Kirchhoff",
      "Amazon",
      "https://people.ece.uw.edu/kirchhoff_katrin/kirchhoff_katrin_2016_200x267.jpg",
    ],
    [
      "Bhuvana Ramabhadran",
      "Google",
      "https://sites.google.com/site/thebhuv/_/rsrc/1362193208294/home/bhuv.jpg",
    ],
    [
      "Mirco Ravanelli",
      "MILA",
      "https://avatars0.githubusercontent.com/u/16886998?s=460&u=7da7303eb1fc1582c1ed51fba5fcc9e3e6115e3c&v=4",
    ],
    [
      "Dong Yu",
      "Tencent",
      "https://avatars2.githubusercontent.com/u/12472179?s=400&u=cf0fb84df402f954eb41947c0dd18f4038a762d7&v=4",
    ],
    [
      "Luke Zettlemoyer",
      "Facebook / UW",
      "https://s3-us-west-2.amazonaws.com/www-cse-public/images/portraits/lsz_sm.jpg",
    ],
  ]
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Tentative Schedule</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
          This workshop will comprise invited talks and contributed talks/posters from academia and industry, as well as open/panel discussion. The talks and posters, by senior technical leaders as well as more junior active researchers, aim to present the latest breakthroughs for self-supervision in speech and audio. We will encourage open discussion, among speakers, contributors, and attendees, throughout the day by having a virtual panel consisting of academic and industrial researchers and two virtual poster sessions. The panel invited talks, and contributed talks selected from submissions will be of large-attendance format, while the posters, also selected from submissions, target to inspire small group discussion (we will refer to <strong>ICLR</strong> and <strong>ICML</strong> for how to handle such a poster session in a virtual way). We invite speakers from the speech and audio processing field as well as the general machine learning community, to promote workshop attendance from different areas, and to stimulate discussion across areas and representing different opinions.
          </h4>
          <h4 className={classes.description}>
          Following is the list of <strong>confirmed</strong> invited speakers in alphabetical order:
          </h4>  
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            {
              infos.map(info =>
              <GridItem xs={12} sm={12} md={4}>
                <div style={{padding: 10}}>
                <NameCard name={info[0]} org={info[1]} imgurl={info[2]} />
                </div>
              </GridItem>
            )
            }
        </GridContainer>
        </GridItem>
      </GridContainer>
      <p style={{height: 30}}></p>
      <CustomizedTables />
      <p style={{height: 30}}></p>
    </div>
  );
}
