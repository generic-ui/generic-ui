import { StructureSorter } from './structure.sorter';
import { SortingConfig } from '../../../../ui-api/structure/sorting-config';
import { Field } from '../field/data-type/field';
import { FieldId } from '../field/data-type/field.id';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
export declare class SorterCollection {
    private enabled;
    private multi;
    private readonly sorters;
    constructor(enabled?: boolean, multi?: boolean);
    setConfig(config: SortingConfig): void;
    toggle(field: Field): void;
    add(field: Field): void;
    addSorter(fieldId: FieldId, sorter: StructureSorter): void;
    delete(fieldId: FieldId): void;
    update(): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    getAll(): Array<StructureSorter>;
}
