import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Phone extends ExtendedModel {
  public image!: string;
  public color!: string;
  public memoryAmount!: number;
  public ramAmount!: number;
  public price!: number;
  public name!: string;
}

Phone.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    memoryAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ramAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'phone'
  }
);

export default Phone;
