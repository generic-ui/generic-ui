import { FieldIdGenerator } from '../field-id.generator';
import { AllFieldTypes } from './all-field-types';
import { FieldConfig } from '../../domain-api/field.config';
export declare class FieldFactory {
    private readonly fieldIdGenerator;
    constructor(fieldIdGenerator: FieldIdGenerator);
    create(fieldConfig: FieldConfig): AllFieldTypes;
    private createMatchers;
}
