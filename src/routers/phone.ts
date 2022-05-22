import { Router } from 'express';
import PhoneController from '../controllers/phone';

const router = Router();

router.get('/phones/:phoneId', PhoneController.getPhoneById);
router.get('/phones', PhoneController.getPhones);
router.post('/phone', PhoneController.createPhone);
router.post('/phones/fill-db/csv', PhoneController.createPhonesFromCSV);
router.put('/phones/:phoneId', PhoneController.updatePhone);
router.delete('/phones/:phoneId', PhoneController.deletePhone);

export default router;
