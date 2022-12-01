import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchingGate } from '../../../../../feature/structure/search/src/gate/searching.gate';
import { SearchEventRepository } from '../../../../../core/structure/search/src/api/search.event-repository';
import { SearchPublisher } from '../../../../../core/structure/search/src/api/search.publisher';
import * as i0 from "@angular/core";
export declare class StructureSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchPublisher);
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSearchingGate, "gui-structure[searching]", never, {}, {}, never, never, false, never>;
}
