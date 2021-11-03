import { TemplateRef } from '@angular/core';
import { TemplatesComponent } from '../template/templates.component';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
export declare class EditTemplatesComponent implements TemplatesComponent {
    stringTemplate: TemplateRef<any>;
    numberTemplate: TemplateRef<any>;
    booleanTemplate: TemplateRef<any>;
    dateTemplate: TemplateRef<any>;
    emptyTemplate: TemplateRef<any>;
    getTemplate(dataType: DataType): TemplateRef<any>;
}
