export interface Antiquity {
  info: {
    totalrecords: number;
    pages: number;
  };
  records: {
    id: number;
    section: string;
    primaryimageurl?: string;
    title: string;
    classification: string;
    dated: string | number;
  }[];
}
