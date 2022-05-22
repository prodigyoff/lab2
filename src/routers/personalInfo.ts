import { Router } from 'express';
import PersonalInfoController from '../controllers/personalInfo';

const router = Router();

router.get('/credentials/:credentialId/personalInfo', PersonalInfoController.getPersonalInfoById);
router.get('/personalInfos', PersonalInfoController.getPersonalInfos);
router.post('/personalInfo', PersonalInfoController.createPersonalInfo);
router.post('/personalInfos/fill-db/csv', PersonalInfoController.createPersonalInfosFromCSV);
router.put('/personalInfos/:personalInfoId', PersonalInfoController.updatePersonalInfo);
router.delete('/personalInfos/:personalInfoId', PersonalInfoController.deletePersonalInfo);

export default router;
