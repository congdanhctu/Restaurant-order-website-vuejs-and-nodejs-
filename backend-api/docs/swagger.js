const swaggerJsdoc = require("swagger-jsdoc");

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Node.js Express API Documentation",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express and documented with Swagger",
  },
  servers: [
    {
      url: "http://localhost:5000/",
      description: "Development server",
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Cập nhật đường dẫn tới các tệp chứa OpenAPI definitions
  apis: ["./routers/*.js"], // Đảm bảo rằng đường dẫn đúng với vị trí của tệp router
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
