import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { FormationWarehouse } from '../../../../../core/structure/formation/src/api/formation.warehouse';
import { StructureSelectCustomService } from './structure.select-custom.service';
import * as i0 from "@angular/core";
export declare class SelectCustomComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureSelectCustomService;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    headerDialogContainer: ElementRef;
    options: string[];
    context: import("../../../../common/src/cdk/component/lib").ReactiveContext<unknown>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureSelectCustomService: StructureSelectCustomService, structureId: StructureId, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    openConfigDialog(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectCustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectCustomComponent, "gui-select-custom", never, {}, {}, never, never, false, never>;
}
