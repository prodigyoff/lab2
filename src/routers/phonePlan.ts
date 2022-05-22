import { Router } from 'express';
import PhonePlanController from '../controllers/phonePlan';

const router = Router();

router.get('/phonePlans/:phonePlanId', PhonePlanController.getPhonePlanById);
router.get('/phonePlans', PhonePlanController.getPhonePlans);
router.post('/phonePlan', PhonePlanController.createPhonePlan);
router.post('/phonePlans/fill-db/csv', PhonePlanController.createPhonePlansFromCSV);
router.put('/phonePlans/:phonePlanId', PhonePlanController.updatePhonePlan);
router.delete('/phonePlans/:phonePlanId', PhonePlanController.deletePhonePlan);

export default router;
