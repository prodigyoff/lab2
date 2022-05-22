import { Router } from 'express';

import userRouter from './user';
import billingInfoRouter from './billingInfo';
import personalInfoRouter from './personalInfo';
import credentialsRouter from './credentials';
import cartRouter from './cart';
import phoneRouter from './phone';
import phonePlanRouter from './phonePlan';
import addressRouter from './address';

const router = Router();

router.use(userRouter);
router.use(billingInfoRouter);
router.use(personalInfoRouter);
router.use(credentialsRouter);
router.use(cartRouter);
router.use(phoneRouter);
router.use(phonePlanRouter);
router.use(addressRouter);

export default router;
