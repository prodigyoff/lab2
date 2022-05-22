import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Cart extends ExtendedModel {}

Cart.init(
  {
  },
  {
    sequelize: db,
    modelName: 'cart'
  }
);

export default Cart;
