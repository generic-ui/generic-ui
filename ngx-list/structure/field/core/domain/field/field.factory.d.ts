import { FieldConfig } from '../../api/field.config';
import { Field } from './field';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldIdGenerator } from './field-id.generator';
import * as i0 from "@angular/core";
export declare class FieldFactory {
    private readonly fieldIdGenerator;
    private readonly dataFieldFactory;
    constructor(fieldIdGenerator: FieldIdGenerator, dataFieldFactory: DataFieldFactory);
    create(configs: Array<FieldConfig>): Array<Field>;
    private getFieldName;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldFactory>;
}
//# sourceMappingURL=field.factory.d.ts.map