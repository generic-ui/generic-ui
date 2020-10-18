import { DataFieldTypes } from './data-field-types';
import { FieldConfig } from '../../../api/field.config';
export declare class DataFieldFactory {
    create(fieldConfig: FieldConfig): DataFieldTypes;
    private createMatchers;
}
