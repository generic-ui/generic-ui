import { SorterId } from './sorter.id';
import { OriginItemEntity } from '../../source/origin/origin-item-entity';
import { TypeField } from '../field/data-type/type.field';
export declare class StructureSorter {
    private readonly sorterId;
    private columnId;
    private field;
    private rank;
    private direction;
    constructor(id: SorterId, field: TypeField, direction?: boolean);
    getId(): SorterId;
    getRank(): number;
    getField(): TypeField;
    hasDirection(): boolean;
    changeDirection(): void;
    setDirection(direction: boolean): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
