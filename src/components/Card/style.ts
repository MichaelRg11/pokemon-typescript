import styled from 'styled-components';

interface propsCard {
  color: string;
  border: string;
}

export const Card = styled.article<propsCard>`
  width: 100%;
  height: 180px;
  border-radius: 30px;
  border: 1px solid ${({ border }) => border};
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