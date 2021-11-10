import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import SignInFooter from "../../components/SignInFooter";
import useStyles from "./styles";

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src={logo}
          alt="Logo SENAI"
        />
        <Typography className={classes.title} component="h1" variant="h5">
          Recuperar senha
        </Typography>
        <Typography component="p" variant="body1" align="center">
          Atenção: Será enviado uma mensagem para o endereço de e-mail informado.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            helperText="Informe seu e-mail cadastrado"
            id="email"
            label="E-mail ou CPF"
            margin="normal"
            name="email"
            required
            variant="outlined"
            FormHelperTextProps={{ className: classes.color }}
          />
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Recuperar Senha
          </Button>
          <Typography variant="body2">
            <RouterLink className={classes.link} to="/">
              Retornar ao Login
            </RouterLink>
          </Typography>
          <SignInFooter />
        </form>
      </div>
    </Container>
  );
}
