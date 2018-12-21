module.exports = (req, res) => {
  const {des} = req.body;

  if (!des) {
    return res.status(400).send('des require');
  }

  res.status(200).json({
    message: 'success',
    username: req.user.username,
    des: des
  });
};