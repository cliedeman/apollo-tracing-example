import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const wait = (seconds: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    field1: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: async (parent: any, args: any, context: any, info: any) => {
        console.log(`Resolving field1, Context: ${context.field}`);
        await wait(2);
        console.log(`Resolved field1, Context: ${context.field}`);
        return 'field1';
      },
    },
    field2: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: async (parent: any, args: any, context: any, info: any) => {
        console.log(`Resolving field2, Context: ${context.field}`);
        await wait(0);
        console.log(`Resolved field2, Context: ${context.field}`);
        return 'field2';
      },
    },
    field3: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: async (parent: any, args: any, context: any, info: any) => {
        console.log(`Resolving field3, Context: ${context.field}`);
        await wait(1);
        console.log(`Resolved field3, Context: ${context.field}`);
        return 'field3';
      },
    },
  }),
});

export default new GraphQLSchema({
  query,
});
