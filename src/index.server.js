const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const PORT = 3600;

//routes
const carouselRoutes = require("./routes/carousel");
app.use("/api", carouselRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
