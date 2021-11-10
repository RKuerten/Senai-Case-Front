import React from "react";
import { Button, Container, CssBaseline, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";
import SignInFooter from "../../components/SignInFooter";
import useStyles from "./styles";

export default function Termos() {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.logo} src={logo} alt="Logo SENAI" />
        <Typography className={classes.title} component="h1" variant="h5">
          Termos &amp; Condições
        </Typography>
        <Typography className={classes.subtitle} component="p" variant="body1">
          Os dados pessoais coletados pelo Sistema Fiep seguem todos os padrões
          de segurança e confidencialidade previstos pela Lei Geral de Proteção
          de Dados. As informações coletadas são sigilosas e não serão, em
          hipótese alguma, comercializadas a terceiros.
        </Typography>
        <ol className={classes.wrapper}>
          <Typography component="li" className={classes.terms} variant="body2">
            O aceite do termo permite, por período indeterminado, o recebimento
            de materiais de divulgação e contato das empresas que constituem o
            Sistema Fiep (Sesi, Senai, Fiep e IEL no Paraná).
          </Typography>
          <Typography component="li" className={classes.terms} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet nulla vitae augue vulputate porta. Phasellus pulvinar odio
            id urna tristique, quis fermentum tortor sodales. Nullam ac tortor
            quam.
          </Typography>
          <Typography component="li" className={classes.terms} variant="body2">
            Quisque gravida velit lorem. Nunc rutrum malesuada ex, vel iaculis
            mi aliquet quis. Aliquam pulvinar justo eleifend, facilisis libero
            quis, feugiat augue. Aliquam bibendum blandit est a feugiat.
          </Typography>
          <Typography component="li" className={classes.terms} variant="body2">
            Maecenas id aliquam leo, nec pretium arcu. Ut id pellentesque
            libero. Sed tempor volutpat nulla non euismod. In turpis ex, dictum
            eget molestie vitae, fermentum in libero.
          </Typography>
        </ol>
        <div className={classes.wrapper}>
          <Button
            className={classes.signUp}
            color="secondary"
            fullWidth
            onClick={handleClick}
            size="large"
            type="button"
            variant="outlined"
          >
            Voltar ao Login
          </Button>
          <SignInFooter />
        </div>
      </div>
    </Container>
  );
}
