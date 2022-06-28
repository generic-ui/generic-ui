import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class BarViewComponent extends PureComponent implements OnChanges {
    value: number;
    showPercentage: boolean;
    width: number;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<BarViewComponent>): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarViewComponent, "gui-bar-view[value]", never, { "value": "value"; "showPercentage": "showPercentage"; }, {}, never, never, false>;
}
