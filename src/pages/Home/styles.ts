import styled from 'styled-components'

export const Container = styled.div`
  background: #f8f8f8;
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 822px) {
    
  }

  @media screen and (min-width: 1024px) {
  }
`

export const Content = styled.main`
  margin: 0 auto;
  width: 100%;
  border: 1px solid #fff;
  max-width: 500px;
  background: #fff;
  box-shadow: 0px 0px 1px 1px rgba(0,0,0, 0.04);

  .tab {
    display: flex;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 0.25rem;
      background: #2191fb;
      width: 50%;
      left: 0;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &.active:after {
      left: 50%;
    }

    button {
      background: transparent;
      flex: 1;
      font-size: 0.8rem;
      height: 3rem;
      font-weight: 500;
      color: #2191fb;
    }

    &.active button {
      font-weight: normal;
      color: #222;
    }

    button:last-child {
      font-weight: normal;
      color: #222;
    }

    &.active button:last-child {
      font-weight: 500;
      color: #2191fb;
    }
  }

  .grid {
    padding: 0.5rem;

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      border: 1px solid #f0f0f0;
      border-radius: 1.3rem;
      min-height: 4rem;

      & + section {
        margin-top: 0.5rem;
      }

      > div {
        flex: 1;
        margin: 0 0.5rem;
        height: auto;

        h1 {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1;

          a {
            color: #2191fb;
            text-decoration: none;
          }
        }

        span {
          width: 100%;
          font-size: 0.625rem;
        }
      }

      picture {
        position: relative;
        height: 3rem;
        width: 3rem;
        border-radius: 1.3rem;
        overflow: hidden;
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);

        img {
          height: 3rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }
      }      

      button {
        background: transparent;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & + button {
          margin-left: 0.25rem;
        }
      }
    }
  }

  form {
    border: 1px solid #f0f0f0;
    margin: 0 0.5rem 0.5rem;
    padding: 0.5rem;

    h1 {
      color: #2191fb;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
    }

    input {
      width: 100%;
      max-width: 400px;
      margin-top: 0.5rem;
      height: 3rem;
      padding: 0 1rem;
    }

    button {
      width: 100%;
      max-width: 400px;
      background: #2191fb;
      color: #fff;
      height: 3rem;
      font-size: 0.8rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  }
`

export const Sidebar = styled.aside`
  
`
