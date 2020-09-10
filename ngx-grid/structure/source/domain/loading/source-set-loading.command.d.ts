import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SourceSetLoadingCommand extends Command {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
