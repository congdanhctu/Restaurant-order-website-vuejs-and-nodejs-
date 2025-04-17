const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger"); // Swagger cấu hình

// Nhập các router
const authRouter = require("./routers/authRouter");
const foodRouter = require("./routers/foodRouter");
const userRouter = require("./routers/userRouter");
const promotionRouter = require("./routers/promotionRouter");
const tableRouter = require("./routers/tableRouter");
const orderRouter = require("./routers/orderRouter");

const app = express();

// Cấu hình CORS
app.use(
  cors({
    origin: "http://localhost:5173", // URL frontend
    credentials: true,
  })
);

// Middleware để parse JSON
app.use(express.json());

// Cấu hình session
app.use(
  session({
    secret: "danh", // Thay đổi secret trong môi trường production
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware để phục vụ tệp tĩnh
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Đường dẫn cho Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sử dụng các router
app.use("/api/auth", authRouter);
app.use("/api/foods", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/promotions", promotionRouter);
app.use("/api/table", tableRouter);
app.use("/api/order", orderRouter);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
