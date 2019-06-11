import { ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { ColumnType } from 'structure/domain/presentation/column-type';
export declare class ColumnTemplateFactory {
    private componentFactoryResolver;
    private templates;
    private readonly templatesComponentDefinition;
    private templatesComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    getTemplates(): Map<ColumnType, TemplateRef<any>>;
    destroy(): void;
    private createTemplatesComponent;
    private generateMap;
}
