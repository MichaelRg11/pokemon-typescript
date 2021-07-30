import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.527);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 600px;
  background-color: #fff;
  border-radius: 10px
`

export const ModalBody = styled.div`
  padding: 10px
`