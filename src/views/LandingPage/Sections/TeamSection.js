import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TransitionsModal from "components/Modal/Modal.js"

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

function Person(props) {
  const {classes, imageClasses, name, title, description, imgurl} = props
  return (
    <GridItem xs={12} sm={12} md={4}>
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={imgurl} alt="..." className={imageClasses} style={{width:150, height:150, objectFit: "cover"}} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        {name}
        <br />
      <small className={classes.smallTitle}>{title}</small>
      </h4>
      <CardBody>
        <p className={classes.description}>
          {description}
        </p>
        <TransitionsModal text="... read more" />
      </CardBody>
      <CardFooter className={classes.justifyCenter}>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
        >
          <i className={classes.socials + " fab fa-twitter"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
        >
          <i className={classes.socials + " fab fa-instagram"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
        >
          <i className={classes.socials + " fab fa-facebook"} />
        </Button>
      </CardFooter>
    </Card>
  </GridItem>
  )
}

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const infos = [
    [
      "Abdelrahman Mohamed",
      "Facebook",
      <span><strong>Abdelrahman Mohamed</strong> is a research scientist at Facebook AI research (FAIR) in Seattle. Before FAIR, he was a principal scientist/manager in Amazon Alexa AI team. From 2014 to 2017, he was in Microsoft Research Redmond. He received his PhD from the University of Toronto with Geoffrey Hinton and Gerald Penn where he was part of the team that started the Deep Learning revolution in Spoken Language Processing in 2009. He is the recipient of the IEEE Signal Processing Society Best Journal Paper Award for 2016. His research interests span Deep Learning, Spoken Language Processing, and Natural Language Understanding. He is a special session co-organizer about "New Trends in self-supervised speech processing" at Interspeech (2020).</span>
      ,"http://www.cs.toronto.edu/~asamir/Abdelrahman_Mohamed.jpg"
    ],
    [
      "Hung-yi Lee",
      "National Taiwan University",
      <span><strong>Hung-yi Lee</strong> received the M.S. and Ph.D. degrees from National Taiwan University (NTU), Taipei, Taiwan, in 2010 and 2012, respectively. From September 2012 to August 2013, he was a postdoctoral fellow in Research Center for Information Technology Innovation, Academia Sinica. From September 2013 to July 2014, he was a visiting scientist at the Spoken Language Systems Group of MIT Computer Science and Artificial Intelligence Laboratory (CSAIL). He is currently an associate professor of the Department of Electrical Engineering of National Taiwan University, with a joint appointment at the Department of Computer Science & Information Engineering of the university. His research focuses on machine learning (especially deep learning), spoken language understanding and speech recognition. He is the special session co-organizer about "Meta Learning for Human Language Technology" and “New Trends in self-supervised speech processing” at Interspeech (2020).</span>
      ,"https://yt3.ggpht.com/a/AATXAJyD-nikDxFYMS26xENSwBrdycxguBTdocSATQ=s900-c-k-c0xffffffff-no-rj-mo"
    ],
    [
      "Shinji Watanabe",
      "Johns Hopkins University",
      <span><strong>Shinji Watanabe</strong> received his Ph.D. from Waseda University in 2006. His research is focused on the area of spoken language processing which includes speech enhancement, source separation, microphone array, acoustic and language modeling for speech recognition and emergent end-to-end speech recognition. He is a special session co-organizer about "Robust Speech Processing using Observation Uncertainty and Uncertainty Propagation" at Interspeech (2015) and "New Trends in self-supervised speech processing" at Interspeech (2020).</span>
      ,"https://engineering.jhu.edu/ece/wp-content/uploads/2017/07/Shinji-Watanabe.jpg"
    ],
    [
      "Shang-Wen Li",
      "Amazon",
      <span><strong>Shang-Wen Li</strong> is an Applied Scientist at Amazon AI, and he worked at Apple Siri before joining Amazon. He earned his Ph.D. from MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) in 2016. His research is focused on spoken language understanding, natural language generation, dialog management, and low-resource speech processing. He is a special session co-organizer about "Meta-Learning for Human Language Technology" at Interspeech (2020).</span>
      ,"https://sunprinces.github.io/interspeech2020-meta-learning/authors/shangwen/avatar_hube98b48111b6c1a4c81f443802127d8f_68512_270x270_fill_q90_lanczos_center.jpg"
    ],
    [
      "Tara Sainath",
      "Google",
      <span><strong>Tara Sainath</strong> received her PhD in Electrical Engineering and Computer Science from MIT in 2009. The main focus of her PhD work was in acoustic modeling for noise robust speech recognition. After her PhD, she spent 5 years at the Speech and Language Algorithms group at IBM T.J. Watson Research Center, before joining Google Research. She has co-organized a special session on Sparse Representations at Interspeech 2010 in Japan. She has also organized a special session on Deep Learning at ICML 2013 in Atlanta and "New Trends in self-supervised speech processing" at Interspeech (2020). In addition, she is a staff reporter for the IEEE Speech and Language Processing Technical Committee (SLTC) Newsletter. Her research interests are mainly in acoustic modeling, including deep neural networks, sparse representations and adaptation methods.</span>
      ,"https://static.aimsammi.org/uploads/2019/01/IMG_7451.jpg"
    ],
    [
      "Karen Livescu",
      "Toyota Technological Institute at Chicago",
      <span><strong>Karen Livescu</strong> is an Associate Professor at TTI-Chicago, a philanthropically endowed academic computer science institute located on the University of Chicago campus. She completed her PhD in 2005 at MIT in the Spoken Language Systems group of the Computer Science and Artificial Intelligence Laboratory. In 2005-2007 she was a post-doctoral lecturer in the MIT EECS department. Her main research interests are in speech and language processing and related problems in machine learning.  Her recent work includes multi-view representation learning, acoustic word embeddings, visually grounded speech modeling, and automatic sign language recognition.  Her recent professional activities include serving as a program chair of ICLR 2019 and a technical co-chair of ASRU 2015/2017/2019 and Interspeech 2022.</span>
      ,"https://www.ttic.edu/img/livescu.jpg"
    ],
  ]
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Organizers and Biographies</h2>
      <div>
        <GridContainer>
          {infos.map(info => <Person classes={classes} imageClasses={imageClasses} name={info[0]} title={info[1]} description={info[2]} imgurl={info[3]} />)}
        </GridContainer>
      </div>
    </div>
  );
}
