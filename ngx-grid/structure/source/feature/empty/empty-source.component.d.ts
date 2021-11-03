import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class EmptySourceComponent extends PureComponent implements OnChanges {
    items: Array<any>;
    constructor(elRef: ElementRef);
    ngOnChanges(changes: NgChanges<EmptySourceComponent>): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptySourceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptySourceComponent, "div[gui-empty-source][items]", never, { "items": "items"; }, {}, never, never>;
}
//# sourceMappingURL=empty-source.component.d.ts.map