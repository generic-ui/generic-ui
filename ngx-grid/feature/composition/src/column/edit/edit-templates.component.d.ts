import { TemplateRef } from '@angular/core';
import { TemplatesComponent } from '../template/templates.component';
import { DataType } from '../../../../../core/structure/field/src/domain/field/data/data-type';
import * as i0 from "@angular/core";
export declare class EditTemplatesComponent implements TemplatesComponent {
    stringTemplate: TemplateRef<any>;
    numberTemplate: TemplateRef<any>;
    booleanTemplate: TemplateRef<any>;
    dateTemplate: TemplateRef<any>;
    emptyTemplate: TemplateRef<any>;
    getTemplate(dataType: DataType): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditTemplatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditTemplatesComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
