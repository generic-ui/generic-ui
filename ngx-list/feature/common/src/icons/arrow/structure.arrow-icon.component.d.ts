import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { IconComponent } from '../../cdk/component/lib/src/icon-component';
import { NgChanges } from '../../cdk/component/lib/src/ng-changes';
import { StructureArrowPosition } from './strucutre.arrow-position';
import { SortOrder } from '../../../../../core/composition/src/domain/column/sort/sort-order';
import * as i0 from "@angular/core";
export declare class StructureArrowIconComponent extends IconComponent implements OnChanges {
    position: StructureArrowPosition | SortOrder;
    sort: boolean;
    private readonly styleModifier;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: NgChanges<StructureArrowIconComponent>): void;
    protected getSelectorName(): string;
    private getTransformValue;
    private getRotationDeg;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureArrowIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureArrowIconComponent, "div[gui-structure-arrow-icon]", never, { "position": "position"; "sort": "sort"; }, {}, never, never, false, never>;
}
