import {ApolloServer} from 'apollo-server';

import schema from './schema';

import Extension from './Extension';

const server = new ApolloServer({
  schema,
  extensions: [() => new Extension()],
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
