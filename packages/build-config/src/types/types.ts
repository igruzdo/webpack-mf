export interface BuildPath {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type Mode = "development" | "none" | "production";
export type PlatformMode = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  path: BuildPath;
  mode: Mode;
  platform: PlatformMode;
  analyzer?: boolean;
}