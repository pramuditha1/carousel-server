const Carousels = require("../models/Carousel");

exports.getSlidesByNumber = (req, res) => {
    const { slides } = req.params;
    const imageSliderData = [];

    if (slides) {
      if (slides <= 10) {
        //loop images array and get get images from the first index to requesting number
        for(var i=0; i<Carousels.length; i++){
          if(i+1 <= slides) {
            imageSliderData.push(Carousels[i]);
          }
        }
        res.status(200).json({ imageSliderData });
      } else {
        return res.status(400).json({ error: "You can retrieve maximum of 10 images" });
      }
    }
  };

