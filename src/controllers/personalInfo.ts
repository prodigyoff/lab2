import { Request, Response } from 'express';
import PersonalInfoDAO from '../dao/personalInfo';
import { handleEndpointError } from '../utils/errorHandler';

class PersonalInfoController {
  static async getPersonalInfoById(req: Request, res: Response) {
    try {
      const { personalInfoId } = req.params;
      const personalInfo = await PersonalInfoDAO.getPersonalInfoById(personalInfoId);
      res.send(personalInfo);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getPersonalInfos(req: Request, res: Response) {
    try {
      //@ts-ignore
      const personalInfos = await PersonalInfoDAO.getAddresses();
      res.send(personalInfos);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPersonalInfo(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { personalInfoId } = req.body;
      const newPersonalInfo = req.body;
      await PersonalInfoDAO.createPersonalInfo(personalInfoId, newPersonalInfo);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPersonalInfosFromCSV(req: Request, res: Response) {
    try {
      await PersonalInfoDAO.createPersonalInfosFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updatePersonalInfo(req: Request, res: Response) {
    try {
      const { personalInfoId } = req.params;
      const updatedPersonalInfo = req.body;
      await PersonalInfoDAO.updatePersonalInfo(personalInfoId, updatedPersonalInfo);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deletePersonalInfo(req: Request, res: Response) {
    try {
      const { personalInfoId } = req.params;
      await PersonalInfoDAO.deletePersonalInfo(personalInfoId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default PersonalInfoController;
