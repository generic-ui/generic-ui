import { ElementRef } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ListViewTemplate } from '../template/list-view-template';
export declare class ListViewItemComponent extends PureComponent {
    item: any;
    template: ListViewTemplate;
    context: string;
    hasTemplateRef: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
}
