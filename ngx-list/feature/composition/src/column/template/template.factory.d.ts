import { ComponentFactoryResolver, TemplateRef, Type } from '@angular/core';
import { TemplatesComponent } from './templates.component';
import { DataType } from '../../../../../core/structure/field/src/domain/field/data/data-type';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
export declare abstract class TemplateFactory<T extends TemplatesComponent> {
    private readonly templatesComponentDefinition;
    private readonly componentFactoryResolver;
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
