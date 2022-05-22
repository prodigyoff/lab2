import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class AddressDAO {
  static async getAddressById(addressId) {
    return await models.Address.findOne({
      where: { id: addressId },
      raw: true
    });
  }

  static async getAddresses() {
    return await models.Address.findAll({ raw: true });
  }

  static async createAddress(credentialId, newAddress) {
    await models.Address.create({ credentialId: credentialId, ...newAddress });
  }

  static async createAddressesFromCSV() {
    await models.Address.bulkCreate(new CSVReader().getParsedData('addresses'));
  }

  static async updateAddress(addressId, updatedAddress) {
    await models.Address.update(updatedAddress, { where: { id: addressId } });
  }

  static async deleteAddress(addressId) {
    await models.Address.destroy({ where: { id: addressId } });
  }
}

export default AddressDAO;
