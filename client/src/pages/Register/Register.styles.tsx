import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f2f2f2; /* Light grey */
  border: 1px solid #ddd; /* Subtle border */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow */
  margin-top: 10em;
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: #333; /* Dark grey */
  }

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input:disabled,
  select:disabled {
    background-color: #e9e9e9; /* Slightly darker grey for disabled fields */
  }
`;

export const ErrorMessage = styled.p`
  color: #d9534f; /* Red for errors */
  font-size: 0.9rem;
  text-align: center;
`;

export const SubmitButton = styled.button`
  align-self: center; /* Centered button */
  width: auto; /* No full width */
  padding: 0.6em 1.5em;
  font-size: 0.9em;
  color: #fff;
  background-color: #555; /* Medium gray */
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #c8e6c9; /* Lighter green for disabled state */
    cursor: not-allowed;
  }
`;
