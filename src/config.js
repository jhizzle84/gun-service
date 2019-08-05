import dotenv from "dotenv";

dotenv.config();

// @ts-ignore Let it crash if undefined
export const DATA_FILE_NAME = process.env.DATA_FILE_NAME;

// @ts-ignore Let it crash if undefined
export const PEERS = JSON.parse(process.env.PEERS);
