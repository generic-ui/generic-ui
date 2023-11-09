import { ElementRef } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/component/src/pure-component';
import { ListViewTemplate } from '../template/list-view-template';
import * as i0 from "@angular/core";
export declare class ListViewItemComponent extends PureComponent {
    item: any;
    template: ListViewTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewItemComponent, "div[gui-list-view-item][item][template]", never, { "item": "item"; "template": "template"; }, {}, never, never, false, never>;
}
