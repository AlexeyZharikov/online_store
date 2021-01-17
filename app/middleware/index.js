const middleware = (req, res, next) => {
  const { id } = req.query;
  if (id) {
    return next();
  }
  return res.status(400).json({
    msg: 'error miissing id (no req parametr)',
  });
};

module.exports = middleware;
