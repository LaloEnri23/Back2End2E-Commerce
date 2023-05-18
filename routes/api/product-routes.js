const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const productId = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!productId) {
      res.status(404).json({ message: 'Product not found with id ' + req.params.id });
      return;
    }
    res.status(200).json(productId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tagId) => {
        return { product_id: productData.id, tag_id: tagId };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const [updatedRowCount] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowCount === 0) {
      res.status(404).json({ message: 'Product not found with id ' + req.params.id });
      return;
    }
    if (req.body.tagIds && req.body.tagIds.length) {
      await ProductTag.destroy({ where: { product_id: req.params.id } });
      const productTagIdArr = req.body.tagIds.map((tagId) => {
        return { product_id: req.params.id, tag_id: tagId };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// delete product
router.delete('/:id', async (req, res) => {
  try {
    const deletedRowCount = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowCount === 0) {
      res.status(404).json({ message: 'Product not found with id ' + req.params.id });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;

