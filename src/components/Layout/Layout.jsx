import { Container, Header, Link } from 'components/App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home', end: 'end' },
  { href: 'movies', text: 'Movies' },
];

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            {navItems.map(({ href, text, end }) => (
              <Link key={href} to={href} end={end}>
                {text}
              </Link>
            ))}
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
