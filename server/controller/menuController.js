import Menu from '../model/menuModel.js';

export const getMenu = async (req, res, next) => {
  try {
    const menuData = await Menu.find();
    res.status(200).json(menuData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the database' });
  }
}

export const newMenuItem = async (req, res, next) => {
  const { name, description, price } = req.body;

  const itemExit = await Menu.findOne({ name });

  if (itemExit) {
    return res.status(409).json({ message: "Item already exists" });
  }

  const newItem = await Menu.create({
    name: name,
    description: description,
    price: price,
  });

  res.status(201).json(newItem);
}
