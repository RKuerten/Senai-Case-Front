import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import logo from "../../assets/logo.png";
import SignInFooter from "../../components/SignInFooter";
import useStyles from "./styles";

export default function SignIn() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  let history = useHistory();

  const handleLogin = () => {
    history.push("/sistema");
  };

  const handleSignUpClick = () => {
    history.push("/cadastro");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          Entrar
        </Typography>
        <Typography component="p" variant="body1" align="center">
          Para entrar no Espaço do Aluno, informe seus dados.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="E-mail ou CPF"
            margin="normal"
            name="email"
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Senha"
            margin="normal"
            name="senha"
            required
            type={showPassword ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="alternar: mostrar/esconder senha"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="body2">
            <RouterLink className={classes.link} to="/forgot-password">
              Esqueceu sua senha?
            </RouterLink>
          </Typography>
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            onClick={handleLogin}
            size="large"
            type="submit"
            variant="contained"
          >
            Fazer login
          </Button>
          <Button
            className={classes.signUp}
            color="secondary"
            fullWidth
            onClick={handleSignUpClick}
            size="large"
            type="button"
            variant="outlined"
          >
            Criar conta
          </Button>
          <SignInFooter />
        </form>
      </div>
    </Container>
  );
}
