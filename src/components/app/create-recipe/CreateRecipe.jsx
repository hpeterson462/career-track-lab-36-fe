import React from 'react';

const CreateRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    if (target.ingredients === 'ingredients') setIngredients(target.value);
    if (target.directions === 'directions') setDirections(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="recipe-name">
        Recipe
      </label>

      <input
        id="recipe-name"
        type="text"
        name="name"
        value={name}
        placeholder="Recipe Name"
        onChange={handleChange}
      />

      <textarea
        id="recipe-ingredients"
        name="ingredients"
        value={ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
      ></textarea>

      <textarea
        id="recipe-directions"
        name="directions"
        value={directions}
        placeholder="Directions"
        onChange={handleChange}
      ></textarea>

      <button>Create Recipe</button>

    </form>
  );
};

export default CreateRecipe;
