export interface Runs {
  id: number;
  userUID: string;
  distance: number;
  time: number;
  enjoyment: number;
  difficulty: number;
  pain: number;
  effort: number;
  note: string;
  date: Date | null | undefined;
}
