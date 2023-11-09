import { ElementRef } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { FormationWarehouse } from '../../../../../core/structure/formation/src/api/formation.warehouse';
import { GuiComponent } from '../../../../common/component';
import { GuiState } from '../../../../gui-angular/state/gui.state';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export interface SelectAllComponentState {
    isAllChecked: boolean;
    isAllIndeterminate: boolean;
    modeMulti: boolean;
}
export declare class SelectAllComponent extends GuiComponent {
    private readonly state;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    readonly state$: HermesObservable<SelectAllComponentState>;
    constructor(elementRef: ElementRef, state: GuiState<SelectAllComponentState>, structureId: StructureId, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse);
    toggleSelectAll(isAllIndeterminate: boolean, isAllChecked: boolean): void;
    protected getSelectorName(): string;
    private selectModeMulti;
    private selectAllChecked;
    private selectAllIndeterminate;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectAllComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectAllComponent, "div[gui-select-all]", never, {}, {}, never, never, false, never>;
}
