import { TemplateRef } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
import { CellView } from '../../cell-view';
export declare class ViewTemplateRepository {
    private columnTemplateFactory;
    constructor(columnTemplateFactory: ViewTemplateFactory);
    findTemplate(view: CellView): TemplateRef<any>;
}
