export interface Song {
    id: number,
    title: string,
    artists: string,
    image_url: string,
    isPlaying?: boolean,
    url: string,
    album?: string,
    genre?: any,
}
