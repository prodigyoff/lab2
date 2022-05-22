import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class BillingInfoDAO {
  static async getBillingInfoById(billingInfoId) {
    return await models.BillingInfo.findOne({
      where: { id: billingInfoId },
      raw: true
    });
  }

  static async getBillingInfos() {
    return await models.BillingInfo.findAll({ raw: true });
  }

  static async createBillingInfo(credentialId, newBillingInfo) {
    await models.BillingInfo.create({ credentialId: credentialId, ...newBillingInfo });
  }

  static async createBillingInfosFromCSV() {
    await models.BillingInfo.bulkCreate(new CSVReader().getParsedData('billingInfos'));
  }

  static async updateBillingInfo(billingInfoId, updatedBillingInfo) {
    await models.BillingInfo.update(updatedBillingInfo, { where: { id: billingInfoId } });
  }

  static async deleteBillingInfo(billingInfoId) {
    await models.BillingInfo.destroy({ where: { id: billingInfoId } });
  }
}

export default BillingInfoDAO;
