import { SorterId } from './sorter.id';
import { Field } from '../field/data-type/field';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
export declare class StructureSorter {
    private readonly sorterId;
    private columnId;
    private field;
    private rank;
    private direction;
    constructor(id: SorterId, field: Field, direction?: boolean);
    getId(): SorterId;
    getRank(): number;
    getField(): Field;
    hasDirection(): boolean;
    changeDirection(): void;
    setDirection(direction: boolean): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    private sortString;
    private sortNumber;
    private sortBoolean;
    private sortDate;
    private sortUnknown;
}
