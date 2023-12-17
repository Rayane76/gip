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
      point36: Number,
      point37: Number,
      point38: Number,
      point39: Number,
      point40: Number,
      point41: Number,
      point42: Number,
      point43: Number,
      point44: Number,
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