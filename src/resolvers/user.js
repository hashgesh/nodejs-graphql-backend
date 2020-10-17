export default {
    Query: { 
      users: async (parent,args,{models}) => {
        return await models.User.findAll();
      },

      user: async (parent,{id},{models}) => {
        return await models.User.findByPk(id);
      },

      me: (parent, args, {models, me}) => {
        return models.User.findByPk(me.id);
      }
   },



   User:{
     messages: async (user, args, { models }) => {
        return await models.Message.findByPk({
          where:{
            userId: user.id,
          }
        })
     }
   },

  };