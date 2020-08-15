import styled from 'styled-components'

export const Wrapper = styled.div`
  img {
    width: 100%;
    box-shadow: 0px 24px 16px -16px rgba(0, 0, 0, 0.4);
    margin-bottom: 16px;
    transition: ease 0.2s;
  }

  &:hover img {
    transform: scale(1.02);
  }
`
