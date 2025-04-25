
export interface ThresholdConfig {
  id: string;
  rejectCode: string;
  threshold: number;
  email?: string;
}

export interface RejectedClaim {
  claimNumber: string;
  carrierCode: string;
  drugName: string;
  dateProcessed: string;
  rejectCode: string;
}

export interface ThresholdResult {
  rejectCode: string;
  actualPercentage: number;
  thresholdPercentage: number;
  isExceeded: boolean;
}
