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

export default function Speaker(props) {
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
      "https://i.imgur.com/sioW5Os.png",
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
      <h2 className={classes.title}>Invited Speakers</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description} style={{textAlign: "center"}}>
          Following is the list of invited speakers in alphabetical order:
          </h4>  
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            {
              infos.map(info =>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div style={{padding: 10, maxWidth: 400, margin: "auto"}}>
                <NameCard name={info[0]} org={info[1]} imgurl={info[2]} />
                </div>
              </GridItem>
            )
            }
        </GridContainer>
        </GridItem>
      </GridContainer>
      <p style={{height: 30}}></p>
    </div>
  );
}
