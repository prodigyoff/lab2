import { Request, Response } from 'express';
import PhonePlanDAO from '../dao/phonePlan';
import { handleEndpointError } from '../utils/errorHandler';

class PhonePlanController {
  static async getPhonePlanById(req: Request, res: Response) {
    try {
      const { phonePlanId } = req.params;
      const phone = await PhonePlanDAO.getPhonePlanById(phonePlanId);
      res.send(phone);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getPhonePlans(req: Request, res: Response) {
    try {
      //@ts-ignore
      const phonePlans = await PhonePlanDAO.getPhonePlans();
      res.send(phonePlans);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPhonePlan(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { phonePlanId } = req.body;
      const newPhonePlan = req.body;
      await PhonePlanDAO.createPhonePlan(phonePlanId, newPhonePlan);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPhonePlansFromCSV(req: Request, res: Response) {
    try {
      await PhonePlanDAO.createPhonePlansFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updatePhonePlan(req: Request, res: Response) {
    try {
      const { phonePlanId } = req.params;
      const updatedPhonePlan = req.body;
      await PhonePlanDAO.updatePhonePlan(phonePlanId, updatedPhonePlan);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deletePhonePlan(req: Request, res: Response) {
    try {
      const { phonePlanId } = req.params;
      await PhonePlanDAO.deletePhonePlan(phonePlanId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default PhonePlanController;
