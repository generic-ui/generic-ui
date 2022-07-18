import { Sorter } from './sorter';
import { SortingConfig } from '../api/config/sorting-config';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { SortOrder } from '../../../../composition/src/domain/column/sort/sort-order';
import { FieldEntity } from '../../../field/src/domain/field/field.entity';
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
    sort(entities: Array<ItemEntity>): Array<ItemEntity>;
    getAll(): Array<Sorter>;
}
