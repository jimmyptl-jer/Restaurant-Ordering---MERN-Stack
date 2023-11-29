import React, { useState } from 'react';
import './AddmenuItem.css';

const url = 'http://localhost:5001/menu';

const AddMealItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await postData.json();
      console.log(data);

      if (!postData.ok) {
        throw new Error('Failed to post data');
      }
      // Data was successfully posted to the server
      alert('Data posted successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Item Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Item Description</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <label>Item Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />

        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default AddMealItem;
