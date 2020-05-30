import { OriginItemEntity } from '../../../lib/structure/domain/source/origin/origin-item-entity';
import { TypeField } from '../../field/domain/data-type/type.field';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    private enabledDataTypes;
    addSearchPhrase(fields: Array<TypeField>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
