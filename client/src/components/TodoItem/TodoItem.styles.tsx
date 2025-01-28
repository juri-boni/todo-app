import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
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
