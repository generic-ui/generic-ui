import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../field/core/domain/field/field';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    private enabledDataTypes;
    addSearchPhrase(fields: Array<Field>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
//# sourceMappingURL=search.manager.d.ts.map