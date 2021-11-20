import { Sorter } from './sorter';
import { SortingConfig } from '../api/sorting-config';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
import { FieldEntity } from '../../../field/core/domain/field/field.entity';
export declare class SorterManager {
    private enabled;
    private multi;
    private readonly sorters;
    constructor(enabled?: boolean, multi?: boolean);
    setConfig(config: SortingConfig): void;
    toggle(field: FieldEntity): void;
    setSortOrder(field: FieldEntity, sortOrder: SortOrder): void;
    add(field: FieldEntity, direction?: boolean): void;
    addSorter(fieldId: FieldId, sorter: Sorter): void;
    delete(fieldId: FieldId): void;
    update(): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    getAll(): Array<Sorter>;
}
