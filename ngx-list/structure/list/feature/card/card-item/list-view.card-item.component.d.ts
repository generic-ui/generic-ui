import { ElementRef } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ListViewCardTemplate } from '../template/list-view.card-template';
export declare class ListViewCardItemComponent extends PureComponent {
    item: any;
    template: ListViewCardTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
}
