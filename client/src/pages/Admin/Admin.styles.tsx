import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  padding: 0, 10em, 0, 10em;
`;

export const Sidebar = styled.aside`
  width: 18%;
  background-color: #f4f4f4;
  padding: 2rem;
  border-right: 1px solid #ddd;

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      cursor: pointer;
    }
  }
`;

export const UsersTable = styled.div`
  flex: 1;
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }

    th {
      background-color: #f4f4f4;
    }
  }
`;
