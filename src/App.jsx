import { useEffect, useState } from 'react';
import './App.css';

const loginLinks = [
  {
    label: 'E-mail ou usuário',
    type: 'text',
    placeholder: 'Digite seu e-mail ou usuário',
    icon: 'user',
  },
  {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    icon: 'lock',
  },
];

const signUpLinks = [
  {
    label: 'Nome de usuário',
    type: 'text',
    placeholder: 'Escolha um nome de usuário',
    icon: 'user',
  },
  {
    label: 'E-mail',
    type: 'email',
    placeholder: 'Digite seu e-mail',
    icon: 'mail',
  },
  {
    label: 'Senha',
    type: 'password',
    placeholder: 'Crie uma senha',
    icon: 'lock',
  },
  {
    label: 'Confirmar senha',
    type: 'password',
    placeholder: 'Repita sua senha',
    icon: 'lock',
  },
];

function Icon({ name }) {
  if (name === 'lock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 10V8a5 5 0 0 0-10 0v2H5v10h14V10h-2Zm-8-2a3 3 0 1 1 6 0v2H9V8Zm4 8h-2v-3h2v3Z" />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4V6Zm2 2v.3l6 4.2 6-4.2V8H6Zm12 8V10.4l-5.4 3.8a1 1 0 0 1-1.2 0L6 10.4V16h12Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
    </svg>
  );
}

function App() {
  const [mode, setMode] = useState('login');

  useEffect(() => {
    document.title =
      mode === 'login'
        ? 'Geek Tracker | Login'
        : 'Geek Tracker | Criar conta';
  }, [mode]);

  const fields = mode === 'login' ? loginLinks : signUpLinks;

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="app-shell">
      <div className="space-glow space-glow--one" />
      <div className="space-glow space-glow--two" />
      <div className="space-grid" />

      <section className="auth-layout">
        <aside className="showcase showcase--left" aria-hidden="true">
          <div className="poster poster--neon">
            <span>Eat</span>
            <span>Sleep</span>
            <span>Game</span>
            <span>Repeat</span>
          </div>
          <div className="shelf shelf--stack">
            <div className="collector collector--orb" />
            <div className="collector collector--cube" />
            <div className="collector collector--ring" />
          </div>
        </aside>

        <section className="auth-card">
          <div className="brand-mark">
            <span className="brand-mark__spark">✦</span>
            <div>
              <strong>Geek Tracker</strong>
              <p>Seu universo, suas histórias.</p>
            </div>
          </div>

          <header className="auth-header">
            <div className="auth-kicker">
              <span>✦</span>
              <span>{mode === 'login' ? 'Login' : 'Criar conta'}</span>
              <span>✦</span>
            </div>
            <h1>
              {mode === 'login'
                ? 'Acesse sua conta'
                : 'Junte-se ao Geek Tracker'}
            </h1>
            <p>
              {mode === 'login'
                ? 'Entre para continuar sua jornada, salvar favoritos e acompanhar tudo que você ama.'
                : 'Crie sua conta para montar listas, organizar universos e acompanhar sua coleção.'}
            </p>
          </header>

          <div
            className="mode-toggle"
            role="tablist"
            aria-label="Alternar formulário"
          >
            <button
              type="button"
              className={
                mode === 'login'
                  ? 'mode-toggle__button is-active'
                  : 'mode-toggle__button'
              }
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={
                mode === 'signup'
                  ? 'mode-toggle__button is-active'
                  : 'mode-toggle__button'
              }
              onClick={() => setMode('signup')}
            >
              Criar conta
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field-list">
              {fields.map((field) => (
                <label className="field" key={field.label}>
                  <span className="field__label">{field.label}</span>
                  <span className="field__control">
                    <span className="field__icon">
                      <Icon name={field.icon} />
                    </span>
                    <input type={field.type} placeholder={field.placeholder} />
                    {field.icon === 'lock' ? (
                      <button
                        type="button"
                        className="field__ghost-button"
                        aria-label={`Mostrar ${field.label.toLowerCase()}`}
                      >
                        👁
                      </button>
                    ) : null}
                  </span>
                </label>
              ))}
            </div>

            {mode === 'login' ? (
              <div className="auth-form__actions">
                <a href="/" className="auth-link">
                  Esqueci minha senha
                </a>
              </div>
            ) : (
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  Li e concordo com os <a href="/">Termos de Uso</a> e a{' '}
                  <a href="/">Política de Privacidade</a>
                </span>
              </label>
            )}

            <button type="submit" className="primary-button">
              {mode === 'login' ? 'Entrar' : 'Criar conta'}
            </button>

            <button
              type="button"
              className="secondary-button secondary-button--ghost"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            >
              {mode === 'login' ? 'Criar conta agora' : 'Já tenho uma conta'}
            </button>
          </form>
        </section>

        <aside className="showcase showcase--right" aria-hidden="true">
          <div className="frame frame--poster">
            <span className="frame__title">Level up</span>
            <span className="frame__glyph">✧</span>
          </div>
          <div className="shelf">
            <div className="book-row">
              <span />
              <span />
              <span />
            </div>
            <div className="pixel-card" />
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
