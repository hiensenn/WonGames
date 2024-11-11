/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
       
          console.log("Rodando no servidor");
          
         
          ctx.body = { message: "finalizado no client" }; // nesta versão se usa ctx.body = {message : "..."}
          
       
      },
  })
);