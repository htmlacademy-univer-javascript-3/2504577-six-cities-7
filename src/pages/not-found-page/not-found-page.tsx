import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '60px', marginTop: '0' }}>404</h1>
      <h2>Страница не найдена</h2>
      <Link to="/" style={{ color: 'orange' }}>
        Перейти на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
