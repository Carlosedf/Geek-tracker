import './Home.css';
import { Link } from 'react-router-dom';

const logoSrc = '/images/logo-geek-tracker.png';
const placeholderArt = '/images/reserva-imagem.png';
const bannerSrc = '/images/banner-home.png';

const sidebarLinks = [
  { label: 'Início', icon: HomeIcon, active: true },
  { label: 'Jogos', icon: GamepadIcon },
  { label: 'Filmes', icon: FilmIcon },
  { label: 'Séries', icon: TvIcon },
  { label: 'Livros', icon: BookIcon },
  { label: 'Comunidade', icon: UsersIcon },
  { label: 'Favoritos', icon: HeartIcon },
  { label: 'Histórico', icon: ClockIcon },
];

const sections = [
  {
    title: 'Jogos em destaque',
    icon: GamepadIcon,
    action: 'Ver todos',
    items: [
      { title: 'The Witcher 3', category: 'RPG • Aventura', score: '9.7' },
      { title: 'Elden Ring', category: 'RPG • Ação', score: '9.8' },
      { title: 'God of War', category: 'Ação • Aventura', score: '9.6' },
      { title: 'Zelda: Breath of the Wild', category: 'Aventura • Mundo aberto', score: '9.7' },
      { title: 'Red Dead Redemption 2', category: 'Ação • Aventura', score: '9.6' },
      { title: 'Undertale', category: 'RPG • Indie', score: '9.4' },
    ],
  },
  {
    title: 'Filmes em destaque',
    icon: FilmIcon,
    action: 'Ver todos',
    items: [
      { title: 'Harry Potter', category: 'Fantasia • Aventura', score: '8.3' },
      { title: 'O Senhor dos Anéis', category: 'Fantasia • Aventura', score: '8.8' },
      { title: 'Star Wars', category: 'Ficção científica • Ação', score: '8.6' },
      { title: 'Interestelar', category: 'Ficção científica • Drama', score: '8.6' },
      { title: 'Vingadores', category: 'Ação • Aventura', score: '8.4' },
      { title: 'Homem-Aranha', category: 'Animação • Ação', score: '8.5' },
    ],
  },
  {
    title: 'Séries em destaque',
    icon: TvIcon,
    action: 'Ver todos',
    items: [
      { title: 'Breaking Bad', category: 'Drama • Suspense', score: '9.6' },
      { title: 'The Witcher', category: 'Ação • Aventura', score: '8.2' },
      { title: 'Stranger Things', category: 'Ficção científica • Terror', score: '8.7' },
      { title: 'Game of Thrones', category: 'Drama • Fantasia', score: '9.3' },
      { title: 'The Mandalorian', category: 'Ação • Ficção científica', score: '8.8' },
      { title: 'Arcane', category: 'Animação • Ação', score: '9.0' },
    ],
  },
  {
    title: 'Livros em destaque',
    icon: BookIcon,
    action: 'Ver todos',
    items: [
      { title: 'O Senhor dos Anéis', category: 'Fantasia', score: '9.6' },
      { title: 'Harry Potter', category: 'Fantasia', score: '9.2' },
      { title: 'Duna', category: 'Ficção científica', score: '9.0' },
      { title: '1984', category: 'Ficção científica', score: '8.7' },
      { title: 'O Nome do Vento', category: 'Fantasia', score: '9.1' },
      { title: 'As Crônicas de Gelo e Fogo', category: 'Fantasia', score: '9.3' },
    ],
  },
];

const allWorks = [
  { title: 'The Witcher 3: Wild Hunt', category: 'CD Projekt Red', score: '9.7' },
  { title: 'God of War Ragnarok', category: 'Santa Monica Studio', score: '9.6' },
  { title: 'Interstellar', category: '2014', score: '9.2' },
  { title: 'Harry Potter e a Pedra Filosofal', category: 'J.K. Rowling', score: '9.0' },
  { title: '1984', category: 'George Orwell', score: '8.9' },
  { title: 'The Last of Us Part I', category: 'Naughty Dog', score: '8.9' },
  { title: 'Cyberpunk 2077', category: 'CD Projekt Red', score: '8.8' },
  { title: 'Vingadores: Ultimato', category: '2019', score: '8.8' },
  { title: 'It: A Coisa', category: 'Stephen King', score: '8.7' },
  { title: 'One Piece (anime)', category: 'Toei Animation', score: '8.7' },
  { title: 'A Song of Ice and Fire', category: 'George R. R. Martin', score: '8.6' },
  { title: 'Red Dead Redemption 2', category: 'Rockstar Games', score: '8.6' },
  { title: 'Horizon Zero Dawn', category: 'Guerrilla Games', score: '8.6' },
  { title: 'Star Wars: Episodio IV', category: '1977', score: '8.6' },
  { title: 'O Senhor dos Anéis', category: 'J. R. R. Tolkien', score: '8.6' },
  { title: 'Atomic Habits', category: 'James Clear', score: '8.5' },
  { title: 'Stranger Things (4a temporada)', category: '2022', score: '8.5' },
  { title: 'Castlevania (serie)', category: 'Netflix', score: '8.4' },
];

function Home() {
  return (
    <main className="home-page">
      <div className="home-backdrop" aria-hidden="true">
        <span className="home-glow home-glow--a" />
        <span className="home-glow home-glow--b" />
        <span className="home-glow home-glow--c" />
      </div>

      <div className="home-shell">
        <aside className="home-sidebar">
          <div className="brand-panel">
            <div className="brand-panel__logo" aria-hidden="true">
              <img src={logoSrc} alt="" />
            </div>
            <div className="brand-panel__copy">
              <strong>GEEK TRACKER</strong>
              <span>Seu universo. Suas histórias.</span>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Seções principais">
            {sidebarLinks.map(({ label, icon: Icon, active }) => (
              <a className={`sidebar-nav__link ${active ? 'is-active' : ''}`} href={`#${label.toLowerCase()}`} key={label}>
                <span className="sidebar-nav__icon" aria-hidden="true">
                  <Icon />
                </span>
                {label}
              </a>
            ))}
          </nav>

          <section className="sidebar-card sidebar-card--challenge">
            <span className="sidebar-card__eyebrow">Desafio diário</span>
            <h2>Assista a um filme e ganhe 50 XP</h2>
            <p>Complete uma atividade hoje e avance no seu perfil.</p>
            <div className="xp-meter" aria-hidden="true">
              <span />
            </div>
            <strong>0/1 concluído</strong>
          </section>

          <section className="sidebar-card sidebar-card--profile">
            <div className="profile-level">
              <span>Nível 23</span>
              <strong>Player1</strong>
            </div>
            <div className="profile-avatar" aria-hidden="true">
              <img src={logoSrc} alt="" />
            </div>
            <ul className="profile-stats">
              <li>
                <span>Conquistas</span>
                <strong>16/50</strong>
              </li>
              <li>
                <span>Favoritos</span>
                <strong>128</strong>
              </li>
              <li>
                <span>Listas criadas</span>
                <strong>7</strong>
              </li>
            </ul>
          </section>
        </aside>

        <div className="home-content">
          <header className="topbar">
            <Link className="topbar__brand" to="/" aria-label="Geek Tracker">
              <span className="topbar__logo" aria-hidden="true">
                <img src={logoSrc} alt="" />
              </span>
              <span>Geek Tracker</span>
            </Link>

            <label className="searchbar" htmlFor="search">
              <SearchIcon />
              <input
                id="search"
                type="search"
                placeholder="Buscar por jogos, filmes, séries, livros e muito mais..."
              />
            </label>

            <nav className="topbar-nav" aria-label="Navegação secundária">
              <a className="topbar-nav__link is-active" href="#inicio">
                Início
              </a>
              <a className="topbar-nav__link" href="#explorar">
                Explorar
              </a>
              <a className="topbar-nav__link" href="#comunidade">
                Comunidade
              </a>
              <a className="topbar-nav__link" href="#listas">
                Listas
              </a>
            </nav>

            <Link className="topbar-login-link" to="/login">
              Login
            </Link>

            <a className="user-chip" href="#perfil">
              <span className="user-chip__avatar" aria-hidden="true">
                <img src={logoSrc} alt="" />
              </span>
              <span className="user-chip__meta">
                <strong>Player1</strong>
                <small>Nível 23</small>
              </span>
            </a>
          </header>

          <section
            className="hero-banner"
            id="inicio"
            style={{ '--hero-image': `url(${bannerSrc})` }}
            aria-labelledby="hero-title"
          >
            <div className="hero-banner__copy">
              <span className="hero-banner__eyebrow">Geek Tracker</span>
              <h1 id="hero-title">
                SEU <span>UNIVERSO.</span>
                <br />
                SUAS <span>HISTÓRIAS.</span>
              </h1>
              <p>
                Explore, descubra e compartilhe tudo que você ama em um só lugar.
              </p>

              <div className="hero-banner__actions">
                <a className="primary-action" href="#explorar">
                  Explorar agora
                  <ArrowRightIcon />
                </a>
                <a className="secondary-action" href="#listas">
                  Ver listas
                </a>
              </div>
            </div>

          </section>

          <div className="catalogs" id="explorar">
            {sections.map((section) => (
              <section className="catalog-section" key={section.title}>
                <div className="catalog-section__header">
                  <h2>
                    <span className="catalog-section__icon" aria-hidden="true">
                      <section.icon />
                    </span>
                    {section.title}
                  </h2>
                  <a href="#ver-todos">{section.action}</a>
                </div>

                <div className="catalog-grid">
                  {section.items.map((item) => (
                    <article className="catalog-card" key={item.title}>
                      <div className="catalog-card__poster">
                        <img src={placeholderArt} alt="" />
                        <span className="catalog-card__score">{item.score}</span>
                      </div>
                      <div className="catalog-card__body">
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section className="catalog-section catalog-section--all" id="listas">
              <div className="catalog-section__header catalog-section__header--all">
                <div>
                  <h2>
                    <span className="catalog-section__icon" aria-hidden="true">
                      <BookIcon />
                    </span>
                    Todas as obras
                  </h2>
                  <p className="catalog-section__subhead">1.248 obras encontradas</p>
                </div>

                <label className="sort-control" htmlFor="sort-works">
                  <span>Ordenar por:</span>
                  <select id="sort-works" defaultValue="popular">
                    <option value="popular">Mais populares</option>
                    <option value="recent">Mais recentes</option>
                    <option value="rating">Maior avaliação</option>
                  </select>
                </label>
              </div>

              <div className="all-works-layout">
                <aside className="filter-panel" aria-label="Filtros de obras">
                  <div className="filter-panel__header">
                    <h3>Filtros</h3>
                    <button type="button">Limpar</button>
                  </div>

                  <label className="filter-search" htmlFor="work-search">
                    <input id="work-search" type="search" placeholder="Buscar nas obras..." />
                    <SearchIcon />
                  </label>

                  <div className="filter-group">
                    <span className="filter-group__title">Tipo</span>
                    <div className="filter-pills">
                      <button type="button" className="filter-pill is-active">
                        Todos
                      </button>
                      <button type="button" className="filter-pill">
                        Jogos
                      </button>
                      <button type="button" className="filter-pill">
                        Filmes
                      </button>
                      <button type="button" className="filter-pill">
                        Livros
                      </button>
                    </div>
                  </div>

                  <label className="filter-select" htmlFor="genre-select">
                    <span>Gênero</span>
                    <select id="genre-select" defaultValue="all">
                      <option value="all">Todos os gêneros</option>
                      <option value="fantasy">Fantasia</option>
                      <option value="sci-fi">Ficção científica</option>
                      <option value="action">Ação</option>
                    </select>
                  </label>

                  <label className="filter-select" htmlFor="platform-select">
                    <span>Plataforma / Formato</span>
                    <select id="platform-select" defaultValue="all">
                      <option value="all">Todas as plataformas</option>
                      <option value="games">Jogos</option>
                      <option value="movies">Filmes</option>
                      <option value="books">Livros</option>
                    </select>
                  </label>

                  <div className="filter-group">
                    <span className="filter-group__title">Avaliação mínima</span>
                    <div className="rating-picker" aria-hidden="true">
                      <button type="button" className="rating-pill">
                        5
                      </button>
                      <button type="button" className="rating-pill">
                        4
                      </button>
                      <button type="button" className="rating-pill">
                        3
                      </button>
                      <button type="button" className="rating-pill">
                        2
                      </button>
                      <button type="button" className="rating-pill">
                        1
                      </button>
                    </div>
                    <span className="filter-group__note">Qualquer</span>
                  </div>

                  <div className="filter-group">
                    <span className="filter-group__title">Status</span>
                    <label className="check-option">
                      <input type="checkbox" />
                      <span>Quero conhecer</span>
                    </label>
                    <label className="check-option">
                      <input type="checkbox" />
                      <span>Já conheço</span>
                    </label>
                    <label className="check-option">
                      <input type="checkbox" />
                      <span>Favorito</span>
                    </label>
                    <label className="check-option">
                      <input type="checkbox" />
                      <span>Descartado</span>
                    </label>
                  </div>

                  <button type="button" className="apply-filters">
                    Aplicar filtros
                  </button>
                </aside>

                <div className="all-works-grid">
                  {allWorks.map((item) => (
                    <article className="catalog-card catalog-card--large" key={item.title}>
                      <div className="catalog-card__poster catalog-card__poster--large">
                        <img src={placeholderArt} alt="" />
                        <span className="catalog-card__score">{item.score}</span>
                      </div>
                      <div className="catalog-card__body">
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13V10.5" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 14h10a4 4 0 0 1 4 4v.5A1.5 1.5 0 0 1 19.5 20c-1 0-1.9-.5-2.4-1.3L15.8 17H8.2l-1.3 1.7A3 3 0 0 1 4.5 20 1.5 1.5 0 0 1 3 18.5V18a4 4 0 0 1 4-4Z" />
      <path d="M8 12v4M6 14h4M16 13.5h.01M18 15.5h.01" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 5v14M16 5v14M4 9h16M4 15h16" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="11" rx="2" />
      <path d="M9 20h6" />
      <path d="m8 4 4 3 4-3" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" />
      <path d="M8 4v16" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20a6 6 0 0 1 12 0" />
      <path d="M14 20a5 5 0 0 1 10 0" />
      <circle cx="10" cy="8" r="3" />
      <circle cx="18" cy="9" r="2.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-7-4.4-9.5-8.8C.4 7.7 3 4 6.7 4c2 0 3.4 1 4.3 2.2C11.9 5 13.3 4 15.3 4 19 4 21.6 7.7 21.5 11.2 19 15.6 12 20 12 20Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default Home;
