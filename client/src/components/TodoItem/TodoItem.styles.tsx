import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TodoItemContainer = styled.div<{ deleted: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
  text-decoration: ${({ deleted }) => (deleted ? "line-through" : "none")};
`;

export const TodoText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

export const TodoElement = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const DeleteButton = styled.button<{ deleted: boolean }>`
  /* background-color: #622517; */
  background: ${({ deleted }) => (deleted ? "#374872" : "#622517")};
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #374872;
  }
`;
