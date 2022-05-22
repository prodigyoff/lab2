import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class PersonalInfoDAO {
  static async getPersonalInfoById(personalInfoId) {
    return await models.PersonalInfo.findOne({
      where: { id: personalInfoId },
      raw: true
    });
  }

  static async getPersonalInfos() {
    return await models.PersonalInfo.findAll({ raw: true });
  }

  static async createPersonalInfo(credentialId, newPersonalInfo) {
    await models.PersonalInfo.create({ credentialId: credentialId, ...newPersonalInfo });
  }

  static async createPersonalInfosFromCSV() {
    await models.PersonalInfo.bulkCreate(new CSVReader().getParsedData('personalInfos'));
  }

  static async updatePersonalInfo(personalInfoId, updatedPersonalInfo) {
    await models.PersonalInfo.update(updatedPersonalInfo, { where: { id: personalInfoId } });
  }

  static async deletePersonalInfo(personalInfoId) {
    await models.PersonalInfo.destroy({ where: { id: personalInfoId } });
  }
}

export default PersonalInfoDAO;
