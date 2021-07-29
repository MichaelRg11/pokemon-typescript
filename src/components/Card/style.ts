import styled from 'styled-components';

interface propsCard {
  color: string;
}

export const Card = styled.article<propsCard>`
  width: 350px;
  height: 180px;
  border-radius: 30px;
  padding: 10px 20px;
  background:  ${({ color }) => color};
`

interface propsTitle {
  color: string;
}

export const Title = styled.h4<propsTitle>`
  font-size: 20px;
  font-weight: 500;
  color: ${({ color }) => color};
`