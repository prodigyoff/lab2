import { Request, Response } from 'express';
import AddressDAO from '../dao/address';
import PhoneDAO from '../dao/phone';
import { handleEndpointError } from '../utils/errorHandler';

class PhoneController {
  static async getPhoneById(req: Request, res: Response) {
    try {
      const { phoneId } = req.params;
      const phone = await PhoneDAO.getPhoneById(phoneId);
      res.send(phone);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getPhones(req: Request, res: Response) {
    try {
      //@ts-ignore
      const phones = await PhoneDAO.getPhones();
      res.send(phones);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPhone(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { phoneId } = req.body;
      const newPhone = req.body;
      await PhoneDAO.createPhone(phoneId, newPhone);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPhonesFromCSV(req: Request, res: Response) {
    try {
      await PhoneDAO.createPhonesFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updatePhone(req: Request, res: Response) {
    try {
      const { phoneId } = req.params;
      const updatedPhone = req.body;
      await PhoneDAO.updatePhone(phoneId, updatedPhone);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deletePhone(req: Request, res: Response) {
    try {
      const { phoneId } = req.params;
      await PhoneDAO.deletePhone(phoneId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default PhoneController;
