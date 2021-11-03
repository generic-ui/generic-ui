import { StructureId } from '../../../../core/api/structure.id';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import * as i0 from "@angular/core";
export declare class StructureSearchingGate extends SearchingGate {
    constructor(structureId: StructureId, searchEventRepository: SearchEventRepository, searchCommandInvoker: SearchCommandInvoker);
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSearchingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSearchingGate, "gui-structure[searching]", never, {}, {}, never>;
}
//# sourceMappingURL=structure-searching.gate.d.ts.map