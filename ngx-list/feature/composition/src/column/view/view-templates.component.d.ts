import { TemplateRef } from '@angular/core';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
import { TemplatesComponent } from '../template/templates.component';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewTemplatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewTemplatesComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
