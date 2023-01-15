import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import type { ServerConfig } from './_config/server-config';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import resolvers from './graphql/resolvers/index';
import { buildSchema } from 'type-graphql';

dotenv.config();

export default async function startServer(
  config: ServerConfig,
): Promise<ApolloServer> {
  const schema = await buildSchema({ resolvers, validate: false })
  const server = new ApolloServer({
    schema,
    plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.SERVER_STAGE === 'prod'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault(),
  ],
  });

  try {
    await server.listen(config.apolloPort);
    console.log(
      `Apollo server started at: http://localhost:${config.apolloPort}/`,
    );
  } catch (error: any) {
    throw new Error(`Unable to start Apollo server: ${error.message}`);
  }
  try {
    await mongoose
      .connect(config.uri)
      .then(() => console.log('Connected to database'));
  } catch (error) {
    console.log(error);
  }

  if (config.verbose) console.log('mongodb started at uri: ', config.uri);
  return server;
};
