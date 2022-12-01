import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { RowSelectToggleType } from '../domain/row-select-toggle-type';
import { FormationPublisher } from '../api/formation.publisher';
import { RowSelectionMode, RowSelectionType } from '../api/row-selected/row-selection';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FormationCustomSelectId } from '../api/custom/formation.custom-select.id';
import { FormationCustomSelectionConfig } from '../api/custom/formation.custom-selection.config';
export declare class FormationDomainPublisher extends FormationPublisher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    static readonly services: readonly [typeof CommandDispatcher];
    setSelection(enabled: boolean, structureId: StructureId): void;
    selectRows(selectedRow: Array<string>, structureId: StructureId): void;
    selectByIndex(indexes: Array<number>, structureId: StructureId): void;
    selectByIds(ids: Array<string>, structureId: StructureId): void;
    toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    changeType(type: RowSelectionType, structureId: StructureId): void;
    setMatcher(matcher: (item: any) => any, structureId: StructureId): void;
    selectAll(structureId: StructureId): void;
    unselectAll(structureId: StructureId): void;
    selectCustom(id: FormationCustomSelectId, structureId: StructureId): void;
    setCustomSelection(config: FormationCustomSelectionConfig, structureId: StructureId): void;
}
