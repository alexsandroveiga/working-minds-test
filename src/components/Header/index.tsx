import { FiBell, FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export function Header (): JSX.Element {
  return (
    <Container>
      <section className="welcome">
        <Link to="/profile">
          <img src="https://pbs.twimg.com/profile_images/1408830364278272006/H3EygOMt_400x400.jpg" alt="Alexsandro Veiga" />
        </Link>
        <h1>Bem vindo ao Dashboard</h1>
      </section>
      <em />
      <section>
        <span>Gerente</span>
        <button><FiBell /></button>

        <button><FiLogOut /></button>
      </section>
    </Container>
  )
}
