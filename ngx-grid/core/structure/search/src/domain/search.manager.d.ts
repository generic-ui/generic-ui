import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../field/src/domain/field/field.entity';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    private enabledDataTypes;
    addSearchPhrase(fields: Array<FieldEntity>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<ItemEntity>): Array<ItemEntity>;
}
