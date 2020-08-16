import styled from 'styled-components'

export const InfoContainer = styled.div`
  flex: 1;
  margin: 0 16px;

  & > * {
    margin-bottom: 16px;
  }

  .description {
    max-width: 600px;
  }
`

export const Title = styled.h1`
  margin: 0;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 32px;
    }
  }
`

export const MarvelLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
