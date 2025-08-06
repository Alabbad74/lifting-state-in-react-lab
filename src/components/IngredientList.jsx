// src/components/IngredientList.jsx
import { availableIngredients } from '../App';

const IngredientList = (props) => {
  return (
    <ul>
      {availableIngredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
        </li>
      ))}
    </ul>
    
  );
};

export default IngredientList;