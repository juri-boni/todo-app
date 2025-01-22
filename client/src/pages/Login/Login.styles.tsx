import styled from "styled-components";

export const LoginFormContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f2f2f2; */
  /* Light gray background */
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20em; /* Adjusted width for better proportions */
  padding: 2em;
  border-radius: 0.5em;
  background-color: #e0e0e0; /* Light gray */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5em;
  font-size: 0.9em;
  color: #333; /* Dark gray for contrast */
`;

export const FormInput = styled.input`
  padding: 0.7em;
  border: 1px solid #ccc; /* Light border */
  border-radius: 0.3em;
  font-size: 0.9em;
  outline: none;

  &:focus {
    border-color: #888; /* Slightly darker on focus */
  }
`;

export const FormButton = styled.button`
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

  &:hover {
    background-color: #333; /* Dark gray on hover */
  }

  &:disabled {
    background-color: #bbb; /* Disabled gray */
    cursor: not-allowed;
  }
`;
