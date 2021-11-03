import { ChangeDetectionStrategy, Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { hermesSwitchMap } from '@generic-ui/hermes';
import { StructureColumnConfigService } from '../structure.column-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/api/structure.id";
import * as i2 from "../../../../../core/api/structure.command-invoker";
import * as i3 from "../../../../../../composition/core/api/composition.warehouse";
import * as i4 from "../../../../../filter/core/api/filter.warehouse";
import * as i5 from "../../../../../../l10n/core/api/translation.facade";
import * as i6 from "./structure.column-menu-config.archive";
import * as i7 from "../../../../../../composition/core/api/composition.id";
import * as i8 from "../../../../../../composition/core/api/composition.command-invoker";
import * as i9 from "@angular/common";
import * as i10 from "@generic-ui/fabric";
import * as i11 from "../main/hide/structure.column-config-column-hide.component";
import * as i12 from "../main/move/structure.column-config-column-move.component";
import * as i13 from "../main/sort/structure.column-config-sort.component";
import * as i14 from "../../../../../filter/feature/unique/unique-value-list.component";
import * as i15 from "../../../column-manager/menu/structure.menu-column-manager.component";
import * as i16 from "../../../../../../l10n/feature/translation.pipe";
import * as i17 from "../../../../../../composition/core/domain-read/definition/cell-template-with-context";
const _c0 = ["headerSortMenu"];
const _c1 = ["gui-column-config", ""];
function StructureColumnConfigComponent_div_0_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("column", ctx_r4.column)("dropdownTextTranslation", ctx_r4.dropdownTextTranslation);
} }
function StructureColumnConfigComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "gui-tab-item", 4);
    i0.ɵɵtemplate(2, StructureColumnConfigComponent_div_0_ng_container_2_div_2_Template, 1, 2, "div", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵlistener("columnHidden", function StructureColumnConfigComponent_div_0_ng_container_2_Template_div_columnHidden_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.hideColumn(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵlistener("click", function StructureColumnConfigComponent_div_0_ng_container_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.highlightColumn(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵlistener("movedLeft", function StructureColumnConfigComponent_div_0_ng_container_2_Template_div_movedLeft_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.moveLeft(); })("movedRight", function StructureColumnConfigComponent_div_0_ng_container_2_Template_div_movedRight_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.moveRight(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tab", ctx_r1.config.getMainMenu());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.column.isSortEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("column", ctx_r1.column);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 5, "headerMenuMainTabHighlightColumn"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("column", ctx_r1.column);
} }
function StructureColumnConfigComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "gui-tab-item", 10);
    i0.ɵɵelement(2, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tab", ctx_r2.config.getFilterMenu());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("fieldId", ctx_r2.column.getFieldId());
} }
function StructureColumnConfigComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "gui-tab-item", 10);
    i0.ɵɵelement(2, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tab", ctx_r3.config.getColumnMenu());
} }
function StructureColumnConfigComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "gui-tab", 2);
    i0.ɵɵtemplate(2, StructureColumnConfigComponent_div_0_ng_container_2_Template, 8, 7, "ng-container", 3);
    i0.ɵɵtemplate(3, StructureColumnConfigComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(4, StructureColumnConfigComponent_div_0_ng_container_4_Template, 3, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("active", ctx_r0.config.getActiveMenu())("menu", ctx_r0.config.getMenus());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config.isMainEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config.isFilteringEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config.isColumnManagerEnabled());
} }
export class StructureColumnConfigComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, compositionId, compositionCommandInvoker, injector, column) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.filterWarehouse = filterWarehouse;
        this.translationFacade = translationFacade;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.injector = injector;
        this.column = column;
        this.uniqueValues = [];
        this.structureColumnConfigService = this.injector.get(StructureColumnConfigService);
    }
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.column.getFieldId());
        });
        this.hermesSubscribe(this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesSwitchMap((config) => {
            this.config = config;
            return this.translationFacade.onTranslation();
        })), (translation) => {
            this.setTabTitles(translation);
            this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
        });
    }
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    hideColumn() {
        this.compositionCommandInvoker.disableColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveLeft() {
        this.compositionCommandInvoker.moveLeft(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveRight() {
        this.compositionCommandInvoker.moveRight(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    highlightColumn() {
        this.compositionCommandInvoker.highlightColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    setTabTitles(translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
    }
    getSelectorName() {
        return 'gui-column-config';
    }
}
StructureColumnConfigComponent.ɵfac = function StructureColumnConfigComponent_Factory(t) { return new (t || StructureColumnConfigComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.StructureCommandInvoker), i0.ɵɵdirectiveInject(i3.CompositionWarehouse), i0.ɵɵdirectiveInject(i4.FilterWarehouse), i0.ɵɵdirectiveInject(i5.TranslationFacade), i0.ɵɵdirectiveInject(i6.StructureColumnMenuConfigArchive), i0.ɵɵdirectiveInject(i7.CompositionId), i0.ɵɵdirectiveInject(i8.CompositionCommandInvoker), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject('column')); };
StructureColumnConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnConfigComponent, selectors: [["div", "gui-column-config", ""]], viewQuery: function StructureColumnConfigComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerSortMenu = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c1, decls: 1, vars: 1, consts: [["class", "gui-header-menu-tab", 4, "ngIf"], [1, "gui-header-menu-tab"], [3, "active", "menu"], [4, "ngIf"], [1, "gui-tab-item-dropdown", 3, "tab"], ["gui-structure-column-config-sort", "", 3, "column", "dropdownTextTranslation", 4, "ngIf"], ["gui-structure-column-config-column-hide", "", 3, "column", "columnHidden"], [1, "gui-header-menu-item", 3, "click"], ["gui-structure-column-config-column-move", "", 3, "column", "movedLeft", "movedRight"], ["gui-structure-column-config-sort", "", 3, "column", "dropdownTextTranslation"], [3, "tab"], ["gui-unique-value-list", "", 3, "fieldId"], ["gui-structure-menu-column-manager", ""]], template: function StructureColumnConfigComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureColumnConfigComponent_div_0_Template, 5, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isEnabled());
    } }, directives: [i9.NgIf, i10.FabricTabComponent, i10.TabItemComponent, i11.StructureColumnConfigColumnHideComponent, i12.StructureColumnConfigColumnMoveComponent, i13.StructureColumnConfigSortComponent, i14.UniqueValueListComponent, i15.StructureMenuColumnManagerComponent], pipes: [i16.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnConfigComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-column-config]',
                templateUrl: './structure.column-config.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.StructureCommandInvoker }, { type: i3.CompositionWarehouse }, { type: i4.FilterWarehouse }, { type: i5.TranslationFacade }, { type: i6.StructureColumnMenuConfigArchive }, { type: i7.CompositionId }, { type: i8.CompositionCommandInvoker }, { type: i0.Injector }, { type: i17.CellTemplateWithContext, decorators: [{
                type: Inject,
                args: ['column']
            }] }]; }, { headerSortMenu: [{
            type: ViewChild,
            args: ['headerSortMenu', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBb0IsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQVV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSOUUseUJBR007OztJQUg4QixzQ0FBaUIsMkRBQUE7Ozs7SUFKdkQsNkJBQTZDO0lBRTVDLHVDQUF5RTtJQUV4RSxvR0FHTTtJQUVOLDhCQUUwQztJQUZyQyw2TkFBNkI7SUFHbEMsaUJBQU07SUFFTiw4QkFDK0I7SUFEMUIsb05BQTJCO0lBRS9CLFlBQ0Q7O0lBQUEsaUJBQU07SUFFTiw4QkFHMEM7SUFIckMscU5BQXdCLDJNQUFBO0lBSTdCLGlCQUFNO0lBRVAsaUJBQWU7SUFFaEIsMEJBQWU7OztJQXpCQSxlQUE0QjtJQUE1QixpREFBNEI7SUFFbkMsZUFBNEI7SUFBNUIsb0RBQTRC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QUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7OzRHQTFGVyw4QkFBOEIsK2ZBMEIvQixRQUFRO2lGQTFCUCw4QkFBOEI7Ozs7OztRQzFCM0MsK0VBNERNOztRQTVEQSxzQ0FBaUI7O3VGRDBCViw4QkFBOEI7Y0FOMUMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7c0JBMkJJLE1BQU07dUJBQUMsUUFBUTt3QkF2Qm5CLGNBQWM7a0JBRGIsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RvciwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktY29sdW1uLWNvbmZpZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyU29ydE1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aGVhZGVyU29ydE1lbnU6IEVsZW1lbnRSZWY7XG5cblx0Y29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGhpZGVDb2x1bW5UaXRsZTogc3RyaW5nO1xuXG5cdGRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvbkZhY2FkZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHB1YmxpYyByZWFkb25seSBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQodW5pcXVlVmFsdWVzUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQub24oKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50cmFuc2xhdGlvbkZhY2FkZS5vblRyYW5zbGF0aW9uKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRUYWJUaXRsZXModHJhbnNsYXRpb24pO1xuXHRcdFx0XHR0aGlzLmRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0O1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0aGlkZUNvbHVtbigpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZGlzYWJsZUNvbHVtbih0aGlzLmNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZUxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLm1vdmVMZWZ0KHRoaXMuY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5tb3ZlUmlnaHQodGhpcy5jb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRoaWdobGlnaHRDb2x1bW4oKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLmhpZ2hsaWdodENvbHVtbih0aGlzLmNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFiVGl0bGVzKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuY29uZmlnLnNldE1haW5NZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVNYWluVGFiKTtcblx0XHR0aGlzLmNvbmZpZy5zZXRGaWx0ZXJNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVGaWx0ZXJUYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldENvbHVtbnNNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVDb2x1bW5zVGFiKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tY29uZmlnJztcblx0fVxufVxuIiwiPGRpdiAqbmdJZj1cImlzRW5hYmxlZCgpXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdDxndWktdGFiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiIFttZW51XT1cImNvbmZpZy5nZXRNZW51cygpXCI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzTWFpbkVuYWJsZWQoKVwiPlxuXG5cdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldE1haW5NZW51KClcIiBjbGFzcz1cImd1aS10YWItaXRlbS1kcm9wZG93blwiPlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJjb2x1bW4uaXNTb3J0RW5hYmxlZCgpXCIgW2NvbHVtbl09XCJjb2x1bW5cIlxuXHRcdFx0XHRcdCBbZHJvcGRvd25UZXh0VHJhbnNsYXRpb25dPVwiZHJvcGRvd25UZXh0VHJhbnNsYXRpb25cIlxuXHRcdFx0XHRcdCBndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiAoY29sdW1uSGlkZGVuKT1cImhpZGVDb2x1bW4oKVwiXG5cdFx0XHRcdFx0IFtjb2x1bW5dPVwiY29sdW1uXCJcblx0XHRcdFx0XHQgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IChjbGljayk9XCJoaWdobGlnaHRDb2x1bW4oKVwiXG5cdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkhpZ2hsaWdodENvbHVtbicgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IChtb3ZlZExlZnQpPVwibW92ZUxlZnQoKVwiXG5cdFx0XHRcdFx0IChtb3ZlZFJpZ2h0KT1cIm1vdmVSaWdodCgpXCJcblx0XHRcdFx0XHQgW2NvbHVtbl09XCJjb2x1bW5cIlxuXHRcdFx0XHRcdCBndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0ZpbHRlcmluZ0VuYWJsZWQoKVwiPlxuXG5cdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldEZpbHRlck1lbnUoKVwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRGaWx0ZXJNZW51KCl9fTwvZGl2Pi0tPlxuXG5cdFx0XHRcdDxkaXYgW2ZpZWxkSWRdPVwiY29sdW1uLmdldEZpZWxkSWQoKVwiXG5cdFx0XHRcdFx0IGd1aS11bmlxdWUtdmFsdWUtbGlzdD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKVwiPlxuXG5cdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldENvbHVtbk1lbnUoKVwiPlxuXG5cdFx0XHRcdDxkaXYgZ3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHQ8L2d1aS10YWI+XG48L2Rpdj5cbiJdfQ==