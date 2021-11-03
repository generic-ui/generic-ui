import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureEditSourceItemParams } from './origin/edit/structure.edit-source-item.params';
import * as i0 from "@angular/core";
export declare class SourceDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setLoading(structureId: StructureId, enabled: boolean): void;
    setOrigin(structureId: StructureId, items: Array<any>): void;
    editItem(structureId: StructureId, params: StructureEditSourceItemParams): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceDispatcher>;
}
//# sourceMappingURL=source.dispatcher.d.ts.map