import { v4 as uuidv4 } from "uuid";

export const createOrder = async (req, res, models) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;

  if (!user_id || !food_id) {
    return res.status(400).json({ error: "vui lòng nhập đủ thông tin" });
  }

  const subIds =
    Array.isArray(arr_sub_id) && arr_sub_id.length > 0
      ? arr_sub_id.join(",")
      : null;

  try {
    const order = await models.orders.create({
      user_id,
      food_id,
      amount: amount || 1,
      code: code || uuidv4().slice(0, 8).toUpperCase(),
      arr_sub_id: subIds,
    });
    res.status(200).json({ message: "đặt món thành công", data: order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fail to create order", detail: err });
  }
};
