interface CommonParams {
  after?: number;
  forced?: boolean;
}

export interface ShutdownParams extends CommonParams {}
export interface RestartParams extends CommonParams {}
