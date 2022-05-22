import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class PhonePlanDAO {
  static async getPhonePlanById(phonePlanId) {
    return await models.PhonePlan.findOne({
      where: { id: phonePlanId },
      raw: true
    });
  }

  static async getPhonePlans() {
    return await models.PhonePlan.findAll({ raw: true });
  }

  static async createPhonePlan(phoneId, newPhonePlan) {
    await models.PhonePlan.create({ id: phoneId, newPhonePlan });
  }

  static async createPhonePlansFromCSV() {
    await models.PhonePlan.bulkCreate(new CSVReader().getParsedData('phonePlans'));
  }

  static async updatePhonePlan(phonePlanId, updatedPhonePlan) {
    await models.PhonePlan.update(updatedPhonePlan, { where: { id: phonePlanId } });
  }

  static async deletePhonePlan(phonePlanId) {
    await models.PhonePlan.destroy({ where: { id: phonePlanId } });
  }
}

export default PhonePlanDAO;
