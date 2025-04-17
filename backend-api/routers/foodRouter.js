const express = require("express");
const multer = require("multer");
const {
  getFoods,
  createFood,
  getFoodById,
  deleteFood,
  updateFood,
} = require("../controllers/foodController");

const router = express.Router();

// Cấu hình multer để upload file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Thư mục để lưu file upload
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Tạo tên file duy nhất
  },
});

const upload = multer({ storage });

/**
 * @swagger
 * tags:
 *   name: Food
 *   description: API cho quản lý món ăn
 */

/**
 * @swagger
 * /api/foods:
 *   get:
 *     summary: Lấy danh sách món ăn
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: Danh sách món ăn
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   food_id:
 *                     type: integer
 *                     description: ID của món ăn
 *                   food_name:
 *                     type: string
 *                     description: Tên của món ăn
 *                   food_price:
 *                     type: string
 *                     description: Giá của món ăn
 *                   food_discount:
 *                     type: string
 *                     description: Giảm giá của món ăn
 *                   food_desc:
 *                     type: string
 *                     description: Mô tả của món ăn
 *                   food_status:
 *                     type: string
 *                     description: Trạng thái của món ăn
 *                   food_type:
 *                     type: string
 *                     description: Loại món ăn
 *                   food_src:
 *                     type: string
 *                     description: Đường dẫn đến hình ảnh món ăn
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/", getFoods);

/**
 * @swagger
 * /api/foods/{id}:
 *   get:
 *     summary: Lấy thông tin món ăn theo ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của món ăn
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thông tin món ăn
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 food_id:
 *                   type: integer
 *                   description: ID của món ăn
 *                 food_name:
 *                   type: string
 *                   description: Tên của món ăn
 *                 food_price:
 *                   type: string
 *                   description: Giá của món ăn
 *                 food_discount:
 *                   type: string
 *                   description: Giảm giá của món ăn
 *                 food_desc:
 *                   type: string
 *                   description: Mô tả của món ăn
 *                 food_status:
 *                   type: string
 *                   description: Trạng thái của món ăn
 *                 food_type:
 *                   type: string
 *                   description: Loại món ăn
 *                 food_src:
 *                   type: string
 *                   description: Đường dẫn đến hình ảnh món ăn
 *       404:
 *         description: Món ăn không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/:id", getFoodById);

/**
 * @swagger
 * /api/foods:
 *   post:
 *     summary: Thêm món ăn mới
 *     tags: [Food]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               food_name:
 *                 type: string
 *                 description: Tên của món ăn
 *               food_price:
 *                 type: string
 *                 description: Giá của món ăn
 *               food_discount:
 *                 type: string
 *                 description: Giảm giá của món ăn
 *               food_desc:
 *                 type: string
 *                 description: Mô tả của món ăn
 *               food_status:
 *                 type: string
 *                 description: Trạng thái của món ăn
 *               food_type:
 *                 type: string
 *                 description: Loại món ăn
 *               food_src:
 *                 type: string
 *                 format: binary
 *                 description: Hình ảnh món ăn
 *     responses:
 *       201:
 *         description: Món ăn được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Food created successfully."
 *                 foodId:
 *                   type: integer
 *                   description: ID của món ăn vừa được tạo
 *       400:
 *         description: Món ăn đã tồn tại
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/", upload.single("food_src"), createFood);

/**
 * @swagger
 * /api/foods/{id}:
 *   delete:
 *     summary: Xóa món ăn theo ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của món ăn
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Món ăn đã được xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Food deleted successfully."
 *       404:
 *         description: Món ăn không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/:id", deleteFood);

/**
 * @swagger
 * /api/foods/{id}:
 *   put:
 *     summary: Cập nhật thông tin món ăn theo ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của món ăn
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               food_name:
 *                 type: string
 *                 description: Tên của món ăn
 *               food_price:
 *                 type: string
 *                 description: Giá của món ăn
 *               food_discount:
 *                 type: string
 *                 description: Giảm giá của món ăn
 *               food_desc:
 *                 type: string
 *                 description: Mô tả của món ăn
 *               food_status:
 *                 type: string
 *                 description: Trạng thái của món ăn
 *               food_type:
 *                 type: string
 *                 description: Loại món ăn
 *               food_src:
 *                 type: string
 *                 format: binary
 *                 description: Hình ảnh món ăn
 *     responses:
 *       200:
 *         description: Món ăn đã được cập nhật thành công
 *       404:
 *         description: Món ăn không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/:id", upload.single("food_src"), updateFood);

module.exports = router;
