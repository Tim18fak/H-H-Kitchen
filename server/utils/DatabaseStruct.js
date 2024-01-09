const mongoose = require("mongoose");

const DishesSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Array, required: true },
  description: { type: String, required: true },
  category: {type:String,required:true}
});
const DishesReview = mongoose.Schema({
  diners: { type: String, required: true },
  dishreview: { type: String, required: true },
  stars: { type: Number, required: true },
});
const HH_KitchenMangement = mongoose.Schema({});
const HHBlog = mongoose.Schema({
    image: {type:Array,required: true},
    title: {type:String,required:true},
    blog: {type:String,required:true},
    timemStamp:{type: Date,required:true},
    quotient: {type:Number,required:true}
})
const AvailableDishes = mongoose.model('Dishes',DishesSchema)
const Blog =  mongoose.model('Blog',HHBlog)
const Review =  mongoose.model('Review',DishesReview)
const KitchenMangement =  mongoose.model('HH_KitchenMangement',HH_KitchenMangement)
module.exports= {AvailableDishes,Blog,KitchenMangement}
