import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation addNote($content: String, $date: String) {
    addNote(content: $content, date: $date) {
      id
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($id: String) {
    deleteNote(id: $id) {
      id
    }
  }
`;
