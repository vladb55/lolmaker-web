import styled from 'styled-components';

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.32);
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  width: 100%;
  height: 100%;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 576px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  & button {
    width: 100%;
    margin-bottom: 10px;
  }
`;
