import styled from "styled-components";
import {
  getColor,
  getSpacing,
  getFont,
  getSize,
} from "../../utils/themeHelpers";

export const FormContainer = styled.div`
  flex: 1;
  margin-left: ${getSpacing("margin.large")};
  padding: ${getSpacing("padding.xxlarge")};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing("margin.large")};
  padding: ${getSpacing("padding.medium")};
  /* max-width: 600px;  */
  width: 100%;
`;

export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #888123; */
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing("margin.small")};

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  input,
  select,
  textarea {
    padding: 8px;
    border: 1px solid ${getColor("border.default")};
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const TitleFormSection = styled.div`
  display: flex;
  width: 65%;

  flex-direction: row;
  align-items: center;
  gap: ${getSpacing("gap.large")};

  label {
    font-size: ${getFont("fontSizes.small")};
    /* color: red; */
    /* margin-right: 25px; */
    font-weight: bold;
    /* margin-bottom: 20px; */
  }

  input {
    height: 3.2rem;
    width: 80%;
    padding: 4px;
    border: 1px solid ${getColor("border.secondary")};
    border-radius: 4px;
    font-size: ${getFont("fontSizes.small")};
  }
`;

export const PriorityFormSection = styled.div`
  display: flex;
  width: 25%;

  flex-direction: row;
  align-items: center;
  gap: ${getSpacing("gap.small")};

  label {
    font-size: ${getFont("fontSizes.small")};
    /* font-weight: bold; */
    /* margin-bottom: 20px; */
  }

  select {
    height: 3.2rem;
    width: 75%;
    padding: 4px;
    border: 1px solid ${getColor("border.secondary")};
    border-radius: 4px;
    font-size: ${getFont("fontSizes.small")};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${getSpacing("margin.large")};
  display: flex;
  justify-content: flex-end;
`;
