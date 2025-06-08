export const likeRestaurant = async (req, res, models) => {
  const { user_id, res_id } = req.body;
  console.log(user_id, res_id);
  try {
    await models.like_res.create({ user_id, res_id, date_like: new Date() });
    res.status(201).json({ message: "Like successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fail to like restaurant", detail: err });
  }
};

export const unlikeRestaurant = async (req, res, models) => {
  console.log("BODY RECEIVED:", req.body);
  const { user_id, res_id } = req.body;
  console.log(user_id, res_id);
  try {
    await models.like_res.destroy({ where: { user_id, res_id } });
    res.status(200).json({ message: "Unlike successfully" });
  } catch (err) {
    res.status(500).json({ error: "Fail to unlike restaurant", detail: err });
  }
};

export const getLikesByUser = async (req, res, models) => {
  const { userId } = req.params;
  try {
    const likes = await models.like_res.findAll({ where: { user_id: userId } });
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json({ error: "Fail to get likes by user", detail: err });
  }
};

export const getLikesByRestaurant = async (req, res, models) => {
  const { resId } = req.params;
  try {
    const likes = await models.like_res.findAll({ where: { res_id: resId } });
    res.status(200).json(likes);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Fail to get likes by restaurant", detail: err });
  }
};
