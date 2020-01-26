import { ComponentFactoryResolver } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
export declare class EditTemplateFactory extends TemplateFactory<EditTemplatesComponent> {
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    generateMapKeys(): Array<DataType>;
}
