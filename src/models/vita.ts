export type Section = {
  title: string;
  entries: Array<Entry>;
};

export type Entry = {
  title: string;
  description: string;
  link?: string;
  cover?: string;
}