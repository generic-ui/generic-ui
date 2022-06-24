import { CompositionId } from '../../api/global/composition.id';
import { CompositionCommand } from '../composition.command';
export declare class CreateCompositionCommand extends CompositionCommand {
    private readonly compositionId;
    constructor(compositionId: CompositionId);
}
