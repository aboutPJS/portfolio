export type Section = {
  title: string;
  entries: Array<Entry>;
};

export type Entry = {
  title: string;
  company: string;
  description: string;
  skills?: Array<string>;
  startDate: string;
  endDate?: string;
  links?: Array<Link>;
  pictures?: Array<string>;
};

export type Link = {
  name: string,
  url: string,
};
