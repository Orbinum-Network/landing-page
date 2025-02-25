import { EmploymentType } from "@/enums";

export interface Career {
    id: string;
    title: string;
    location: string;
    employment_type: EmploymentType;
    description: string;
    requirements: string[];
}

export interface Careers {
    carrers: Career[];
}