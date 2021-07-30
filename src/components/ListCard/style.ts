import styled from 'styled-components'

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 1.5fr;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`