import styled, { keyframes } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const letters = keyframes`
  from {
    padding: 0 12px;
  }
  to {
    padding: 0 5px;
  }
`

export const Title = styled.div`
  color: #333;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  span {
    display: inline-block;
    text-align: center;
    padding: 0 5px;
    animation: ${letters} 2s ease-in-out;
  }
  span:hover {
    transform: rotate(90deg);
  }
`;
