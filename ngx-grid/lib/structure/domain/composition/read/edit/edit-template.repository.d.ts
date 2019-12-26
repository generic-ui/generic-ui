import { TemplateRef } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
import { DataType } from '../../../structure/command/field/data-type/data-type';
export declare class EditTemplateRepository {
    private editTemplateFactory;
    constructor(editTemplateFactory: EditTemplateFactory);
    findTemplate(dataType: DataType): TemplateRef<any>;
}
