export const rateRestaurant = async (req, res, models) => {
  const { user_id, res_id, amount } = req.body;
  console.log(user_id, res_id, amount);
  try {
    await models.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    });
    res.status(201).json({ message: "Rate successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fail to rate restaurant", detail: err });
  }
};

export const getRatesByUser = async (req, res, models) => {
  const { userId } = req.params;
  try {
    const rates = await models.rate_res.findAll({ where: { user_id: userId } });
    res.status(200).json(rates);
  } catch (err) {
    res.status(500).json({ error: "Fail to get rates by user", detail: err });
  }
};

export const getRatesByRestaurant = async (req, res, models) => {
  const { resId } = req.params;
  try {
    const rates = await models.rate_res.findAll({ where: { res_id: resId } });
    res.status(200).json(rates);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Fail to get rates by restaurant", detail: err });
  }
};
