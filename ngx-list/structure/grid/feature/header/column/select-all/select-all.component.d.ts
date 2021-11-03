import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../source/core/api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../source/core/api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/core/api/formation/mode/row-selection-mode.repository';
import * as i0 from "@angular/core";
export declare class SelectAllComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly rowSelectionModeRepository;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    modeMulti: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, rowSelectionModeRepository: RowSelectionModeRepository, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    toggleSelectAll(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAllComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectAllComponent, "div[gui-select-all]", never, {}, {}, never, never>;
}
//# sourceMappingURL=select-all.component.d.ts.map