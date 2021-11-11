import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import logo from "../../assets/logo.png";
import SignInFooter from "../../components/SignInFooter";
import useStyles from "./styles";
import { escolaridade, unidades, cursos, turnos } from "./inputs";
import { formatCPF, formatPhone } from "./format";

export default function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);
  const [phone, setPhone] = React.useState("");
  const [CPF, setCPF] = React.useState("");
  const [userClass, setUserClass] = React.useState("");
  const [userEducation, setUserEducation] = React.useState("");
  const [userPlace, setUserPlace] = React.useState("");
  const [userShift, setUserShift] = React.useState("");

  const handleSignUpClick = () => {
    history.push("/cadastro");
  };

  const handleClassChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserClass(String(event.target.value));
  };

  const handleEducationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setUserEducation(String(event.target.value));
  };

  const handlePlaceChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserPlace(String(event.target.value));
  };

  const handleShiftChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserShift(String(event.target.value));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  }

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(formatCPF(event.target.value));
  }

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
          Crie sua conta
        </Typography>
        <Typography component="p" variant="body1" align="center">
          <strong>Atenção:</strong> Será enviado um e-mail de confirmação para o
          e-mail informado.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            className={classes.inputs}
            autoComplete="name"
            autoFocus
            fullWidth
            id="nome"
            label="Nome"
            margin="none"
            name="nome"
            required
            variant="outlined"
          />
          <TextField
            className={classes.inputs}
            autoComplete="cpf"
            fullWidth
            id="cpf"
            inputProps={{ inputMode: "numeric" }}
            label="CPF"
            margin="none"
            name="cpf"
            onChange={handleCPFChange}
            required
            variant="outlined"
            value={CPF}
          />
          <TextField
            className={classes.inputs}
            autoComplete="phone"
            fullWidth
            id="phone"
            inputProps={{ inputMode: "numeric" }}
            label="Celular"
            margin="none"
            name="phone"
            onChange={handlePhoneChange}
            required
            variant="outlined"
            value={phone}
          />
          <TextField
            className={classes.inputs}
            autoComplete="birthday"
            fullWidth
            id="birthday"
            label="Data de Nascimento"
            margin="none"
            name="birthday"
            required
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.inputs}
            autoComplete="email"
            fullWidth
            id="email"
            label="E-mail"
            margin="none"
            name="email"
            required
            variant="outlined"
          />
          <TextField
            className={classes.inputs}
            fullWidth
            id="user-education"
            label="Escolaridade"
            onChange={handleEducationChange}
            required
            select
            value={userEducation}
            variant="outlined"
          >
            {escolaridade.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.inputs}
            fullWidth
            id="user-place"
            label="Unidade"
            onChange={handlePlaceChange}
            required
            select
            value={userPlace}
            variant="outlined"
          >
            {unidades.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.inputs}
            fullWidth
            id="user-class"
            label="Curso"
            onChange={handleClassChange}
            required
            select
            value={userClass}
            variant="outlined"
          >
            {cursos.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.inputs}
            fullWidth
            id="user-shift"
            label="Turno"
            onChange={handleShiftChange}
            required
            select
            value={userShift}
            variant="outlined"
          >
            {turnos.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.inputs}
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Senha"
            margin="none"
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
          <TextField
            className={classes.inputs}
            fullWidth
            id="confirm-password"
            label="Confirmar Senha"
            margin="none"
            name="confirmar-senha"
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
          <Typography align="center" variant="body2">
            Ao criar uma conta em nosso sistema, você concorda com nossos{" "}
            <RouterLink className={classes.link} to="/">
              Termos &amp; Condições.
            </RouterLink>
          </Typography>
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            onClick={handleSignUpClick}
            size="large"
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
          <Typography variant="body2">
            Já possui conta?{" "}
            <RouterLink className={classes.link} to="/">
              Acesse o sistema.
            </RouterLink>
          </Typography>
          <SignInFooter />
        </form>
      </div>
    </Container>
  );
}
