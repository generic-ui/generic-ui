import { Publisher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { RowSelectionMode, RowSelectionType } from './row-selected/row-selection';
import { RowSelectToggleType } from '../domain/row-select-toggle-type';
import { FormationCustomSelectId } from './custom/formation.custom-select.id';
import { FormationCustomSelectionConfig } from './custom/formation.custom-selection.config';
export declare abstract class FormationPublisher implements Publisher {
    protected constructor();
    abstract setSelection(enabled: boolean, structureId: StructureId): void;
    abstract selectRows(selectedRow: Array<string>, structureId: StructureId): void;
    abstract selectByIndex(indexes: Array<number>, structureId: StructureId): void;
    abstract selectByIds(ids: Array<string>, structureId: StructureId): void;
    abstract toggleSelectedRow(selectedRow: string, type: RowSelectToggleType, structureId: StructureId): void;
    abstract changeMode(mode: RowSelectionMode, structureId: StructureId): void;
    abstract changeType(type: RowSelectionType, structureId: StructureId): void;
    abstract setMatcher(matcher: (item: any) => any, structureId: StructureId): void;
    abstract selectAll(structureId: StructureId): void;
    abstract unselectAll(structureId: StructureId): void;
    abstract selectCustom(id: FormationCustomSelectId, structureId: StructureId): void;
    abstract setCustomSelection(config: FormationCustomSelectionConfig, structureId: StructureId): void;
}
