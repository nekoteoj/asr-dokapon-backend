class IndexController {
  get(req, res, next) {
    res.json({
      message: 'The server work properly',
    });
    return next();
  }
}

export default new IndexController();
