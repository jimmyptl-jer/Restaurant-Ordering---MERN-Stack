import Post from '../model/postModel.js';

export const getPost = async (req, res, next) => {
  try {
    const postData = await Post.find();
    res.status(200).json([postData]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the database' });
  }
}

export const newPost = async (req, res, next) => {
  const { title, description,author} = req.body;

  const itemExit = await Post.findOne({ title });

  if (itemExit) {
    return res.status(409).json({ message: "Post already exists" });
  }

  const newItem = await Post.create({
    title: title,
    description: description,
    author: author
  });

  res.status(201).json(newItem);
}
