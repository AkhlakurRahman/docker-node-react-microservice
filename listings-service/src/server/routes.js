const setupRoutes = app => {
  app.get('/listings', (req, res, next) => {
    return res.json({ message: 'Yes, working' });
  });
};

export default setupRoutes;
