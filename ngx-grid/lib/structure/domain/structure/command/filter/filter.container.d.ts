import { StructureFilter } from './structure.filter';
import { FilterConfig } from '../../../../ui-api/structure/filter/filter-config';
import { Field } from '../field/data-type/field';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
export declare class FilterContainer {
    private enabled;
    private readonly filters;
    constructor(enabled?: boolean);
    setConfig(config: FilterConfig): void;
    addFilter(field: Field, externalFilterId: string, filterValue: string): void;
    filter(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    getAll(): Array<StructureFilter>;
}
