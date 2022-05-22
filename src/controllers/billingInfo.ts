import { Request, Response } from 'express';
import BillingInfoDAO from '../dao/billingInfo';
import { handleEndpointError } from '../utils/errorHandler';

class BillingInfoController {
  static async getBillingInfoById(req: Request, res: Response) {
    try {
      const { billingInfoId } = req.params;
      const address = await BillingInfoDAO.getBillingInfoById(billingInfoId);
      res.send(address);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getBillingInfos(req: Request, res: Response) {
    try {
      //@ts-ignore
      const billingInfos = await BillingInfoDAO.getAddresses();
      res.send(billingInfos);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createBillingInfo(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { billingInfoId } = req.body;
      const newBillingInfo = req.body;
      await BillingInfoDAO.createBillingInfo(billingInfoId, newBillingInfo);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createBillingInfosFromCSV(req: Request, res: Response) {
    try {
      await BillingInfoDAO.createBillingInfosFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateBillingInfo(req: Request, res: Response) {
    try {
      const { billingInfoId } = req.params;
      const updatedBillingInfo = req.body;
      await BillingInfoDAO.updateBillingInfo(billingInfoId, updatedBillingInfo);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteBillingInfo(req: Request, res: Response) {
    try {
      const { billingInfoId } = req.params;
      await BillingInfoDAO.deleteBillingInfo(billingInfoId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default BillingInfoController;
