import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigColumnMoveComponent extends PureComponent {
    column: CellTemplateWithContext;
    movedLeft: EventEmitter<void>;
    movedRight: EventEmitter<void>;
    constructor(elRef: ElementRef);
    moveLeft(): void;
    moveRight(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigColumnMoveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigColumnMoveComponent, "div[gui-structure-column-config-column-move][column]", never, { "column": "column"; }, { "movedLeft": "movedLeft"; "movedRight": "movedRight"; }, never, never>;
}
//# sourceMappingURL=structure.column-config-column-move.component.d.ts.map