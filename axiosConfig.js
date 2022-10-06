export const apiURL = `https://eureka-mobile-demo.herokuapp.com/customers`;

export const receiptSubmitURL = `https://eureka-nodemailer.herokuapp.com/send-email-sendgrid`;

export const encryptedAuth = "Basic YWRtaW46ZXVyZWth";

export const apiCallHeader = {
  headers: {
    // basic auth, username: admin, password: eureka
    Authorization: encryptedAuth,
  },
};

// Interaction Studio API

export const recommendationRequestConfig = {
  method: "post",
  url: "https://gpinto1462654.australia-3.evergage.com/api2/authevent/hikine",
  headers: {
    Authorization:
      "Basic QUFDRUE5M0UtNTlCRC00RjEzLUFGNDAtRDJBNEQzMTc3NkVBOnpWaEd1QWs3X2NqQkM4bFItUkdTU3E5V0ZwX2hNcDZLa2tBVnpieV9HVlk=",
    "Content-Type": "application/json",
    Cookie:
      "AWSALB=LL1o1D8F8ZoIeDysTif9HEvhpUF+W5aCIH2pCZVKApn0aJv62XZP/GHGsgHq8xNrGnVoSVcg1pSthNoWTFfdocrMSGQ8g10RShuz0Upibld+DNIrBh1JEmTqtpic; AWSALBCORS=LL1o1D8F8ZoIeDysTif9HEvhpUF+W5aCIH2pCZVKApn0aJv62XZP/GHGsgHq8xNrGnVoSVcg1pSthNoWTFfdocrMSGQ8g10RShuz0Upibld+DNIrBh1JEmTqtpic",
  },
  // data object to be provided in customer 
  data: null,
};
