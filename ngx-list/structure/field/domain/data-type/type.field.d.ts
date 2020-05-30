import { AllFieldTypes } from './all-field-types';
import { NumberField } from './fields/number-field';
import { OriginItemEntity } from '../../../../lib/structure/domain/source/origin/origin-item-entity';
import { BaseField } from './base.field';
export declare class TypeField extends BaseField {
    static of(field: AllFieldTypes): TypeField;
    private readonly field;
    constructor(field: AllFieldTypes);
    mapNumber<U>(callback: (field: NumberField) => U): U;
    ifNumber(): NumberField;
    /**
     * @deprecated
     */
    getField(): AllFieldTypes;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    filter(item: OriginItemEntity, filterPhrase: any): boolean;
    sort(entityOne: OriginItemEntity, entityTwo: OriginItemEntity, direction: boolean): number;
}
