const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http:/localhost/api/categories/
router.get('/', async (req, res) => {
  res.json({message:"Getting all categories"})
  // find all categories
  try{
    const categoriesData = await Category.findAll();
    res.status(200).json(categoriesData);
  } catch(error){
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id):
    if (!categoryData){
      res.status(404).json({message: 'Category not found with id ' + req.params.id});
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/',async(req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json.apply(err):
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {id: req.params.id},
    });
    if (!updateCategory[0]){
      res.status(404).json({message: 'Invalid category for this id!'});
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where:{id: req.params.id},
    });
    if (!deletedCategory){
      res.status(404).json({message:'No category found with this id!' });
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
