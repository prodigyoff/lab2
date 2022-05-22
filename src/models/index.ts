import User from './user';
import Cart from './cart';
import PhonePlan from './phonePlan';
import Credentials from './credentials';
import BillingInfo from './billingInfo';
import PersonalInfo from './personalInfo';
import Address from './address';
import Phone from './phone';

User.hasOne(Cart, {
  foreignKey: { allowNull: true },
  onDelete: 'CASCADE'
});
User.hasOne(PhonePlan, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
User.hasOne(Credentials, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
Credentials.hasOne(BillingInfo, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
Credentials.hasOne(PersonalInfo, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
Credentials.hasOne(Address, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
Cart.hasMany(Phone, {
  foreignKey: { allowNull: true },
  onDelete: 'CASCADE'
});
Cart.hasMany(PhonePlan, {
  foreignKey: { allowNull: true },
  onDelete: 'CASCADE'
});

const models = {
  User,
  Credentials,
  BillingInfo,
  PersonalInfo,
  Address,
  Phone,
  PhonePlan,
  Cart
};

export default models;
