import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../common/component/src/pure-component';
import { NgChanges } from '../../../../common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare class EmptySourceComponent extends PureComponent implements OnChanges {
    items: Array<any>;
    constructor(elRef: ElementRef);
    ngOnChanges(changes: NgChanges<EmptySourceComponent>): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptySourceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptySourceComponent, "div[gui-empty-source][items]", never, { "items": { "alias": "items"; "required": false; }; }, {}, never, never, false, never>;
}
