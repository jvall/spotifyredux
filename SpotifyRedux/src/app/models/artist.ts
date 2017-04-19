export interface Artist {
    id: string;
    name: string;
    images: {
        height: number;
        width: number;
        url: string;
    }[];
    genres: string[];
    rating?: number;
}
