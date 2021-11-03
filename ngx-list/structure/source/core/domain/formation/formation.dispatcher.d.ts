import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectToggleType } from './core/row-select-toggle-type';
import * as i0 from "@angular/core";
export declare class FormationDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    toggleSelectedRow(structureId: StructureId, selectedRow: string, type: RowSelectToggleType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormationDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormationDispatcher>;
}
//# sourceMappingURL=formation.dispatcher.d.ts.map