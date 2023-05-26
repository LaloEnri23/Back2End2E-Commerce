// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const seedProductTags = require('../seeds/product-tag-seeds');

// Products belongsTo Category
  Product.belongsToMany(Category, {
    foreignKey: 'category_id',
    onDelete: 'cascade'
  });  
  

// Categories have many Products
    //might need to add a 's' on product if it doesnt work!
  Category.hasMany(Product,{
    foreignKey: 'category_id'

  });
// Products belongToMany Tags (through ProductTag)
  ProductTag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
  });
// Tags belongToMany Products (through ProductTag)
  // Tag.belongsToMany(Product,{through: ProductTag,
  // foreignKey: 'tag_id'});
  

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
