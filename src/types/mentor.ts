export interface Mentor {
    id: string;
    name: string;
    title: string;
    company: string;
    avatar: string;
    expertise: string[];
    rating: number;
    totalSessions: number;
    pricePerSession: number;
    bio: string;
    yearsOfExperience: number;
}

export interface MentorFilters {
    expertise?: string[];
    priceRange?: [number, number];
    rating?: number;
}
