import { Router } from 'express';
import BillingInfoController from '../controllers/billingInfo';

const router = Router();

router.get('/credentials/:credentialId/billingInfo', BillingInfoController.getBillingInfoById);
router.get('/billingInfos', BillingInfoController.getBillingInfos);
router.post('/billingInfo', BillingInfoController.createBillingInfo);
router.post('/billingInfos/fill-db/csv', BillingInfoController.createBillingInfosFromCSV);
router.put('/billingInfos/:billingInfoId', BillingInfoController.updateBillingInfo);
router.delete('/billingInfos/:billingInfoId', BillingInfoController.deleteBillingInfo);

export default router;
