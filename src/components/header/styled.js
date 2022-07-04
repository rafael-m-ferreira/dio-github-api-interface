import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    background-color: var(--white-color);
    border: 1px solid var(--dark-grey-color);
    border-radius: 8px;
    width: 100%;
    height: 40px;
    margin-right: 8px;
    padding: 8px;
  }

  button {
    background-color: var(--btn-green);
    border-radius: 8px;
    padding: 8px 16px;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
      background-color: var(--btn-green-alpha);
      box-shadow: 3px 2px 10px var(--black-color-alpha);
    }
    span {
      color: var(--grey-color);
      font-weight: bold;
    }
  }
`;
