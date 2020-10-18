import { ComponentFactoryResolver } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
export declare class ViewTemplateFactory extends TemplateFactory<ViewTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    generateMapKeys(): Array<CellView>;
}
