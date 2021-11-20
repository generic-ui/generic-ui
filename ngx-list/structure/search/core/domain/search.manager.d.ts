import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../field/core/domain/field/field.entity';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    private enabledDataTypes;
    addSearchPhrase(fields: Array<FieldEntity>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
