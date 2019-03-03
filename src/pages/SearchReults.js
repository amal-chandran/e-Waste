import gql from "graphql-tag";


export const GET_ALL_DEVICES = gql`
  query {
    allDevice {
      id
      name
    }
  }
`;
export const GET_ALL_COMPONENTS = gql`
  query {
    allComponent {
      id
      name
    }
  }
`;


