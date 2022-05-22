import { Request, Response } from 'express';
import CartDAO from '../dao/cart';
import { handleEndpointError } from '../utils/errorHandler';

class CartController {
  static async getCartById(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const cart = await CartDAO.getCartById(cartId);
      res.send(cart);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getCarts(req: Request, res: Response) {
    try {
      //@ts-ignore
      const carts = await CartDAO.getCarts();
      res.send(carts);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createCart(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { userId } = req.body;
      const newCart = req.body;
      await CartDAO.createCart(userId, newCart);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createCartsFromCSV(req: Request, res: Response) {
    try {
      await CartDAO.createCartsFromCSV();
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const updatedCart = req.body;
      await CartDAO.updateCart(cartId, updatedCart);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      await CartDAO.deleteCart(cartId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default CartController;
