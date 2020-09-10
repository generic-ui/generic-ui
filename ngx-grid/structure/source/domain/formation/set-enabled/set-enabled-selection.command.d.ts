import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class SetEnabledSelectionCommand extends Command {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
