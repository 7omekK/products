const dev = {
  HOST: "http://localhost:3001",
};

const prod = {
  HOST: "https://dummyjson.com",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
