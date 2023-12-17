import mongoose from "mongoose";

const CategorieSchema = mongoose.Schema(
  {
    title: String,
    articles: [
      { 
      title: String,
      price: String,
      mainImage: String,
      images: [
        {
          type: String,
        },
      ],
      stock: Number,
      sizeInStock: {
      s: Number,
      m: Number,
      l: Number,
      xl: Number,
      xxl: Number,
    },
    pointureInStock: {
      36: Number,
      37: Number,
      38: Number,
      39: Number,
      40: Number,
      41: Number,
      42: Number,
      43: Number,
      44: Number,
    },
   }
   ],
  },
  { timestamps: true }
);

const Categorie =
  mongoose.models.Categories ||
  mongoose.model("Categories", CategorieSchema);

export default Categorie;