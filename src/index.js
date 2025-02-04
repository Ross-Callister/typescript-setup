import fastify from "fastify";
import { getRandPokemon } from "./pokemon.js";

const server = fastify();

server.get("/random", (req, reply) => {
  const pokemon = getRandPokemon();
  reply.send(pokemon);
});

server.ready().then(() => {
  console.log("Latias best pokemon");
});

server.listen({
  port: 9151,
});
