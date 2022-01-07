const Carousels = require("../models/Carousel");

exports.getSlidesByNumber = (req, res) => {
    const { slides } = req.params;

    res.status(200).json({ Carousels });
    // if (productId) {
    //   Product.findOne({ _id: productId }).exec((error, product) => {
    //     if (error) return res.status(400).json({ error });
    //     if (product) {
    //       //res.status(200).json({ product });
    //     }
    //   });
    // } else {
    //   return res.status(400).json({ error: "Params required" });
    // }
  };

