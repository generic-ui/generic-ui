import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
import { Field } from '../field/data-type/field';
export declare class SearchManager {
    private searchFields;
    private searchPhrase;
    addSearchPhrase(fields: Array<Field>, searchPhrase: string): void;
    removeSearchFilters(): void;
    search(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
    private filterString;
    private filterNumber;
    private filterBoolean;
}
