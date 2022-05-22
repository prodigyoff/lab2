import { Request, Response } from 'express';
import AddressDAO from '../dao/address';
import { handleEndpointError } from '../utils/errorHandler';

class AddressController {
  static async getAddressById(req: Request, res: Response) {
    try {
      const { addressId } = req.params;
      const address = await AddressDAO.getAddressById(addressId);
      res.send(address);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getAddresses(req: Request, res: Response) {
    try {
      //@ts-ignore
      const addresses = await AddressDAO.getAddresses();
      res.send(addresses);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createAddress(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { addressId } = req.body;
      const newAddress = req.body;
      await AddressDAO.createAddress(addressId, newAddress);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createAddressesFromCSV(req: Request, res: Response) {
    try {
      await AddressDAO.createAddressesFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateAddress(req: Request, res: Response) {
    try {
      const { addressId } = req.params;
      const updatedAddress = req.body;
      await AddressDAO.updateAddress(addressId, updatedAddress);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteAddress(req: Request, res: Response) {
    try {
      const { addressId } = req.params;
      await AddressDAO.deleteAddress(addressId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default AddressController;
