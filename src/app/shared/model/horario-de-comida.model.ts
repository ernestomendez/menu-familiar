
export interface IHorarioDeComida {
    id?: string;
    name?: string;
    active?: boolean;
}

export class HorarioDeComida implements IHorarioDeComida {
    constructor(
        public id?: string,
        public name?: string,
        public active?: boolean
    ) {}
}
