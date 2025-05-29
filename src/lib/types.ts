export interface Antiquity {
  info: {
    totalrecords: number;
    pages: number;
    page: number;
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

export interface ItemProps {
  records: [
    {
      id: number;
      title: string;
      classification: string;
      medium: string;
      period: string;
      dated: string | number;
      department: string;
      primaryimageurl: string;
      description?: string;
    }
  ];
}
