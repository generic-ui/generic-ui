import { ElementRef } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class PercentageViewComponent extends PureComponent {
    value: number;
    constructor(elementRef: ElementRef);
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PercentageViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PercentageViewComponent, "gui-percentage-view[value]", never, { "value": "value"; }, {}, never, never, false>;
}
