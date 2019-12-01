import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../composition-id';
export declare class InitCompositionCommand extends Command {
    readonly compositionId: CompositionId;
    constructor(compositionId: CompositionId);
}
