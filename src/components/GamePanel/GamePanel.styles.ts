import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: #333;
  font-size: 30px;
  text-align: center;
  overflow: auto;
  max-height: 500px;
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  border-bottom: 1px solid #333;
  padding: 10px 20px;
  width: 100%;
  max-width: 576px;
  margin: 50px auto;
  font-size: 24px;
  text-align: center;
`;

export const Button = styled.button`
  max-width: 200px;
  margin-right: auto;
  margin-left: auto;
`;

export const MenuButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
