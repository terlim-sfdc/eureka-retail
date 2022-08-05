export const apiURL = `https://eureka-fins-admin.herokuapp.com/add-request`;

export const encryptedAuth = "Basic YWRtaW46ZXVyZWth";

export const apiCallHeader = {
  headers: {
    // basic auth, username: admin, password: eureka
    Authorization: encryptedAuth,
  },
};
