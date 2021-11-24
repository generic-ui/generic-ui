import { TemplateRef } from '@angular/core';
import { CellView } from '../../domain/column/cell-view';
import { TemplatesComponent } from '../template/templates.component';
export declare class ViewTemplatesComponent implements TemplatesComponent {
    textTemplate: TemplateRef<any>;
    numberTemplate: TemplateRef<any>;
    chipTemplate: TemplateRef<any>;
    linkTemplate: TemplateRef<any>;
    imageTemplate: TemplateRef<any>;
    checkboxTemplate: TemplateRef<any>;
    boldTemplate: TemplateRef<any>;
    italicTemplate: TemplateRef<any>;
    customTemplate: TemplateRef<any>;
    functionTemplate: TemplateRef<any>;
    htmlTemplate: TemplateRef<any>;
    dateTemplate: TemplateRef<any>;
    barTemplate: TemplateRef<any>;
    percentageBarTemplate: TemplateRef<any>;
    percentageTemplate: TemplateRef<any>;
    getTemplate(view: CellView): TemplateRef<any>;
}
