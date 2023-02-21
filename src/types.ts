interface Delayable {
  after?: number;
}

interface Forceable {
  forced?: boolean;
}

export interface ShutdownParams extends Delayable, Forceable {}
export interface RestartParams extends Delayable, Forceable {}
export interface HibernateParams extends Delayable {}
