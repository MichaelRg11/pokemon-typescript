import styled from 'styled-components';
import { fadeIn } from '../../assets/style';

interface propsCard {
  color: string;
  border: string;
}

export const Card = styled.article<propsCard>`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border: 1px solid ${({ border }) => border};
  padding: 20px 20px;
  background:  ${({ color }) => color};
  cursor: pointer;
  ${fadeIn({ time: '1.2s' })}
`

interface propsTitle {
  color: string;
}

export const Title = styled.h4<propsTitle>`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ color }) => color};
`

export const P = styled.p`
  margin-left: 10px;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  -webkit-overflow: hidden;

`

interface propsButton {
  color: string;
}

export const Button = styled.button<propsButton>`
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 18px;
  margin: 10px 5px 0 10px;
  background-color: ${({ color }) => color};
`

export const Img = styled.img`
  height: 120px;
  width: 140px;
  ${fadeIn({ time: '0.8s' })}
`