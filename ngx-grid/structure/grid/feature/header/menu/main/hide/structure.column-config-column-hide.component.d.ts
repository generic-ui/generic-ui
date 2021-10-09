import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/core/api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
import { CompositionId } from '../../../../../../../composition/core/domain/composition.id';
export declare class StructureColumnConfigColumnHideComponent {
    private readonly compositionId;
    private readonly compositionCommandService;
    private readonly structureColumnConfigService;
    column: CellTemplateWithContext;
    constructor(compositionId: CompositionId, compositionCommandService: CompositionCommandInvoker, structureColumnConfigService: StructureColumnConfigService);
    hideColumn(column: CellTemplateWithContext): void;
}
