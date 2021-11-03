import { ComponentFactoryResolver } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
import * as i0 from "@angular/core";
export declare class ViewTemplateFactory extends TemplateFactory<ViewTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    generateMapKeys(): Array<CellView>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewTemplateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewTemplateFactory>;
}
//# sourceMappingURL=view-template.factory.d.ts.map