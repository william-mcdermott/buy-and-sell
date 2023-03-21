export interface Listing {
    id: string | null,
    name: string,
    description: string,
    price: number,
    views?: number
}

export interface NewListingForm {
    name: string;
    description: string;
    price: number;
}
