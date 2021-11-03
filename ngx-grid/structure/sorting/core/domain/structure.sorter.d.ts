import { SorterId } from '../api/sorter.id';
import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../field/core/domain/field/field';
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
}
//# sourceMappingURL=structure.sorter.d.ts.map