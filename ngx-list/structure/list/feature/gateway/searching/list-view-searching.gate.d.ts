import { StructureId } from '../../../../core/domain/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
export declare class ListViewSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchCommandInvoker);
}
