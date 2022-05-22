import { Request, Response } from 'express';
import CredentialsDAO from '../dao/credentials';
import { handleEndpointError } from '../utils/errorHandler';

class CredentialsController {
  static async getCredentialById(req: Request, res: Response) {
    try {
      const { credentialId } = req.params;
      const credential = await CredentialsDAO.getCredentialById(credentialId);
      res.send(credential);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getCredentials(req: Request, res: Response) {
    try {
      //@ts-ignore
      const credentials = await CredentialsDAO.getCredentials();
      res.send(credentials);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createCredentials(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { userId } = req.body;
      await CredentialsDAO.createCredentials(userId);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createCredentialsFromCSV(req: Request, res: Response) {
    try {
      await CredentialsDAO.createCredentialsFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateCredentials(req: Request, res: Response) {
    try {
      const { credentialId } = req.params;
      const updatedCredential = req.body;
      await CredentialsDAO.updateCredential(credentialId, updatedCredential);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteCredential(req: Request, res: Response) {
    try {
      const { credentialId } = req.params;
      await CredentialsDAO.deleteCredential(credentialId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default CredentialsController;
