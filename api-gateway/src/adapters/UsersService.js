import axios from 'axios';

const USERS_SERVICE_URI = 'http://users-service:7101';

export default class UsersService {
  static async createUser({ email, password }) {
    const body = await axios.post(`${USERS_SERVICE_URI}/user`, {
      email,
      password
    });

    return body.data;
  }
}
