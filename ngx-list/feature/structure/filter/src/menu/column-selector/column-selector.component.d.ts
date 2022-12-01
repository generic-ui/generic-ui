import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
export declare class ColumnSelectorComponent extends PureComponent {
    columns: Array<CellTemplateWithContext>;
    columnSelected: EventEmitter<CellTemplateWithContext>;
    constructor(elementRef: ElementRef);
    onSelectChange(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnSelectorComponent, "div[gui-column-selector][columns]", never, { "columns": "columns"; }, { "columnSelected": "columnSelected"; }, never, never, false, never>;
}
