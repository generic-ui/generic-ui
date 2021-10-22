import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
export declare class StructureColumnConfigColumnHideComponent extends PureComponent {
    column: CellTemplateWithContext;
    columnHidden: EventEmitter<void>;
    constructor(elRef: ElementRef);
    hideColumn(): void;
    protected getSelectorName(): string;
}
