import dayjs from "dayjs";
import { SAMPLE_RATES } from "../data/rates";

export const api = (url: string = "") => {
  const [path] = url.split("?");

  if (path.length === 0) {
    return Promise.reject(new Error("Path is required"));
  }

  if (path !== "/latest") {
    return Promise.reject(new Error("Invalid path"));
  }

  const baseCurrency = url.split("base=")[1] || "IDR";

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        base: baseCurrency,
        date: dayjs().format("YYYY-MM-DD"),
        rates: {
        ...SAMPLE_RATES,
        [baseCurrency]: 1,
        },
      });
    }, 300);
  });
}