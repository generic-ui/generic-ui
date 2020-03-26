import { FieldIdGenerator } from '../field-id.generator';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
import { AllFieldTypes } from './all-field-types';
export declare class FieldFactory {
    private readonly fieldIdGenerator;
    constructor(fieldIdGenerator: FieldIdGenerator);
    create(column: ColumnConfig): AllFieldTypes;
    private createMatchers;
}
