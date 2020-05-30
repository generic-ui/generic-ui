import { StructureFilter } from './structure.filter';
import { OriginItemEntity } from '../../source/origin/origin-item-entity';
import { FilterSettings } from './filter.settings';
import { TypeField } from '../../../../../structure/field/domain/data-type/type.field';
export declare class FilterManager {
    private readonly filterSettings;
    private readonly filters;
    getAll(): Array<StructureFilter>;
    getSettings(): FilterSettings;
    addFilter(field: TypeField, externalFilterId: string, filterValue: string): void;
    filter(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
