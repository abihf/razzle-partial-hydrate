import { Fetcher } from "@traveloka/fragment/lib/Fetch";

const userFetcher = new Fetcher('userFetcher', (keys) => {
  return new Promise(resolve => setTimeout(() => resolve(keys.map(key => `user ${key}`)), 500));
});

export default userFetcher;
