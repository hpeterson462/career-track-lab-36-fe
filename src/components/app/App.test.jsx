import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import { getAllRecipes } from '../../services/recipesApi';


jest.mock('../../services/recipesApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders with a list of recipes', () => {
    getAllRecipes.mockResolvedValue([
      {
        id: '1',
        name: 'chocolate mug cake',
        ingredients: ['2 Tbsp almond flour', '2 Tbsp protein powder', '2 Tbsp sugar', '1 Tbsp coconut oil', '1 Tbsp cocoa powder', '1 egg', '1/4 tsp baking soda'],
        directions: 'Mix dry ingredients. Add beaten egg and melted oil. Grease ramekin/mug and fill with an inch of empty space to rise. Microwave on high for 2 minutes.'
      }
    ])
  });
});
