export type ImpactLevel = 'high' | 'medium' | 'low';

export interface Recommendation {
  id: string;
  title: string;
  desc: string;
  impact: ImpactLevel;
}

export interface AuditModule {
  id: string;
  name: string;
  score: number;
  description: string;
  insights: string[];
  recommendations: Recommendation[];
}

export interface BrandAudit {
  brandName: string;
  overallScore: number;
  lastUpdated: string;
  modules: AuditModule[];
}