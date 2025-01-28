import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  height: 6rem;

  /* @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  } */
`;

export const Input = styled.input`
  flex: 1;
  width: 90%;
  padding: 0.5rem;
  font-size: 1.4rem;
  border: 2px solid #333;
  border-radius: 4px 0 0 4px;
  outline: none;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  width: 8rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// export const CreateTodoButton = styled.button`
//   background-color: #627187;
//   color: #fff;
//   border: none;
//   padding: 0.5rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #6271f7;
//   }
// `;
