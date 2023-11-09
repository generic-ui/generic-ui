import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { CellTemplateWithContext } from '../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../feature/common/component/src/pure-component';
import { GuiEffects } from '../../../../../feature/gui-angular/effect/gui.effects';
import * as i0 from "@angular/core";
export declare class StructureHeaderFiltersComponent extends PureComponent implements OnInit {
    private readonly structureFilterCommandService;
    private readonly formBuilder;
    private readonly cd;
    private readonly effects;
    private readonly structureId;
    columns: Array<CellTemplateWithContext>;
    closed: EventEmitter<void>;
    readonly filterFieldName = "phrase";
    filterForm: FormGroup;
    filterMode: boolean;
    constructor(structureFilterCommandService: FilterPublisher, formBuilder: FormBuilder, cd: ChangeDetectorRef, effects: GuiEffects, elementRef: ElementRef, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    clearFilters(): void;
    turnOnFilterMode(): void;
    turnOffFilterMode(): void;
    protected getSelectorName(): string;
    private selectFilterFormChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderFiltersComponent, "div[gui-structure-header-filters][columns]", never, { "columns": "columns"; }, { "closed": "closed"; }, never, never, false, never>;
}
