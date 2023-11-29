import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});


const Menu = mongoose.model('Menu', menuSchema);
export default Menu;
