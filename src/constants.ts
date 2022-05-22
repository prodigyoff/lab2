import path from 'path';

export const dataFilePath = path.join(process.cwd(), 'src', 'data', 'data.csv');
export const headers = {
  user: ['name'],
  credentials: ['userId'],
  cart: ['userId', 'filler'],
  address: ['credentialsId', 'residentalAddress', 'appartment', 'city', 'state', 'zipCode'],
  billingInfo: ['credentialsId', 'cardNumber', 'cardCvv', 'cardExpiration'],
  personalInfo: ['credentialsId', 'firstName', 'lastName', 'midName', 'emailAddress', 'phoneNumber'],
  phone: ['cartId', 'name', 'price', 'image', 'color', 'memoryAmount', 'ramAmount'],
  phonePlan: ['cartId', 'name', 'price', 'description']
};
