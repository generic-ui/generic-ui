import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../feature/common/src/cdk/component/lib/src/pure-component';
import { StructureArrowPosition } from '../../../../../../../feature/common/src/icons/arrow/strucutre.arrow-position';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigColumnMoveComponent extends PureComponent {
    column: CellTemplateWithContext;
    movedLeft: EventEmitter<void>;
    movedRight: EventEmitter<void>;
    StructureArrowPosition: typeof StructureArrowPosition;
    constructor(elRef: ElementRef);
    moveLeft(): void;
    moveRight(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigColumnMoveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigColumnMoveComponent, "div[gui-structure-column-config-column-move][column]", never, { "column": "column"; }, { "movedLeft": "movedLeft"; "movedRight": "movedRight"; }, never, never, false, never>;
}
