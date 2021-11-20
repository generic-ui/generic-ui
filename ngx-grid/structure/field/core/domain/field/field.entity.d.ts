import { DataFieldTypes } from './data/data-field-types';
import { DataType } from './data/data-type';
import { FieldId } from './field.id';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { SummariesType } from '../../../../summaries/core/domain/summaries.type';
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
    getAccessorMethod(): (entity: OriginItemEntity) => any;
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getSearchAccessorMethod(): (entity: OriginItemEntity) => any;
    getValue(entity: OriginItemEntity): any;
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
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    filter(item: OriginItemEntity, filterPhrase: any): boolean;
    sort(entityOne: OriginItemEntity, entityTwo: OriginItemEntity, direction: boolean): number;
}
