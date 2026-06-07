import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const logoSrc = '/images/logo-geek-tracker.png';
const bannerSrc = '/images/banner-home.png';

const initialForm = {
  identifier: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState('');

  const isLogin = mode === 'login';

  const resetModeState = (nextMode) => {
    setMode(nextMode);
    setErrors({});
    setTouched({});
    setStatus('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const updateField = (event) => {
    const { name, type, checked, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (status) {
      setStatus('');
    }

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const markTouched = (event) => {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (isLogin) {
      if (!form.identifier.trim()) {
        nextErrors.identifier = 'Informe seu e-mail ou usuário.';
      }

      if (!form.password.trim()) {
        nextErrors.password = 'Digite sua senha.';
      } else if (form.password.trim().length < 6) {
        nextErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
      }

      return nextErrors;
    }

    if (!form.username.trim()) {
      nextErrors.username = 'Crie um nome de usuário.';
    } else if (form.username.trim().length < 3) {
      nextErrors.username = 'Use pelo menos 3 caracteres.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Informe um e-mail válido.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email = 'Esse e-mail parece inválido.';
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Crie uma senha.';
    } else if (form.password.trim().length < 6) {
      nextErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
    }

    if (!form.confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Confirme sua senha.';
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'As senhas precisam ser iguais.';
    }

    if (!form.acceptTerms) {
      nextErrors.acceptTerms = 'Você precisa aceitar os termos para continuar.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    const fieldsToMark = isLogin
      ? ['identifier', 'password']
      : ['username', 'email', 'password', 'confirmPassword', 'acceptTerms'];

    setTouched((current) => {
      const nextTouched = { ...current };
      fieldsToMark.forEach((field) => {
        nextTouched[field] = true;
      });
      return nextTouched;
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('');
      return;
    }

    setStatus(
      isLogin
        ? 'Login validado no front-end. Conecte a API para autenticar de verdade.'
        : 'Cadastro validado no front-end. Conecte a API para criar a conta.',
    );

    navigate('/');
  };

  const hasFieldError = (name) => touched[name] && errors[name];

  return (
    <main className="auth-page" style={{ '--login-image': `url(${bannerSrc})` }}>
      <div className="auth-atmosphere" aria-hidden="true" />

      <section className="auth-card" aria-labelledby="auth-title">
        <div className="brand-lockup">
          <div className="brand-icon" aria-hidden="true">
            <img src={logoSrc} alt="" />
          </div>
          <div className="brand-copy">
            <span className="brand-kicker">GEEK TRACKER</span>
            <span className="brand-subtitle">Seu universo. Suas histórias.</span>
          </div>
        </div>

        <div className="auth-heading">
          <h1 id="auth-title">{isLogin ? 'Login' : 'Criar conta'}</h1>
          <p>
            {isLogin
              ? 'Entre para acessar sua biblioteca, listas e conquistas.'
              : 'Junte-se ao Geek Tracker e comece sua jornada agora.'}
          </p>
        </div>

        <div className="mode-switch" aria-label="Selecionar modo de autenticação">
          <button
            type="button"
            className={`mode-switch__button ${isLogin ? 'is-active' : ''}`}
            onClick={() => resetModeState('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={`mode-switch__button ${!isLogin ? 'is-active' : ''}`}
            onClick={() => resetModeState('register')}
          >
            Criar conta
          </button>
        </div>

        {status ? (
          <p className="form-status" role="status">
            {status}
          </p>
        ) : null}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {isLogin ? (
            <>
              <Field
                id="identifier"
                name="identifier"
                label="E-mail ou usuário"
                icon={<UserIcon />}
                placeholder="Digite seu e-mail ou usuário"
                value={form.identifier}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="username"
                error={hasFieldError('identifier')}
              />

              <Field
                id="password"
                name="password"
                label="Senha"
                icon={<LockIcon />}
                placeholder="Digite sua senha"
                value={form.password}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="current-password"
                error={hasFieldError('password')}
                type={showPassword ? 'text' : 'password'}
                action={
                  <button
                    type="button"
                    className="field-action"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                }
              />

              {hasFieldError('password') ? null : (
                <a className="forgot-link" href="#recovery">
                  Esqueci minha senha
                </a>
              )}

              <button className="primary-button" type="submit">
                <span className="button-icon" aria-hidden="true">
                  <ControllerIcon />
                </span>
                Entrar
              </button>

              <div className="auth-divider" aria-hidden="true">
                <span />
                <strong>ou</strong>
                <span />
              </div>

              <button
                type="button"
                className="secondary-button"
                onClick={() => resetModeState('register')}
              >
                <span className="button-icon" aria-hidden="true">
                  <PlusUserIcon />
                </span>
                Criar conta
              </button>
            </>
          ) : (
            <>
              <Field
                id="username"
                name="username"
                label="Nome de usuário"
                icon={<UserIcon />}
                placeholder="Escolha seu nome"
                value={form.username}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="username"
                error={hasFieldError('username')}
              />

              <Field
                id="email"
                name="email"
                label="E-mail"
                icon={<MailIcon />}
                placeholder="Digite seu e-mail"
                value={form.email}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="email"
                error={hasFieldError('email')}
              />

              <Field
                id="register-password"
                name="password"
                label="Senha"
                icon={<LockIcon />}
                placeholder="Crie uma senha"
                value={form.password}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="new-password"
                error={hasFieldError('password')}
                type={showPassword ? 'text' : 'password'}
                action={
                  <button
                    type="button"
                    className="field-action"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                }
              />

              <Field
                id="confirmPassword"
                name="confirmPassword"
                label="Confirmar senha"
                icon={<LockIcon />}
                placeholder="Repita a senha"
                value={form.confirmPassword}
                onChange={updateField}
                onBlur={markTouched}
                autoComplete="new-password"
                error={hasFieldError('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                action={
                  <button
                    type="button"
                    className="field-action"
                    onClick={() => setShowConfirmPassword((current) => !current)}
                    aria-label={
                      showConfirmPassword ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'
                    }
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                }
              />

              <label className={`terms ${hasFieldError('acceptTerms') ? 'is-error' : ''}`}>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onChange={updateField}
                  onBlur={markTouched}
                  aria-invalid={Boolean(hasFieldError('acceptTerms'))}
                  aria-describedby={hasFieldError('acceptTerms') ? 'acceptTerms-error' : undefined}
                />
                <span>
                  Li e concordo com os{' '}
                  <a href="#terms">Termos de Uso</a> e a{' '}
                  <a href="#privacy">Política de Privacidade</a>
                </span>
              </label>

              {hasFieldError('acceptTerms') ? (
                <p className="field-error field-error--block" id="acceptTerms-error">
                  {errors.acceptTerms}
                </p>
              ) : null}

              <button className="primary-button" type="submit">
                <span className="button-icon" aria-hidden="true">
                  <StarIcon />
                </span>
                Criar conta
              </button>

              <div className="auth-divider" aria-hidden="true">
                <span />
                <strong>ou</strong>
                <span />
              </div>

              <button
                type="button"
                className="secondary-button"
                onClick={() => resetModeState('login')}
              >
                Já tenho conta? Fazer login
              </button>

              <Link className="forgot-link forgot-link--home" to="/">
                Voltar para a Home
              </Link>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

function Field({
  id,
  name,
  label,
  icon,
  placeholder,
  value,
  onChange,
  onBlur,
  autoComplete,
  error,
  type = 'text',
  action,
}) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="field-shell">
        <span className="field-icon" aria-hidden="true">
          {icon}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
        />
        {action ? <div className="field-action-wrap">{action}</div> : null}
      </div>
      {error ? (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3 21 21" />
      <path d="M6.5 6.5C4 8.5 2 12 2 12s3.5 6 10 6c2.1 0 4-.5 5.6-1.3" />
      <path d="M9.5 4.5A9.8 9.8 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-4.1 5.1" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.3 5.6 6.1.4-4.7 3.9 1.5 6-5.2-3.2-5.2 3.2 1.5-6-4.7-3.9 6.1-.4L12 3Z" />
    </svg>
  );
}

function ControllerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 11h10a4 4 0 0 1 4 4v1.5A3.5 3.5 0 0 1 17.5 20c-1.1 0-2.1-.5-2.8-1.3L12 15.8l-2.7 2.9A3.8 3.8 0 0 1 6.6 20 3.6 3.6 0 0 1 3 16.4V15a4 4 0 0 1 4-4Z" />
      <path d="M8 13v3M6.5 14.5h3M16.5 13.5h.01M18.5 15.5h.01" />
    </svg>
  );
}

function PlusUserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 20a6 6 0 0 0-12 0" />
      <circle cx="9" cy="8" r="4" />
      <path d="M18 8v6M15 11h6" />
    </svg>
  );
}

export default Login;
