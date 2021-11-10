import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    margin: theme.spacing(1.5),
    width: "100%",
  },
  title: {
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  select: {
    width: "100%", // Fix IE 11 issue.
    margin: theme.spacing(1),
    minWidth: 120,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    minHeight: 48,
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
  },
  inputs: {
    margin: theme.spacing(1, 0),
  },
}));

export default useStyles;
