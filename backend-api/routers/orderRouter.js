const express = require("express");
const {
  getOrders,
  createOrder,
  getOrderById,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API cho quản lý đơn hàng
 */

/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: Lấy danh sách đơn hàng
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Danh sách đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_id:
 *                     type: integer
 *                     description: ID của đơn hàng
 *                   food_id:
 *                     type: integer
 *                     description: ID của món ăn
 *                   food_name:
 *                     type: string
 *                     description: Tên món ăn
 *                   order_quantity:
 *                     type: integer
 *                     description: Số lượng đơn hàng
 *                   table_number:
 *                     type: string
 *                     description: Số bàn
 *                   order_total:
 *                     type: number
 *                     format: float
 *                     description: Tổng tiền của đơn hàng
 *                   user_id:
 *                     type: integer
 *                     description: ID của người dùng
 *                   order_status:
 *                     type: string
 *                     description: Trạng thái đơn hàng
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/", getOrders);

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Tạo đơn hàng mới
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               food_id:
 *                 type: integer
 *                 description: ID của món ăn
 *               food_name:
 *                 type: string
 *                 description: Tên món ăn
 *               order_quantity:
 *                 type: integer
 *                 description: Số lượng đơn hàng
 *               table_number:
 *                 type: string
 *                 description: Số bàn
 *               order_total:
 *                 type: number
 *                 format: float
 *                 description: Tổng tiền của đơn hàng
 *               user_id:
 *                 type: integer
 *                 description: ID của người dùng
 *               order_status:
 *                 type: string
 *                 description: Trạng thái đơn hàng (mặc định là 'pending')
 *     responses:
 *       201:
 *         description: Đơn hàng được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order created successfully."
 *                 orderId:
 *                   type: integer
 *                   description: ID của đơn hàng vừa được tạo
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/", createOrder);

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Lấy thông tin đơn hàng theo ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thông tin đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: integer
 *                   description: ID của đơn hàng
 *                 food_id:
 *                   type: integer
 *                   description: ID của món ăn
 *                 food_name:
 *                   type: string
 *                   description: Tên món ăn
 *                 order_quantity:
 *                   type: integer
 *                   description: Số lượng đơn hàng
 *                 table_number:
 *                   type: string
 *                   description: Số bàn
 *                 order_total:
 *                   type: number
 *                   format: float
 *                   description: Tổng tiền của đơn hàng
 *                 user_id:
 *                   type: integer
 *                   description: ID của người dùng
 *                 order_status:
 *                   type: string
 *                   description: Trạng thái đơn hàng
 *       404:
 *         description: Đơn hàng không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/:id", getOrderById);

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: Xóa đơn hàng theo ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Đơn hàng đã được xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order deleted successfully."
 *       404:
 *         description: Đơn hàng không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/:id", deleteOrder);

/**
 * @swagger
 * /api/order/{id}:
 *   put:
 *     summary: Cập nhật thông tin đơn hàng
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của đơn hàng
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               food_id:
 *                 type: integer
 *                 description: ID của món ăn
 *               food_name:
 *                 type: string
 *                 description: Tên món ăn
 *               order_quantity:
 *                 type: integer
 *                 description: Số lượng đơn hàng
 *               table_number:
 *                 type: string
 *                 description: Số bàn
 *               order_total:
 *                 type: number
 *                 format: float
 *                 description: Tổng tiền của đơn hàng
 *               user_id:
 *                 type: integer
 *                 description: ID của người dùng
 *               order_status:
 *                 type: string
 *                 description: Trạng thái đơn hàng
 *     responses:
 *       200:
 *         description: Đơn hàng đã được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order updated successfully"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Đơn hàng không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/:id", updateOrder);

module.exports = router;
