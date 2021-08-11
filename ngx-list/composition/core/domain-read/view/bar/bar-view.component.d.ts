import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class BarViewComponent extends PureComponent implements OnChanges {
    value: number;
    showPercentage: boolean;
    width: number;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<BarViewComponent>): void;
    protected getSelectorName(): string;
}
