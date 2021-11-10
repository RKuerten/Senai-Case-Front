import { useLayoutEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 5,
    alignSelf: "stretch",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  link: {
    color: "#262626",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "0.8rem",
    fontWeight: 400,
    letterSpacing: "0.03333em",
    lineHeight: 1.66,
    textDecoration: "none",
  },
  itemMargin: {
    marginTop: 15,
  },
}));

const useWindowWidth = () => {
  const [width, setWidth] = useState<Number>(screen.width);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
};

export default function SignInFooter() {
  const classes = useStyles();
  const width = useWindowWidth();

  return (
    <Grid
      className={classes.wrapper}
      container
      spacing={width > 360 ? 4 : width > 320 ? 3 : 1}
    >
      <Grid className={classes.itemMargin} item>
        <RouterLink className={classes.link} to="/ajuda">
          Ajuda
        </RouterLink>
      </Grid>
      <Grid className={classes.itemMargin} item>
        <RouterLink className={classes.link} to="/termos">
          Termos &amp; Condições
        </RouterLink>
      </Grid>
    </Grid>
  );
}
