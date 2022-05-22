import { Router } from 'express';
import AddressController from '../controllers/address';

const router = Router();

router.get('/credentials/:credentialId/address', AddressController.getAddressById);
router.get('/addresses', AddressController.getAddresses);
router.post('/address', AddressController.createAddress);
router.post('/addresses/fill-db/csv', AddressController.createAddressesFromCSV);
router.put('/addresses/:addressId', AddressController.updateAddress);
router.delete('/addresses/:addressId', AddressController.deleteAddress);

export default router;
