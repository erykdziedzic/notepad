import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query notes {
    notes {
      id
      content
      date
    }
  }
`;

export const GET_NOTE = gql`
  query note($id: String) {
    note(id: $id) {
      id
      content
      date
    }
  }
`;
