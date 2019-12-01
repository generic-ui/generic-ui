import { FieldFactory } from './data-type/field.factory';
import { FieldContainer } from './field.container';
export declare class FieldContainerFactory {
    private fieldFactory;
    constructor(fieldFactory: FieldFactory);
    create(): FieldContainer;
}
