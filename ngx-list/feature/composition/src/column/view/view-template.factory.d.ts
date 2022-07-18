import { ComponentFactoryResolver } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
import * as i0 from "@angular/core";
export declare class ViewTemplateFactory extends TemplateFactory<ViewTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    static readonly services: (typeof ComponentFactoryResolver)[];
    generateMapKeys(): Array<CellView>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewTemplateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewTemplateFactory>;
}
