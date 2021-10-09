import { StructureId } from '../../../../core/api/structure.id';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
export declare class StructureSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchCommandInvoker);
}
