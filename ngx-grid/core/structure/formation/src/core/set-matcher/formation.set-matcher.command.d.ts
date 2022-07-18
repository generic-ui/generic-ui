import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class FormationSetMatcherCommand extends StructureCommand {
    private readonly matcher;
    constructor(structureId: StructureId, matcher: (item: any) => any);
    getMatcher(): (item: any) => any;
}
