import { CellTemplateWithContext } from '../../../../../../composition/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/ui-api/composition.command-dispatcher';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export declare class StructureColumnConfigColumnMoveComponent {
    private compositionCommandService;
    private structureColumnConfigService;
    column: CellTemplateWithContext;
    constructor(compositionCommandService: CompositionCommandDispatcher, structureColumnConfigService: StructureColumnConfigService);
    moveLeft(column: CellTemplateWithContext): void;
    moveRight(column: CellTemplateWithContext): void;
}
