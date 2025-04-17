const express = require("express");
const PromotionController = require("../controllers/promotionController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Promotion
 *   description: API cho quản lý chương trình khuyến mãi
 */

/**
 * @swagger
 * /api/promotions:
 *   get:
 *     summary: Lấy tất cả chương trình khuyến mãi
 *     tags: [Promotion]
 *     responses:
 *       200:
 *         description: Danh sách chương trình khuyến mãi đang hoạt động
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   promo_id:
 *                     type: integer
 *                     description: ID của chương trình khuyến mãi
 *                   promo_code:
 *                     type: string
 *                     description: Mã khuyến mãi
 *                   discount_percentage:
 *                     type: number
 *                     format: float
 *                     description: Tỉ lệ giảm giá của chương trình khuyến mãi
 *                   start_date:
 *                     type: string
 *                     format: date
 *                     description: Ngày bắt đầu của chương trình khuyến mãi
 *                   end_date:
 *                     type: string
 *                     format: date
 *                     description: Ngày kết thúc của chương trình khuyến mãi
 *                   status:
 *                     type: string
 *                     description: Trạng thái của chương trình khuyến mãi
 *                   description:
 *                     type: string
 *                     description: Mô tả chương trình khuyến mãi
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/", PromotionController.getAllPromotions);

/**
 * @swagger
 * /api/promotions:
 *   post:
 *     summary: Tạo một chương trình khuyến mãi mới
 *     tags: [Promotion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               promo_code:
 *                 type: string
 *                 description: Mã khuyến mãi
 *               discount_percentage:
 *                 type: number
 *                 format: float
 *                 description: Tỉ lệ giảm giá
 *               start_date:
 *                 type: string
 *                 format: date
 *                 description: Ngày bắt đầu
 *               end_date:
 *                 type: string
 *                 format: date
 *                 description: Ngày kết thúc
 *               status:
 *                 type: string
 *                 description: Trạng thái của chương trình khuyến mãi
 *               description:
 *                 type: string
 *                 description: Mô tả chương trình khuyến mãi
 *     responses:
 *       201:
 *         description: Tạo chương trình khuyến mãi thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 promo_id:
 *                   type: integer
 *                   description: ID của chương trình khuyến mãi vừa tạo
 *                 message:
 *                   type: string
 *                   example: "Promotion created successfully."
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/", PromotionController.createPromotion);

/**
 * @swagger
 * /api/promotions/{id}:
 *   get:
 *     summary: Lấy chương trình khuyến mãi theo ID
 *     tags: [Promotion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của chương trình khuyến mãi
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết chương trình khuyến mãi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 promo_id:
 *                   type: integer
 *                   description: ID của chương trình khuyến mãi
 *                 promo_code:
 *                   type: string
 *                   description: Mã khuyến mãi
 *                 discount_percentage:
 *                   type: number
 *                   format: float
 *                   description: Tỉ lệ giảm giá
 *                 start_date:
 *                   type: string
 *                   format: date
 *                   description: Ngày bắt đầu
 *                 end_date:
 *                   type: string
 *                   format: date
 *                   description: Ngày kết thúc
 *                 status:
 *                   type: string
 *                   description: Trạng thái của chương trình khuyến mãi
 *                 description:
 *                   type: string
 *                   description: Mô tả chương trình khuyến mãi
 *       404:
 *         description: Không tìm thấy chương trình khuyến mãi
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/:id", PromotionController.getPromotionById);

/**
 * @swagger
 * /api/promotions/{id}:
 *   put:
 *     summary: Cập nhật một chương trình khuyến mãi
 *     tags: [Promotion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của chương trình khuyến mãi
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               promo_code:
 *                 type: string
 *                 description: Mã khuyến mãi
 *               discount_percentage:
 *                 type: number
 *                 format: float
 *                 description: Tỉ lệ giảm giá
 *               start_date:
 *                 type: string
 *                 format: date
 *                 description: Ngày bắt đầu
 *               end_date:
 *                 type: string
 *                 format: date
 *                 description: Ngày kết thúc
 *               status:
 *                 type: string
 *                 description: Trạng thái của chương trình khuyến mãi
 *               description:
 *                 type: string
 *                 description: Mô tả chương trình khuyến mãi
 *     responses:
 *       200:
 *         description: Cập nhật chương trình khuyến mãi thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Promotion updated successfully."
 *       404:
 *         description: Không tìm thấy chương trình khuyến mãi
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/:id", PromotionController.updatePromotion);

/**
 * @swagger
 * /api/promotions/{id}:
 *   delete:
 *     summary: Xóa một chương trình khuyến mãi
 *     tags: [Promotion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của chương trình khuyến mãi
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa chương trình khuyến mãi thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Promotion deleted successfully."
 *       404:
 *         description: Không tìm thấy chương trình khuyến mãi
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/:id", PromotionController.deletePromotion);

/**
 * @swagger
 * /api/promotions/check:
 *   post:
 *     summary: Kiểm tra mã khuyến mãi
 *     tags: [Promotion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               promo_code:
 *                 type: string
 *                 description: Mã khuyến mãi cần kiểm tra
 *     responses:
 *       200:
 *         description: Mã khuyến mãi hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: true
 *                 discount_percentage:
 *                   type: number
 *                   format: float
 *                   description: Tỉ lệ giảm giá của chương trình khuyến mãi
 *       400:
 *         description: Mã khuyến mãi hết hạn hoặc không hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi
 *       404:
 *         description: Không tìm thấy chương trình khuyến mãi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: Thông báo lỗi
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/check", PromotionController.checkPromotion);

module.exports = router;
