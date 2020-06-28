import { FieldCollection } from './field-collection';
import { FieldFactory } from './field/field.factory';
export declare class FieldCollectionFactory {
    private readonly fieldFactory;
    constructor(fieldFactory: FieldFactory);
    create(): FieldCollection;
}
