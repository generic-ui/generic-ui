import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { FormationWarehouse } from '../../../../../core/structure/formation/src/api/formation.warehouse';
import * as i0 from "@angular/core";
export declare class SelectAllComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    modeMulti: boolean;
    context: import("../../../../common/src/cdk/component/lib").ReactiveContext<unknown>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    toggleSelectAll(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAllComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectAllComponent, "div[gui-select-all]", never, {}, {}, never, never, false, never>;
}
