import { FetchStatus } from "../../../types";

type CareerStats = {
  FighterId: number,
  FirstName: string,
  LastName: string,
  SigStrikesLandedPerMinute: number,
  SigStrikeAccuracy: number,
  TakedownAverage: number,
  SubmissionAverage: number,
  KnockoutPercentage: number,
  TechnicalKnockoutPercentage: number,
  DecisionPercentage: number
};

export interface IFighter {
  id: number,
  FighterId: number,
  FirstName: string,
  LastName: string,
  Nickname: string,
  WeightClass:string,
  BirthDate: string,
  Height: number,
  Weight: number,
  Reach: number,
  Wins: number,
  Losses: number,
  Draws: number,
  NoContests: number,
  TechnicalKnockouts: number,
  TechnicalKnockoutLosses: number,
  Submissions: number,
  SubmissionLosses: number,
  TitleWins: number,
  TitleLosses: number,
  TitleDraws: number,
  CareerStats: CareerStats
};

export type FighterState = {
    status: FetchStatus;
    fighers: IFighter[];
    fighterCards: number[];
};