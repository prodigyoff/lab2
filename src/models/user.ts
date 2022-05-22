import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class User extends ExtendedModel {}

User.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: 'user'
  }
);

export default User;
