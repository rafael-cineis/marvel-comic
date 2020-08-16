import styled from 'styled-components'

export const ComicsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  gap: 16px;
`

export const Wrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`
