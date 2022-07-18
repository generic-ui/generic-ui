import { FieldCollection } from '../domain/field-collection';
import { FieldEntityFactory } from '../domain/field/field.entity-factory';
export declare class FieldCollectionFactory {
    private readonly fieldFactory;
    constructor(fieldFactory: FieldEntityFactory);
    static readonly services: readonly [typeof FieldEntityFactory];
    create(): FieldCollection;
}
