import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

function listofname(names) {
  return <div style={{width: 170, overflowX: "auto"}}>
    {
      names.map(name => <p>{name}</p>)
    }
  </div>
}

function listoftitle(names) {
  return <div style={{width: 720, overflowX: "auto"}}>
    {
      names.map(name => <p>{name}</p>)
    }
  </div>
}

const rows = [
  createData('09:50-10:00', "Introduction", "Hung-yi Lee", "Opening Remarks"),
  createData('10:00-10:45', "Invited talk", "Bhuvana Ramabhadran", "TBD"),
  createData('10:45-11:30', "Invited talk", "Mark Hasegawa-Johnson", "Multimodal Distant Supervision"),
  createData('11:30-12:30', "Contributed talks (I)",
              listofname([
                "Aswin Sivaraman",
                "Sung-Feng Huang",
                "Jaesung Huh",
                "Denis Filimonov",
                "Cheng-I Lai",
                "Tu Anh Nguyen"
              ]),
              listoftitle([
                "Self-Supervised Learning using Contrastive Mixtures for Personalized Speech Enhancement",
                "Self-supervised Pre-training Reduces Label Permutation Instability of Speech Separation",
                "Augmentation adversarial training for self-supervised speaker recognition",
                "Neural Composition: Learning to Generate from Multiple Models",
                "Towards Semi-Supervised Semantics Understanding from Speech",
                "The Zero Resource Speech Benchmark 2021. Metrics and baselines for unsupervised spoken language modeling"
              ]),
            ),
  createData('12:30-12:45', "Q&A", "", "Q&A for Contributed talks (I)"),
  createData('12:45-13:00', "Break", "", "Break"),
  createData('13:00-13:45', "Invited talk", "Dong Yu", "Speech Processing with Weak Supervision"),
  createData('13:45-14:25', "Contributed talks (II)",
              listofname([
                "Kayode Olaleye",
                "Wei-Ning Hsu",
                "Efthymios Tzinis",
                "Aaron van den Oord",
              ]),
              listoftitle([
                "Towards Localisation of Keywords in Speech Using Weak Supervision",
                "Text-Free Image-to-Speech Synthesis Using Learned Segmental Units",
                "Self-Supervised Audio-Visual Separation of On-Screen Sounds from Unlabeled Videos",
                "Multi-Format Contrastive Learning of Audio Representations",
              ]),
            ),
  createData('14:25-14:40', "Q&A", "", "Q&A for Contributed talks (II)"),
  createData('14:40-14:55', "Break", "", "Break"),
  createData('14:55-15:40', "Invited talk", "Chelsea Finn", "Underfitting and Uncertainty in Self-Supervised Predictive Models"),
  createData('15:40-16:25', "Invited talk", "Mirco Ravanelli", "Towards robust self-supervised learning of speech representations"),
  createData('16:25-17:15', "Contributed talks (III)",
              listofname([
                "Yu-An Chung",
                "Junwen Bai",
                "Daniel S Park",
                "Puyuan Peng",
                "Wei-Ning Hsu",
              ]),
              listoftitle([
                "Similarity Analysis of Self-Supervised Speech Representations",
                "Representation Learning for Sequence Data with Deep Autoencoding Predictive Components",
                "Pushing the Limits of Semi-Supervised Learning for Automatic Speech Recognition",
                "A Correspondence Variational Autoencoder for Unsupervised Acoustic Word Embedding",
                "HUBERT: How much can a bad teacher benefit ASR pre-training?",
              ]),
            ),
  createData('17:15-17:30', "Q&A", "", "Q&A for Contributed talks (III)"),
  createData('17:30-17:45', "Break", "", "Break"),
  createData('17:45-18:30', "Invited talk", "Katrin Kirchhoff", "Flexible contextualized speech representation learning for diverse downstream tasks"),
  createData('18:30-19:15', "Invited talk", "Luke Zettlemoyer", "De-noising Sequence-to-Sequence Pre-training"),
  createData('19:15-19:25', "Introduction", "Abdelrahman Mohamed", "Closing Remark"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time (EST)</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Presenters</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">
                <p style={{width: 80, margin: "auto"}}>{row.name}</p>
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
