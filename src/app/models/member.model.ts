export interface IMember {
    id: number;
    name: string;
    email?: string;
    phoneNumber?: string;
    isActive: boolean;
    dateOfBirth: Date;
    imageUrl?: string;
}