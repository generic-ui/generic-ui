import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../feature/common/component/src/pure-component';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigColumnHideComponent extends PureComponent {
    column: CellTemplateWithContext;
    columnHidden: EventEmitter<void>;
    constructor(elRef: ElementRef);
    hideColumn(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigColumnHideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigColumnHideComponent, "div[gui-structure-column-config-column-hide]", never, { "column": { "alias": "column"; "required": false; }; }, { "columnHidden": "columnHidden"; }, never, never, false, never>;
}
