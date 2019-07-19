export type LevelOfConcious = {
    whoIsGod: string;
    lifeIs: string;
    level: string;
    mark: number;
    emotion: string;
    process: string;
};

export type Question = {
    name: string;
    mark: number;
    state: string;
}

export type Section = {
    name: string;
    questions: Question[];
}