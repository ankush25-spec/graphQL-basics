import { users } from "./data.js";

export const resolvers = {
  Query: {
    users: () => users,

    user: (_, args) => {
      return users.find((user) => user.id === args.id);
    }
  },

  Mutation: {
    addUser: (_, {input}) => {
      const newUser = {
        id: String(users.length + 1),
        name: input.name,
        email: input.email
      };

      users.push(newUser);

      return newUser;
    },
    // deleteUser: (_, args) => {
    //   const user = users.find((user) => user.id === args.id);

    //   users.filter((user) => user.id !== args.id)

    //   return user
    // }
    deleteUser: (_, args) => {
      const index = users.findIndex((user) => user.id === args.id);

      if (index === -1) {
        return null;
      }

      const [deletedUser] = users.splice(index, 1);

      return deletedUser;
    }
  },
};