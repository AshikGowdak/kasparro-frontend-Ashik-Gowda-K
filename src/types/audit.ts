// Define the smallest units first
export type ImpactLevel = 'high' | 'medium' | 'low';

export interface Recommendation {
  title: string;
  impact: ImpactLevel;
  desc: string;
}

// Now define the Module which contains Recommendations
export interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: string[];
  flags: string[];
  recommendations: Recommendation[];
}

// Finally define the Top-Level Brand Data which contains Modules
export interface BrandAuditData {
  brandName: string;
  snapshot: {
    visibilityScore: number;
    eeatScore: number;
    keywordCoverage: number;
  };
  modules: AuditModule[];
}