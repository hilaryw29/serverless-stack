const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "scribble-notes-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://s5h7mhk9mb.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_gon3uZ0Xc",
      APP_CLIENT_ID: "7mkpvvq0aeohj90n7lflujft93",
      IDENTITY_POOL_ID: "us-east-2:8a5ba4f0-5b6b-454e-a3d9-b100a415bc4f",
    },
  };
  
  export default config;