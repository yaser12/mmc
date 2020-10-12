import React from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import PasswordForgetContainer from '../../container/LoginContainer/PasswordForgetContainer';

const useBorderInputStyles = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: theme.globalthem.primary.dark,
      color: theme.globalthem.primary.main,
      fontSize: '16px',
      fontFamily: 'Roboto',
    },
    "&:hover $notchedOutline": {
      borderColor: "black",
      color: theme.globalthem.primary.main,
      fontSize: '16px',
    },
    "&$focused $notchedOutline": {
      borderColor: theme.globalthem.primary.main,
      color: theme.globalthem.primary.main,
      fontSize: '16px',
    }
  },
  focused: {},
  notchedOutline: {}
}));

const useLoginStyles = makeStyles(theme => ({
  forminput_password: {
    color: theme.globalthem.primary.main,
    width: '90%',
    marginBottom: '33px',
    borderColor: theme.globalthem.primary.main,
    marginTop: '0px'
  },
  forminput: {
    marginBottom: '33px',
    marginTop: '33px',
    borderColor: theme.globalthem.primary.main,
    color: theme.globalthem.primary.main,
    width: '90%'
  },
  input: {
    width: '100%',
    color: theme.globalthem.primary.main,
  },
  submit: {
    width: '90%',
    color: 'black',
    backgroundColor: theme.globalthem.primary.main + '!important'
  },
  inputlabel: {
    borderColor: '#5e5e5d!important',
    color: theme.globalthem.primary.dark,
    fontSize: '12px!important',
    fontFamily: 'Roboto'
  },
  form: {
    borderColor: theme.globalthem.primary.main,
    textAlign: 'center'
  },
  icon: {
    borderColor: theme.globalthem.primary.light,
    color: theme.globalthem.primary.light,
    width: '30px'
  },
  visibilityicon: {
    borderColor: theme.globalthem.primary.light,
    color: theme.globalthem.primary.dark,
    width: '30px',
  },
  passsword_vergessen: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: theme.globalthem.primary.dark,
    paddingTop: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  first_text_under_button: {
    textAlign: 'center',
    color: theme.globalthem.primary.dark,
    paddingTop: '20px',
    fontSize: '16px',
  },
  second_text_under_button: {
    textAlign: 'center',
    color: theme.globalthem.primary.dark,
    fontSize: '16px',
    fontWeight: 'bold',
  }
  ,
  loginpag: {
    height: '100vh',
  }
}));

const LoginForm = ({ doLogin }) => {
  const borderclasses = useBorderInputStyles();
  const loginClasses = useLoginStyles();
  const { t } = useTranslation("words");
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      doLogin(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={loginClasses.form} >
        <FormControl className={loginClasses.forminput} variant="outlined" >
          <InputLabel htmlFor="email" className={loginClasses.inputlabel}   >{t("email")}</InputLabel>
          <OutlinedInput
            classes={borderclasses}
            id="email"
            name="email"
            type="email"
            variant="outlined"
            margin="none"
            required
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.email}
            label={t("email")}
            autoComplete="email"
            autoFocus
            startAdornment={
              <InputAdornment position="start" disablePointerEvents>
                <IconButton>
                  <EmailIcon className={loginClasses.icon} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          className={loginClasses.forminput_password}
          variant="outlined" >
          <InputLabel htmlFor="password" className={loginClasses.inputlabel}>{t("password")}</InputLabel>
          <OutlinedInput
            classes={borderclasses}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.password}
            label={t("password")}
            size="small"
            autoComplete="current-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff className={loginClasses.visibilityicon} /> : <Visibility className={loginClasses.visibilityicon} />}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start" disablePointerEvents>
                <IconButton>
                  <LockIcon className={loginClasses.icon} />
                </IconButton>
              </InputAdornment>
            }
          />
          <Grid className={loginClasses.passsword_vergessen}    >
            <PasswordForgetContainer />
          </Grid>
        </FormControl>
        <Button
          className={loginClasses.submit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          {t("sign_in")}
        </Button>
        <Grid className={loginClasses.first_text_under_button}  >
          {t("no_account_yet")}
        </Grid>
        <Grid className={loginClasses.second_text_under_button}  >
          {t("register_now")}
        </Grid>
      </form>
    </>
  );
};

export default LoginForm
