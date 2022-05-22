import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class PersonalInfo extends ExtendedModel {
  public firstName!: string;
  public lastName!: string;
  public midName!: string;
  public emailAddress!: string;
  public phoneNumber!: number;
}

PersonalInfo.init(
  {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    midName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'personalInfo'
  }
);

export default PersonalInfo;
