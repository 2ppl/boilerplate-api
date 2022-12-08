import dotenv from 'dotenv';

dotenv.config();

export const config = Object.freeze({
  PORT: process.env.PORT || 3000,
  CRYPTO_KEY: process.env.CRYPTO_KEY as string,
  PG_CONNECTION: process.env.PG_CONNECTION as string,
});

function checkObjectNoEmpty(o: Record<string, any>): void {
  for (const key in o) {
    if (!o[key]) {
      throw new Error(`Config value ${key} is empty!`);
    }
  }
}

checkObjectNoEmpty(config);
