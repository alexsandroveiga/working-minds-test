import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #222;

  svg,
  img {
    display: block; 
  }

  button {
    background: transparent;
  }

  em {
    flex: 1
  }

  .menu-button {
    display: flex;
    align-items: center;
    font-size: 0.625rem;
    line-height: 0.625rem;
    font-weight: 600;
    color: #222;
  }

  .welcome {
    display: flex;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 1.2rem;
      margin-right: 0.5rem;
    }

    h1 {
      font-size: 0.8rem;
      display: none;
    }
  }

  section {
    display: flex;
    align-items: center;

    span {
      background: #f0f0f0;
      color: #666;
      font-size: 0.625rem;
      padding: 0.125rem 0.25rem;
      border-radius: 0.25rem;
      font-weight: 500;
    }

    button {
      background: transparent;
      margin-left: 0.5rem;
    }
  }

  @media screen and (min-width: 822px) {
    flex-direction: column;
    padding: 1rem;
    width: 5rem;
    border-right: none;
    border-right: 1px solid #f0f0f0;
    height: 100vh;

    .welcome {
      img {
        margin: 0;
      }
    }
  }
`
