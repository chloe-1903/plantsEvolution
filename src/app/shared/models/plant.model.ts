import {PlantKind} from '../enums/plant-kind.enum';

export class Plant {
    public name: string;
    public imagePath: string;
    public kind: PlantKind;

    constructor(name: string, imagePath: string, kind: PlantKind) {
        this.name = name;
        this.imagePath = imagePath;
        this.kind = kind;
    }
}
