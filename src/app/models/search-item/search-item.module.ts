interface IThumbnails {
  default: IThumbnail,
  medium: IThumbnail,
  high: IThumbnail,
  standard: IThumbnail,
  maxres: IThumbnail
}

interface ILocalized {
  title: string,
  description: string
}

interface ISnippet {
  publishedAt: Date | string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: ILocalized,
  defaultAudioLanguage: string
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface IThumbnail {
  url: string,
  width: number,
  height: number
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}
