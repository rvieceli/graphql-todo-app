import { gql } from 'apollo-boost';

export const GET_TODOS = gql`
  {
    todos {
      id
      description
      completed
      priority
      createdAt
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($description: String!) {
    createTodo(description: $description) {
      id
      description
      completed
      priority
      createdAt
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: Int!, $description: String, $priority: Int) {
    updateTodo(id: $id, description: $description, priority: $priority) {
      id
      description
      priority
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation completeTodo($id: Int!) {
    completeTodo(id: $id) {
      id
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id)
  }
`;
