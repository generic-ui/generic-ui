import { SorterId } from '../api/id/sorter.id';
import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../field/src/domain/field/field.entity';
export declare class Sorter {
    private readonly sorterId;
    private columnId;
    private field;
    private rank;
    private direction;
    constructor(id: SorterId, field: FieldEntity, direction?: boolean);
    getId(): SorterId;
    getRank(): number;
    getField(): FieldEntity;
    hasDirection(): boolean;
    changeDirection(): void;
    setDirection(direction: boolean): void;
    sort(entities: Array<ItemEntity>): Array<ItemEntity>;
}
