import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import fakeData from "./fakeData/index.js";

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
    type Folder {
      id: String,
      name: String,
      author: Author
    }

    type Author {
      id: String,
      name: String
    }

    type Query {
      folders: [Folder]
    }
`;
const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
    },
  },
  Folder: {
    author: (parent, args) => {
      console.log({ parent, args })
      const authorId = parent.authorId
      return fakeData.authors.find(author => author.id === authorId)
      // return { name: "QuocAnh", id: 1 }
    },
  },
};

// schema
// resolver
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`Server ready att http://localhost:4000`);
