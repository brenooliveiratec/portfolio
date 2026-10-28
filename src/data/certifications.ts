export type Certification = {
  id: string;
  title: string;
  institution: string;
  completedAt: string;
  description: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [];
