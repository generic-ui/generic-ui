import { ComponentFactoryResolver, TemplateRef, Type } from '@angular/core';
import { TemplatesComponent } from './templates.component';
import { DataType } from '../../../structure/command/field/data-type/data-type';
import { CellView } from '../../cell-view';
export declare abstract class TemplateFactory<T extends TemplatesComponent> {
    private readonly templatesComponentDefinition;
    private componentFactoryResolver;
    private templates;
    private templatesComponent;
    protected constructor(templatesComponentDefinition: Type<T>, componentFactoryResolver: ComponentFactoryResolver);
    abstract generateMapKeys(): Array<DataType | CellView>;
    getTemplates(): Map<DataType | CellView, TemplateRef<any>>;
    destroy(): void;
    private createTemplatesComponent;
    private generateMap;
    private findAndSetTemplate;
}
