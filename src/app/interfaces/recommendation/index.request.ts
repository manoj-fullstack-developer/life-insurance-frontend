import { RiskTolerance } from "@/app/enums/riskTolerance.enum";
import { IPaginationResponse } from "@/app/types";

export interface IRecommendationRequest {
  age: number;
  income: number;
  dependents: number;
  riskTolerance: RiskTolerance;
}

export interface IRecommendationResponse {
  id: number;
  age: number;
  income: number;
  dependents: number;
  riskTolerance: string;
  recommendation: string;
  explanation: string;
}

export type IRecommendationResponseData =
  IPaginationResponse<IRecommendationResponse>;
