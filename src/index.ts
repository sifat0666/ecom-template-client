import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { __prod__ } from './constants';
import { UserResolver } from './resolvers/user';
import session from 'express-session';
import MongoStore from 'connect-mongo'
import cors from 'cors'
import { ProductResolver } from './resolvers/product';
import { createConnection } from 'typeorm';


(async () => {
    

    await createConnection()



//   const orm = await MikroORM.init(ormConfig);
//   console.log(orm.em);


  const server = new ApolloServer({ 
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, ProductResolver]
    }),

    context: ({req, res}) => ({req, res}) ,
  
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({})
    ]

  });


  await server.start();
  const app = express();

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))

  app.use(
    session({
      name: 'qid',
      store: MongoStore.create({ 
        mongoUrl: 'mongodb+srv://sifat:123@cluster0.uiyay.mongodb.net/ecom?retryWrites=true&w=majority' 
      }),
      cookie:{
          maxAge: 1000 * 60 * 60 * 24 * 365,
          httpOnly: true,
          secure: __prod__,
          sameSite: "lax"
      },
      saveUninitialized: false,
      secret: 'keyboard cat asdfawefadsfav vr w dadf',
      resave: false,
    })
  )

  // app.use(express.json({limit: '50mb'}))
  // app.use(express.urlencoded({limit: '50mb', extended: true}))

  // app.get('/api/upload', (req, res) => {
  //   try {
  //     const fileStr = req.body.data
  //     console.log(fileStr)
      
  //   } catch (error) {
  //     console.error(error)
  //   }
  // })



  server.applyMiddleware({
     app,
     cors: false
  });

  app.listen(process.env.PORT,()=> console.log(`server started on port ${process.env.PORT}`))
  
})().catch(err=> console.log(err))

