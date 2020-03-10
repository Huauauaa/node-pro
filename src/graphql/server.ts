import express, { Application } from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';

// Hardcoded data
const customers = [
  { id: 1, name: 'John Doe', email: 'jdoe@gmail.com', age: 35 },
  { id: 2, name: 'Steve Smith', email: 'steve@gmail.com', age: 25 },
  { id: 4, name: 'Sara Williams', email: 'sara@gmail.com', age: 32 }
];

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parentValue, args) => {
        return customers.find((customer) => customer.id === args.id);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      args: {
        name: { type: GraphQLString }
      },
      resolve: (parentValue, args) =>
        customers.filter((customer) =>
          customer.name.toLocaleLowerCase().includes(args.name.toLocaleLowerCase())
        )
    }
  }
});
const schema = new GraphQLSchema({
  query: RootQuery
});

const app: Application = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'));
