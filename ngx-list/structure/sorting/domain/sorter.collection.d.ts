import { StructureSorter } from './structure.sorter';
import { SortingConfig } from '../domain-api/sorting-config';
import { FieldId } from '../../field/domain/core/field/field.id';
import { OriginItemEntity } from '../../source/domain/origin/origin-item-entity';
import { SortOrder } from '../../../lib/composition/domain/column/sort/sort-order';
import { Field } from '../../field/domain/core/field/field';
export declare class SorterCollection {
    private enabled;
    private multi;
    private readonly sorters;
    constructor(enabled?: boolean, multi?: boolean);
    setConfig(config: SortingConfig): void;
    toggle(field: Field): void;
    setSortOrder(field: Field, sortOrder: SortOrder): void;
    add(field: Field, direction?: boolean): void;
    addSorter(fieldId: FieldId, sorter: StructureSorter): void;
    delete(fieldId: FieldId): void;
    update(): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    getAll(): Array<StructureSorter>;
}
