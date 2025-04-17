const db = require("../db"); // Import kết nối đến database

// Lấy danh sách đơn hàng
async function getOrders(req, res) {
  try {
    const orders = await db("orders").select("*"); // Lấy tất cả đơn hàng
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
}

// Tạo đơn hàng mới
async function createOrder(req, res) {
  const {
    food_id,
    food_name,
    order_quantity,
    table_number,
    order_total,
    user_id,
    order_status = "pending",
  } = req.body;

  // Kiểm tra dữ liệu hợp lệ
  if (
    !food_id ||
    !food_name ||
    order_quantity <= 0 ||
    !order_total ||
    !user_id ||
    !table_number
  ) {
    return res.status(400).json({ message: "Invalid data provided" });
  }

  try {
    // Tạo đơn hàng mới
    await db("orders").insert({
      food_id,
      food_name,
      order_quantity,
      table_number,
      order_total,
      user_id,
      order_status,
    });

    // Cập nhật trạng thái bàn
    await updateTableStatus(table_number); // Cập nhật trạng thái bàn thành 'occupied'

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
}

// Cập nhật trạng thái bàn
async function updateTableStatus(table_number) {
  try {
    await db("table_info")
      .where({ table_number }) // dùng table_number để xác định bàn
      .update({ table_status: "occupied" }); // Cập nhật trạng thái bàn thành 'occupied'
  } catch (error) {
    console.error("Error updating table status:", error);
    throw new Error("Error updating table status");
  }
}

// Lấy thông tin đơn hàng theo ID
async function getOrderById(req, res) {
  const { id } = req.params;

  try {
    const order = await db("orders").where({ order_id: id }).first(); // Sử dụng order_id để tìm kiếm

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Error fetching order" });
  }
}

// Xóa đơn hàng theo ID
async function deleteOrder(req, res) {
  const { id } = req.params;

  try {
    const deletedOrder = await db("orders").where({ order_id: id }).del(); // Sử dụng order_id để xóa

    if (deletedOrder === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Error deleting order" });
  }
}

// Cập nhật đơn hàng theo ID
async function updateOrder(req, res) {
  const { id } = req.params;
  const {
    food_id,
    food_name,
    order_quantity,
    table_number,
    order_total,
    user_id,
    order_status,
  } = req.body;

  // Kiểm tra dữ liệu hợp lệ
  if (
    !food_id ||
    !food_name ||
    order_quantity <= 0 ||
    !order_total ||
    !user_id ||
    !table_number ||
    !order_status
  ) {
    return res.status(400).json({ message: "Invalid data provided" });
  }

  try {
    // Cập nhật thông tin đơn hàng
    const updatedOrder = await db("orders").where({ order_id: id }).update({
      food_id,
      food_name,
      order_quantity,
      table_number,
      order_total,
      user_id,
      order_status,
    });

    // Kiểm tra xem có đơn hàng nào được cập nhật không
    if (updatedOrder === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Error updating order" });
  }
}

module.exports = {
  getOrders,
  createOrder,
  updateTableStatus,
  getOrderById,
  deleteOrder,
  updateOrder,
};
