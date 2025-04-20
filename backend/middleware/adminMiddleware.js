export const adminMiddleware = (req, res, next) => {
    if (req.user?.email === "admin.furniqo2025@gmail.com") {
      next();
    } else {
      res.status(403).json({ message: "Access denied. Admins only." });
    }
  };
  