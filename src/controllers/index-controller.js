class IndexController {
  get(req, res, next) {
    res.json({
      message: 'Hello World',
    });
    return next();
  }
}

export default new IndexController();
