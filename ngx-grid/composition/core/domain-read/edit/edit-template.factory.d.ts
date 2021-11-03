import { ComponentFactoryResolver } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
export declare class EditTemplateFactory extends TemplateFactory<EditTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    generateMapKeys(): Array<DataType>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditTemplateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditTemplateFactory>;
}
//# sourceMappingURL=edit-template.factory.d.ts.map