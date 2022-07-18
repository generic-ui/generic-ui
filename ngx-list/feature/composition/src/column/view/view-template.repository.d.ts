import { TemplateRef } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
import * as i0 from "@angular/core";
export declare class ViewTemplateRepository {
    private readonly columnTemplateFactory;
    constructor(columnTemplateFactory: ViewTemplateFactory);
    static readonly services: (typeof ViewTemplateFactory)[];
    findTemplate(view: CellView): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewTemplateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewTemplateRepository>;
}
