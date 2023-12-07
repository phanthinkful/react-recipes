import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const defaultData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  };
  
  const [data, setData] = useState(defaultData);
  
  const handleChange = ({target}) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(data);
    setData(defaultData);
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                placeholder='Name'
                type='text'
                id='name'
                name='name'
                value={data.name}
                onChange={handleChange}
                />
            </td>
            <td>
              <input
                placeholder='Cuisine'
                type='text'
                id='cuisine'
                name='cuisine'
                value={data.cuisine}
                onChange={handleChange}
                />
            </td>
            <td>
              <input
                placeholder='Photo'
                type='text'
                id='photo'
                name='photo'
                value={data.photo}
                onChange={handleChange}
                />
            </td>
            <td>
              <textarea
                placeholder='Ingredients'
                id='ingredients'
                name='ingredients'
                value={data.ingredients}
                onChange={handleChange}
                />
            </td>
            <td>
              <textarea
                placeholder='Preparation'
                id='preparation'
                name='preparation'
                value={data.preparation}
                onChange={handleChange}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
