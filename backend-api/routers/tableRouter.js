const express = require("express");
const router = express.Router();
const TableController = require("../controllers/tableController"); // Adjust path as necessary

/**
 * @swagger
 * tags:
 *   name: Table
 *   description: API cho quản lý bàn
 */

/**
 * @swagger
 * /api/table:
 *   get:
 *     summary: Lấy tất cả bàn
 *     tags: [Table]
 *     responses:
 *       200:
 *         description: Danh sách tất cả bàn
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   table_id:
 *                     type: integer
 *                     description: ID của bàn
 *                   table_number:
 *                     type: string
 *                     description: Số bàn
 *                   table_status:
 *                     type: string
 *                     description: Trạng thái của bàn
 *                   table_capacity:
 *                     type: integer
 *                     description: Sức chứa của bàn
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/", TableController.getAllTables);

/**
 * @swagger
 * /api/table/{id}:
 *   get:
 *     summary: Lấy bàn theo ID
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của bàn
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết bàn
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 table_id:
 *                   type: integer
 *                   description: ID của bàn
 *                 table_number:
 *                   type: string
 *                   description: Số bàn
 *                 table_status:
 *                   type: string
 *                   description: Trạng thái của bàn
 *                 table_capacity:
 *                   type: integer
 *                   description: Sức chứa của bàn
 *       404:
 *         description: Không tìm thấy bàn
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/:id", TableController.getTableById);

/**
 * @swagger
 * /api/table:
 *   post:
 *     summary: Tạo một bàn mới
 *     tags: [Table]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               table_number:
 *                 type: string
 *                 description: Số bàn
 *               table_status:
 *                 type: string
 *                 description: Trạng thái của bàn
 *               table_capacity:
 *                 type: integer
 *                 description: Sức chứa của bàn
 *     responses:
 *       201:
 *         description: Tạo bàn thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 table_id:
 *                   type: integer
 *                   description: ID của bàn vừa tạo
 *                 message:
 *                   type: string
 *                   example: "Table created successfully"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/", TableController.createTable);

/**
 * @swagger
 * /api/table/{id}:
 *   put:
 *     summary: Cập nhật một bàn
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của bàn
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               table_number:
 *                 type: string
 *                 description: Số bàn
 *               table_status:
 *                 type: string
 *                 description: Trạng thái của bàn
 *               table_capacity:
 *                 type: integer
 *                 description: Sức chứa của bàn
 *     responses:
 *       200:
 *         description: Cập nhật bàn thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Table updated successfully"
 *       404:
 *         description: Không tìm thấy bàn
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/:id", TableController.updateTable);

/**
 * @swagger
 * /api/table/{id}:
 *   delete:
 *     summary: Xóa một bàn
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của bàn
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa bàn thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Table deleted successfully"
 *       404:
 *         description: Không tìm thấy bàn
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/:id", TableController.deleteTable);

module.exports = router;
