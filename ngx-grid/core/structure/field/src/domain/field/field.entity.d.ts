import { DataFieldTypes } from './data/data-field-types';
import { DataType } from './data/data-type';
import { FieldId } from './field.id';
import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
import { SummariesType } from '../../../../summaries/src/domain/summaries.type';
import { Entity } from '@generic-ui/hermes';
export declare class FieldEntity extends Entity<FieldId> {
    private readonly id;
    private readonly field;
    private readonly name;
    constructor(id: FieldId, field: DataFieldTypes, name: string);
    static of(id: FieldId, dataField: DataFieldTypes, name: string): FieldEntity;
    getId(): FieldId;
    getKey(): string;
    getDataType(): DataType;
    getName(): string;
    /**
     * @deprecated
     */
    getField(): DataFieldTypes;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessor(): string;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessorMethod(): (entity: ItemEntity) => any;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getSearchAccessorMethod(): (entity: ItemEntity) => any;
    getValue(entity: ItemEntity): any;
    getDisplayValue(value: any): any;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummaries(type: SummariesType): boolean;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummariesEnabled(): boolean;
    search(item: ItemEntity, searchPhrase: string): boolean;
    filter(item: ItemEntity, filterPhrase: any): boolean;
    sort(entityOne: ItemEntity, entityTwo: ItemEntity, direction: boolean): number;
}
