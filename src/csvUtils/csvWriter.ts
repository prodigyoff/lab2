import fs from 'fs';
import { dataFilePath, headers } from '../constants';
import { getRandomNumber, getRandomNumberOrNothing } from '../utils/helper';

class CSVWriter {
  static writeCSV() {
    const userValues = [`${headers.user.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      userValues.push(`name-${getRandomNumber(1, 50)}` + `\r\n`);
    }

    const credentialsValues = [`${headers.credentials.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      credentialsValues.push(
        `${i}\r\n`
      );
    }

    const cartValues = [`${headers.cart.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      cartValues.push(`${i},\r\n`);
    }

    const addressValues = [`${headers.address.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      addressValues.push(`${getRandomNumber(1, 40)},` + `residentalAddress-${getRandomNumber(1, 40)},` + `appartment-${getRandomNumber(1, 40)},` + `city-${getRandomNumber(1, 40)},` + `state-${getRandomNumber(1, 40)},` + `zipCode-${getRandomNumber(1, 40)}\r\n`);
    }

    const billingInfoValues = [`${headers.billingInfo.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      billingInfoValues.push(`${getRandomNumber(1, 40)},` + `${getRandomNumber(10000000, 99999999)},` + `${getRandomNumber(100, 999)},` + `${new Date(getRandomNumber(1998, 2000), 1, 1) }\r\n`);
    }

    const personalInfoValues = [`${headers.personalInfo.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      personalInfoValues.push(`${getRandomNumber(1, 40)},` + `firstName-${getRandomNumber(1, 40)},` + `lastName-${getRandomNumber(1, 40)},` + `midName-${getRandomNumber(1, 40)},` + `emailAddress-${getRandomNumber(1, 40)},` + `${getRandomNumber(10000000000, 99999999999)}\r\n`);
    }

    const phoneValues = [`${headers.phone.join(',')}\r\n`];
    for (let i = 1; i <= 240; i++) {
      phoneValues.push(`${getRandomNumberOrNothing(1, 40)},` + `name-${getRandomNumber(1, 80)},` + `price-${getRandomNumber(1, 40)},` + `image-${getRandomNumber(1, 40)},` + `color-${getRandomNumber(40, 80)},` + `memoryAmount-${getRandomNumber(1,50)},` + `ramAmount-${getRandomNumber(1, 40)}\r\n`);
    }

    const phonePlanValues = [`${headers.phonePlan.join(',')}\r\n`];
    for (let i = 1; i <= 10; i++) {
      phonePlanValues.push(`${getRandomNumberOrNothing(1, 40)},` + `name-${getRandomNumber(1, 80)},` + `price-${getRandomNumber(1, 40)},` + `description-${getRandomNumber(1, 40)},` + `${getRandomNumber(1, 80)}\r\n`);
    }

    const csvArray = [
      userValues,
      credentialsValues,
      cartValues,
      addressValues,
      billingInfoValues,
      personalInfoValues,
      phoneValues,
      phonePlanValues
    ];
    console.log(csvArray.sort)
    const csvString = [].concat(...csvArray).join('').replace(/\r\n$/g, '');
    fs.writeFileSync(dataFilePath, csvString);
  }
}

export default CSVWriter;
