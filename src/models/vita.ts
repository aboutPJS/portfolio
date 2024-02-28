export type Section = {
  title: string;
  entries: Array<Entry>;
};

export type Entry = {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
  link?: string;
  pictures?: Array<string>;
};
