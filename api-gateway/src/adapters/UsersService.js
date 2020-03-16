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

  static async fetchUser({ userId }) {
    const body = await axios.get(`${USERS_SERVICE_URI}/users/${userId}`);

    return body.data;
  }

  static async createUserSession({ email, password }) {
    const body = await axios.post(`${USERS_SERVICE_URI}/sessions`, {
      email,
      password
    });

    return body.data;
  }

  static async fetchUserSession({ sessionId }) {
    const body = await axios.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`);

    return body.data;
  }
}
