export type ImpactLevel = 'high' | 'medium' | 'low';

// Definition of the structure for Brand Audit Data
export interface Recommendation {
  id: string;
  title: string;
  desc: string;
  impact: ImpactLevel;
}

// Audit Module and Brand Audit interfaces
export interface AuditModule {
  id: string;
  name: string;
  score: number;
  description: string;
  insights: string[];
  recommendations: Recommendation[];
}

// Definition of BrandAuditData interface
export interface BrandAudit {
  brandName: string;
  overallScore: number;
  lastUpdated: string;
  modules: AuditModule[];
}