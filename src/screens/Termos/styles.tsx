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
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  terms: {
    marginBottom: theme.spacing(1),
  },
  wrapper: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  signUp: {
    margin: theme.spacing(0, 0, 3),
    minHeight: 48,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

export default useStyles;
