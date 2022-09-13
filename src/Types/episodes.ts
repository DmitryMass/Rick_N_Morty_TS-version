export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface IEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export interface IServerEpisodeResponse<T> {
  info: Info;
  results: T[];
}
