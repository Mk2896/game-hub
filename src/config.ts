interface Config {
  BASE_URL: string;
  API_KEY: string;
}

const config: Config = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
};

export default config;
