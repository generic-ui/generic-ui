import { FieldFactory } from './data-type/field.factory';
import { FieldCollection } from './field.collection';
export declare class FieldCollectionFactory {
    private fieldFactory;
    constructor(fieldFactory: FieldFactory);
    create(): FieldCollection;
}
