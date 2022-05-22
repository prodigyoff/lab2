import { Router } from 'express';
import CartController from '../controllers/cart';

const router = Router();

router.get('/carts/:cartId', CartController.getCartById);
router.get('/carts', CartController.getCarts);
router.post('/users/:userId/cart', CartController.createCart);
router.post('/carts/fill-db/csv', CartController.createCartsFromCSV);
router.put('/carts/:cartId', CartController.updateCart);
router.delete('/carts/:cartId', CartController.deleteCart);

export default router;
