const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const { ApolloServer, gql } = require('apollo-server');

function generateNotes(number = 3) {
  return Array(number)
    .fill(0)
    .map(() => ({
      id: uuidv4(),
      content: faker.lorem.text(),
      date: new Date(faker.date.recent()).toISOString(),
    }));
}

const notes = [...generateNotes()];

const typeDefs = gql`
  type Note {
    id: ID
    content: String
    date: String
  }

  type Query {
    notes: [Note]
    note(id: String): Note
  }

  type Mutation {
    addNote(content: String, date: String): Note
  }
`;

const resolvers = {
  Query: {
    notes: () => notes,
    note: (obj, args) => notes.find(({ id }) => id === args.id),
  },

  Mutation: {
    addNote: (obj, { content, date }) => {
      const newNote = {
        id: uuidv4(),
        content,
        date: new Date(date).toISOString(),
      };
      notes.push(newNote);
      return newNote;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
