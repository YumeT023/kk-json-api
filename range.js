module.exports = (req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Content-Range');
  res.header('Content-Range', 'transactions 0-100/100');
  next();
}
