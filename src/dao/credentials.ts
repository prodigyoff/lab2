import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class CredentialsDAO {
  static async getCredentialById(credentialId) {
    return await models.Credentials.findOne({
      where: { id: credentialId },
      raw: true
    });
  }

  static async getCredentials() {
    return await models.Credentials.findAll({ raw: true });
  }

  static async createCredentials(userId) {
    await models.Credentials.create({ userId: userId });
  }

  static async createCredentialsFromCSV() {
    await models.Credentials.bulkCreate(new CSVReader().getParsedData('credentials'));
  }

  static async updateCredential(credentialId, updatedCredential) {
    await models.Credentials.update(updatedCredential, { where: { id: credentialId } });
  }

  static async deleteCredential(credentialId) {
    await models.Credentials.destroy({ where: { id: credentialId } });
  }
}

export default CredentialsDAO;
