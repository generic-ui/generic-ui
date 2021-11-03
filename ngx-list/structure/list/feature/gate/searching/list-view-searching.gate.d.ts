import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import * as i0 from "@angular/core";
export declare class ListViewSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchCommandInvoker);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewSearchingGate, "gui-list-view[searching]", never, {}, {}, never>;
}
//# sourceMappingURL=list-view-searching.gate.d.ts.map