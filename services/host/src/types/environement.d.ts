export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      mode: "development" | "none" | "production";
    }
  }
}