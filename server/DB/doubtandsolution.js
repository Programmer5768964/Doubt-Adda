const mongoose = require("mongoose");
const DoubtandSolutionSchema = new mongoose.Schema({
  doubt: { type: String, required: true },
  solution: [
    {
      ans: { type: String ,default:"NA"},
    },
  ],
  handRaise: Number,
});

const DoubtModel = mongoose.model("bugsandsolutions", DoubtandSolutionSchema);
module.exports = DoubtModel;
