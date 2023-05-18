const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if (!categoryId) {
      res.status(404).json({ message: 'Category not found with id ' + req.params.id });
      return;
    }
    res.status(200).json(categoryId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve category' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updateCategory[0]) {
      res.status(404).json({ message: 'Invalid category for this id!' });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;

