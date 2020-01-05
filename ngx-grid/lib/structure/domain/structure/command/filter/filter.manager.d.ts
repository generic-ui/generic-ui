import { StructureFilter } from './structure.filter';
import { Field } from '../field/data-type/field';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
import { FilterSettings } from './filter.settings';
export declare class FilterManager {
    private readonly filterSettings;
    private readonly filters;
    getAll(): Array<StructureFilter>;
    getSettings(): FilterSettings;
    addFilter(field: Field, externalFilterId: string, filterValue: string): void;
    filter(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
