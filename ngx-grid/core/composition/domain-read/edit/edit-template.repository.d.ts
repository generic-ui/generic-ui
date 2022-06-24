import { TemplateRef } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
import { DataType } from '../../../structure/field/domain/field/data/data-type';
export declare class EditTemplateRepository {
    private editTemplateFactory;
    constructor(editTemplateFactory: EditTemplateFactory);
    static readonly services: (typeof EditTemplateFactory)[];
    findTemplate(dataType: DataType): TemplateRef<any>;
}
