import { StructureSorter } from './structure.sorter';
import { SortingConfig } from '../domain-api/sorting-config';
import { FieldId } from '../../field/domain/data-type/field.id';
import { OriginItemEntity } from '../../../lib/structure/domain/source/origin/origin-item-entity';
import { SortOrder } from '../../../lib/composition/domain/column/sort/sort-order';
import { TypeField } from '../../field/domain/data-type/type.field';
export declare class SorterCollection {
    private enabled;
    private multi;
    private readonly sorters;
    constructor(enabled?: boolean, multi?: boolean);
    setConfig(config: SortingConfig): void;
    toggle(field: TypeField): void;
    setSortOrder(field: TypeField, sortOrder: SortOrder): void;
    add(field: TypeField, direction?: boolean): void;
    addSorter(fieldId: FieldId, sorter: StructureSorter): void;
    delete(fieldId: FieldId): void;
    update(): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    getAll(): Array<StructureSorter>;
}
