const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController"); // Import các hàm từ UserProfileController
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API cho quản lý người dùng
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Lấy danh sách người dùng có user_type = 1
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user_id:
 *                     type: integer
 *                     description: ID của người dùng
 *                   name:
 *                     type: string
 *                     description: Tên người dùng
 *                   email:
 *                     type: string
 *                     description: Email người dùng
 *                   user_type:
 *                     type: integer
 *                     description: Loại người dùng (1 = Regular User)
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/", getAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Lấy thông tin người dùng theo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của người dùng
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thông tin người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: ID của người dùng
 *                 name:
 *                   type: string
 *                   description: Tên người dùng
 *                 email:
 *                   type: string
 *                   description: Email người dùng
 *                 user_type:
 *                   type: integer
 *                   description: Loại người dùng
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng theo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của người dùng
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: Tên người dùng
 *               user_email:
 *                 type: string
 *                 description: Email người dùng
 *               user_phone:
 *                 type: string
 *                 description: Số điện thoại của người dùng
 *               user_password:
 *                 type: string
 *                 description: Mật khẩu của người dùng
 *               user_birth:
 *                 type: string
 *                 format: date
 *                 description: Ngày sinh của người dùng
 *               user_gender:
 *                 type: string
 *                 description: Giới tính của người dùng
 *               user_type:
 *                 type: integer
 *                 description: Loại người dùng (1 = Regular User)
 *     responses:
 *       200:
 *         description: Cập nhật người dùng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User updated successfully"
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Xóa người dùng theo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của người dùng
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa người dùng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/:id", deleteUser);

module.exports = router;
