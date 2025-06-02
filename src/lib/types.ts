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

export interface FineArt {
  info: {
    total: number;
    parameters: {
      skip: number;
    };
  };
  data: {
    id: number;
    title: string;
    type: string;
    creation_date: number | string;
    technique: string;
    department: string;
    collection: string;
    images: {
      web: {
        url: string;
      };
    };
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

export interface FineArtItemProps {
  data: {
    id: number;
    title: string;
    type: string;
    creation_date: number | string;
    technique: string;
    department: string;
    collection: string;
    description: string;
    creators: [
      {
        description: string;
      }
    ];
    images: {
      web: {
        url: string;
      };
    };
  };
}

export interface FavItem {
  id: number;
  section: string;
  title?: string;
  imageUrl?: string;
  editCards?: boolean;
  classification?: string;
  medium?: string;
  period?: string;
  dated?: string | number;
  department?: string;
  primaryimageurl?: string;
  description?: string;
  type?: string;
  technique?: string;
  collection?: string;
  creation_date?: number | string;
  creators?: [
    {
      description: string;
    }
  ];
  images?: {
    web: {
      url: string;
    };
  };
}
