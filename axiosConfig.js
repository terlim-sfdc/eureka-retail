export const apiURL = `https://eureka-mobile-demo.herokuapp.com/customers`;

export const encryptedAuth = "Basic YWRtaW46ZXVyZWth";

export const apiCallHeader = {
  headers: {
    // basic auth, username: admin, password: eureka
    Authorization: encryptedAuth,
  },
};
