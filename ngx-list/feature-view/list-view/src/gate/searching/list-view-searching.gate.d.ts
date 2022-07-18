import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchPublisher } from '../../../../../core/structure/search/src/api/search.publisher';
import { SearchEventRepository } from '../../../../../core/structure/search/src/api/search.event-repository';
import { SearchingGate } from '../../../../../feature/structure/search/src/gate/searching.gate';
import * as i0 from "@angular/core";
export declare class ListViewSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchPublisher);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewSearchingGate, "gui-list-view[searching]", never, {}, {}, never, never, false>;
}
