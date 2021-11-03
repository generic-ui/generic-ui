import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class ColumnSelectorComponent extends PureComponent {
    columns: Array<CellTemplateWithContext>;
    columnSelected: EventEmitter<CellTemplateWithContext>;
    constructor(elementRef: ElementRef);
    onSelectChange(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
}
