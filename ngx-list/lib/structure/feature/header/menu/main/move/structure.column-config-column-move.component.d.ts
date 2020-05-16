import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/domain-api/composition.command-dispatcher';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export declare class StructureColumnConfigColumnMoveComponent {
    private compositionCommandService;
    private structureColumnConfigService;
    column: CellTemplateWithContext;
    constructor(compositionCommandService: CompositionCommandDispatcher, structureColumnConfigService: StructureColumnConfigService);
    moveLeft(column: CellTemplateWithContext): void;
    moveRight(column: CellTemplateWithContext): void;
}
