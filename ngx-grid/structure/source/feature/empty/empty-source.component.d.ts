import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
export declare class EmptySourceComponent extends PureComponent implements OnChanges {
    items: Array<any>;
    constructor(elRef: ElementRef);
    ngOnChanges(changes: NgChanges<EmptySourceComponent>): void;
    protected getSelectorName(): string;
}
