import { Router } from 'express';
import CredentialsController from '../controllers/credentials';

const router = Router();

router.get('/credentials/:credentialId', CredentialsController.getCredentialById);
router.get('/credentials', CredentialsController.getCredentials);
router.post('/users/:userId/credential', CredentialsController.createCredentials);
router.post('/credentials/fill-db/csv', CredentialsController.createCredentialsFromCSV);
router.put('/credentials/:credentialId', CredentialsController.updateCredentials);
router.delete('/credentials/:credentialId', CredentialsController.deleteCredential);

export default router;
