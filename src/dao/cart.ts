import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class CartDAO {
  static async getCartById(cartId) {
    return await models.Cart.findOne({
      where: { id: cartId },
      raw: true
    });
  }

  static async getCarts() {
    return await models.Cart.findAll({ raw: true });
  }

  static async createCart(userId, newCart) {
    await models.Cart.create({ userId, ...newCart });
  }

  static async createCartsFromCSV() {
    await models.Cart.bulkCreate(new CSVReader().getParsedData('carts'));
  }

  static async updateCart(cartId, updatedCart) {
    await models.Cart.update(updatedCart, { where: { id: cartId } });
  }

  static async deleteCart(cartId) {
    await models.Cart.destroy({ where: { id: cartId } });
  }
}

export default CartDAO;
