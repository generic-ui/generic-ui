import { TemplateRef } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
import { CellView } from '../../domain/column/cell-view';
export declare class ViewTemplateRepository {
    private readonly columnTemplateFactory;
    constructor(columnTemplateFactory: ViewTemplateFactory);
    static readonly services: (typeof ViewTemplateFactory)[];
    findTemplate(view: CellView): TemplateRef<any>;
}
