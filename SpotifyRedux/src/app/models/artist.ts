export interface Artist {
    name: string;
    images: {
        height: number;
        width: number;
        url: string;
    }[];
    genres: string[];
    rating?: number;
}
