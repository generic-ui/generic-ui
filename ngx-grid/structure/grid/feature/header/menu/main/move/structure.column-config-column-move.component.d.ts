import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
export declare class StructureColumnConfigColumnMoveComponent extends PureComponent {
    column: CellTemplateWithContext;
    movedLeft: EventEmitter<void>;
    movedRight: EventEmitter<void>;
    constructor(elRef: ElementRef);
    moveLeft(): void;
    moveRight(): void;
    protected getSelectorName(): string;
}
