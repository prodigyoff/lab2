import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Credentials extends ExtendedModel {}

Credentials.init(
  {
  },
  {
    sequelize: db,
    modelName: 'credentials'
  }
);

export default Credentials;
