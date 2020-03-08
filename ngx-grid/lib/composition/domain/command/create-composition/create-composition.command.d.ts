import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../composition-id';
export declare class CreateCompositionCommand extends Command {
    private readonly compositionId;
    constructor(compositionId: CompositionId);
}
