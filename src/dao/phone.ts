import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class PhoneDAO {
  static async getPhoneById(phoneId) {
    return await models.Phone.findOne({
      where: { id: phoneId },
      raw: true
    });
  }

  static async getPhones() {
    return await models.Phone.findAll({ raw: true });
  }

  static async createPhone(phoneId, newPhone) {
    await models.Phone.create({ id: phoneId, newPhone });
  }

  static async createPhonesFromCSV() {
    await models.Phone.bulkCreate(new CSVReader().getParsedData('phones'));
  }

  static async updatePhone(phoneId, updatedPhone) {
    await models.Phone.update(updatedPhone, { where: { id: phoneId } });
  }

  static async deletePhone(phoneId) {
    await models.Phone.destroy({ where: { id: phoneId } });
  }
}

export default PhoneDAO;
