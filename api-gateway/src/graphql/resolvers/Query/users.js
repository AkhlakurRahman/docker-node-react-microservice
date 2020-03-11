import UsersService from '#root/adapters/UsersService';

const usersResolver = async () => {
  return await UsersService.getAllUsers();
};

export default usersResolver;
