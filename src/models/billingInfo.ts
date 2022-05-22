import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class BillingInfo extends ExtendedModel {}

BillingInfo.init(
  {
    cardNumber: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cardCvv: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cardExpiration: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'billingInfo'
  }
);

export default BillingInfo;
