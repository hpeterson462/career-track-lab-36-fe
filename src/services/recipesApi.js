export const postRecipe = async (recipe) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json'
    },
    body: JSON.stringify(recipe)
  })
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};
