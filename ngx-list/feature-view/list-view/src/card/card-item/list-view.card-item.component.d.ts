import { ElementRef } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/src/cdk/component/lib/src/pure-component';
import { ListViewCardTemplate } from '../template/list-view.card-template';
import * as i0 from "@angular/core";
export declare class ListViewCardItemComponent extends PureComponent {
    item: any;
    template: ListViewCardTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewCardItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewCardItemComponent, "div[gui-list-card-item][item][template]", never, { "item": "item"; "template": "template"; }, {}, never, never, false, never>;
}
