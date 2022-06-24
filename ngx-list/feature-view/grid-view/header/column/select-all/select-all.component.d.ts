import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureId } from '../../../../../core/structure/core/api/global/structure.id';
import { FormationPublisher } from '../../../../../core/structure/formation/api/formation.publisher';
import { SmartComponent } from '../../../../../feature/common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../core/structure/formation/api/formation.warehouse';
import * as i0 from "@angular/core";
export declare class SelectAllComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    modeMulti: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    toggleSelectAll(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAllComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectAllComponent, "div[gui-select-all]", never, {}, {}, never, never>;
}
