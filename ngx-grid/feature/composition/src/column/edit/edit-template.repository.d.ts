import { TemplateRef } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
import { DataType } from '../../../../../core/structure/field/src/domain/field/data/data-type';
import * as i0 from "@angular/core";
export declare class EditTemplateRepository {
    private editTemplateFactory;
    constructor(editTemplateFactory: EditTemplateFactory);
    static readonly services: (typeof EditTemplateFactory)[];
    findTemplate(dataType: DataType): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditTemplateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditTemplateRepository>;
}
