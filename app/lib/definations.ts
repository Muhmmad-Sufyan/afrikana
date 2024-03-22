export type CategoryType = {
    title: string;
    slug: string;
    menu_item: string;
};

export type ItemType = {
    title: string;
    slug: string;
    category: string;
    price: number;
    calories: number;
    description: string;
    images: string[];
    videos: string[];
};
