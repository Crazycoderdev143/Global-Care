import {randomInt} from "crypto";

export const generateOTP = (): string => randomInt(100000, 1000000).toString();

export const expiryTime = (ttlMinutes = 15): Date =>
  new Date(Date.now() + ttlMinutes * 60_000);
