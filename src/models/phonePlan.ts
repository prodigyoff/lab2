import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class PhonePlan extends ExtendedModel {
  public image!: string;
  public description!: string;
  public price!: number;
}

PhonePlan.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: 'phonePlan'
  }
);

export default PhonePlan;
