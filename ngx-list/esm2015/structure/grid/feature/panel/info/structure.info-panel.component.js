import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../source/core/api/source.warehouse";
import * as i2 from "@generic-ui/fabric";
import * as i3 from "../../../../../composition/core/api/composition.id";
import * as i4 from "../../../../core/api/structure.id";
import * as i5 from "../../../../../schema/core/api/schema.read-model-root-id";
import * as i6 from "../../column-manager/dialog/structure.dialog-column-manager.service";
import * as i7 from "../../../../../l10n/core/api/translation.facade";
import * as i8 from "../../../../../schema/feature/manager/dialog/structure.dialog-schema-manager.service";
import * as i9 from "../../../core/api/panel/info/structure.info-panel.archive";
import * as i10 from "@angular/common";
import * as i11 from "../../../../source/feature/counter/filter/active-filter-menu-trigger.directive";
import * as i12 from "../../../../../schema/feature/manager/manager-icon/structure.schema-manager-icon.component";
import * as i13 from "../../column-manager/icon/structure.column-manager-icon.component";
import * as i14 from "./icon/structure.info-icon.component";
import * as i15 from "../../../../../l10n/feature/translation.pipe";
import * as i16 from "../../../../../common/cdk/number-formatter/number-formatter.pipe";
const _c0 = ["gui-structure-info-panel", ""];
function StructureInfoPanelComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "guiTranslate");
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "numberFormatter");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "guiTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "infoPanelShowing"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, ctx_r5.totalItemsSize));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 7, "infoPanelItems"), " ");
} }
function StructureInfoPanelComponent_div_1_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "guiTranslate");
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "numberFormatter");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "guiTranslate");
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "numberFormatter");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "guiTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 5, "infoPanelShowing"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 7, ctx_r6.preparedItemsSize));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 9, "infoPanelOutOf"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 11, ctx_r6.totalItemsSize));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 13, "infoPanelItems"), " ");
} }
function StructureInfoPanelComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StructureInfoPanelComponent_div_1_ng_container_1_ng_container_1_Template, 8, 9, "ng-container", 0);
    i0.ɵɵtemplate(2, StructureInfoPanelComponent_div_1_ng_container_1_span_2_Template, 13, 15, "span", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.preparedItemsSize === ctx_r4.totalItemsSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.preparedItemsSize !== ctx_r4.totalItemsSize);
} }
function StructureInfoPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, StructureInfoPanelComponent_div_1_ng_container_1_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.preparedItemsSize !== undefined && ctx_r0.totalItemsSize !== undefined);
} }
function StructureInfoPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function StructureInfoPanelComponent_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.openSchemaManager(); });
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r1.themeManagerTooltipText);
} }
function StructureInfoPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function StructureInfoPanelComponent_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openColumnManager(); });
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r2.columnManagerTooltipText);
} }
function StructureInfoPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function StructureInfoPanelComponent_div_6_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.openInfo(); });
    i0.ɵɵelement(1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r3.infoTooltipText);
} }
export class StructureInfoPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, injector, sourceWarehouse, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.injector = injector;
        this.sourceWarehouse = sourceWarehouse;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.translationService = translationService;
        this.schemaManagerService = schemaManagerService;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.infoModal = StructureInfoModalComponent;
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelConfig = infoPanel;
        });
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.totalItemsSize = size;
        });
        this.hermesSubscribe(this.sourceWarehouse.onPreparedEntities(this.structureId), (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
        });
        this.hermesSubscribe(this.translationService.onTranslation(), (translation) => {
            this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            this.infoTooltipText = translation.infoPanelInfoTooltipText;
        });
    }
    openInfo() {
        this.dialog.open(this.infoModal);
    }
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    }
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    }
    getSelectorName() {
        return 'gui-structure-info-panel';
    }
}
StructureInfoPanelComponent.ɵfac = function StructureInfoPanelComponent_Factory(t) { return new (t || StructureInfoPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1.SourceWarehouse), i0.ɵɵdirectiveInject(i2.FabricDialogService), i0.ɵɵdirectiveInject(i3.CompositionId), i0.ɵɵdirectiveInject(i4.StructureId), i0.ɵɵdirectiveInject(i5.SchemaReadModelRootId), i0.ɵɵdirectiveInject(i6.StructureDialogColumnManagerService), i0.ɵɵdirectiveInject(i7.TranslationFacade), i0.ɵɵdirectiveInject(i8.StructureDialogSchemaManagerService), i0.ɵɵdirectiveInject(i9.StructureInfoPanelArchive)); };
StructureInfoPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureInfoPanelComponent, selectors: [["div", "gui-structure-info-panel", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 7, vars: 4, consts: [[4, "ngIf"], [1, "gui-right-section"], [3, "click", 4, "ngIf"], ["gui-active-filter-menu-trigger", "", 4, "ngIf"], ["gui-active-filter-menu-trigger", ""], [3, "click"], ["gui-structure-schema-manager-icon", "", 3, "gui-tooltip"], ["gui-structure-column-manager-icon", "", 3, "gui-tooltip"], ["gui-structure-info-icon", "", 3, "gui-tooltip"]], template: function StructureInfoPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, StructureInfoPanelComponent_div_1_Template, 2, 1, "div", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, StructureInfoPanelComponent_div_4_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(5, StructureInfoPanelComponent_div_5_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(6, StructureInfoPanelComponent_div_6_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.infoPanelConfig.isSourceSizeEnabled());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.infoPanelConfig.isSchemaManagerEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.infoPanelConfig.isColumnsManagerEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.infoPanelConfig.isInfoDialogEnabled());
    } }, directives: [i10.NgIf, i11.ActiveFilterMenuTriggerDirective, i12.StructureSchemaManagerIconComponent, i2.FabricTooltipDirective, i13.StructureColumnManagerIconComponent, i14.StructureInfoIconComponent], pipes: [i15.TranslationPipe, i16.NumberFormatterPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureInfoPanelComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-info-panel]',
                templateUrl: './structure.info-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.SourceWarehouse }, { type: i2.FabricDialogService }, { type: i3.CompositionId }, { type: i4.StructureId }, { type: i5.SchemaReadModelRootId }, { type: i6.StructureDialogColumnManagerService }, { type: i7.TranslationFacade }, { type: i8.StructureDialogSchemaManagerService }, { type: i9.StructureInfoPanelArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWdDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUVyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEdkYsNkJBQTJEO0lBQzFELFlBQ0E7O0lBQUEseUJBQUc7SUFBQSxZQUFvQzs7SUFBQSxpQkFBSTtJQUMzQyxZQUNEOztJQUFBLDBCQUFlOzs7SUFIZCxlQUNBO0lBREEseUVBQ0E7SUFBRyxlQUFvQztJQUFwQyxpRUFBb0M7SUFDdkMsZUFDRDtJQURDLHVFQUNEOzs7SUFFQSwrQkFDa0M7SUFDL0IsWUFDRjs7SUFBQSx5QkFBRztJQUFBLFlBQXVDOztJQUFBLGlCQUFJO0lBQzlDLFlBQ0E7O0lBQUEseUJBQUc7SUFBQSxZQUFvQzs7SUFBQSxpQkFBSTtJQUMzQyxhQUNEOztJQUFBLGlCQUFPOzs7SUFMSixlQUNGO0lBREUseUVBQ0Y7SUFBRyxlQUF1QztJQUF2QyxvRUFBdUM7SUFDMUMsZUFDQTtJQURBLHVFQUNBO0lBQUcsZUFBb0M7SUFBcEMsbUVBQW9D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QUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOztzR0FoRlcsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUMzQnhDLDJCQUFLO1FBQ0osNEVBcUJNO1FBQ1AsaUJBQU07UUFFTiwyQkFBSztRQUNKLDhCQUErQjtRQUU5Qiw0RUFHTTtRQUVOLDRFQUdNO1FBRU4sNEVBR007UUFDUCxpQkFBTTtRQUNQLGlCQUFNOztRQTFDQyxlQUEyQztRQUEzQyxnRUFBMkM7UUE0QjdDLGVBQThDO1FBQTlDLG1FQUE4QztRQUs5QyxlQUErQztRQUEvQyxvRUFBK0M7UUFLL0MsZUFBMkM7UUFBM0MsZ0VBQTJDOzt1RkRabkMsMkJBQTJCO2NBTnZDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWluZm8tcGFuZWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvdGFsSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cHJlcGFyZWRJdGVtc1NpemU6IG51bWJlcjtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRpbmZvTW9kYWwgPSBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQ7XG5cblx0aW5mb1BhbmVsQ29uZmlnOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWc7XG5cblx0dGhlbWVNYW5hZ2VyVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRjb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRpbmZvVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nOiBGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUub24oKSxcblx0XHRcdChpbmZvUGFuZWw6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbENvbmZpZyA9IGluZm9QYW5lbDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMudG90YWxJdGVtc1NpemUgPSBzaXplO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uUHJlcGFyZWRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uub25UcmFuc2xhdGlvbigpLFxuXHRcdFx0KHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRoZW1lTWFuYWdlclRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsVGhlbWVNYW5nZXJUb29sdGlwVGV4dDtcblx0XHRcdFx0dGhpcy5jb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbi5pbmZvUGFuZWxDb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuaW5mb1Rvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsSW5mb1Rvb2x0aXBUZXh0O1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRvcGVuSW5mbygpOiB2b2lkIHtcblx0XHR0aGlzLmRpYWxvZy5vcGVuKHRoaXMuaW5mb01vZGFsKTtcblx0fVxuXG5cdG9wZW5Db2x1bW5NYW5hZ2VyKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5pbmplY3Rvcik7XG5cdH1cblxuXHRvcGVuU2NoZW1hTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYU1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsJztcblx0fVxuXG59XG4iLCI8ZGl2PlxuXHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzU291cmNlU2l6ZUVuYWJsZWQoKVwiPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB1bmRlZmluZWQgJiYgdG90YWxJdGVtc1NpemUgIT09IHVuZGVmaW5lZFwiPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgPT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdHt7J2luZm9QYW5lbFNob3dpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0PGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPlxuXHRcdFx0XHR7eydpbmZvUGFuZWxJdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdDxzcGFuICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHRvdGFsSXRlbXNTaXplXCJcblx0XHRcdFx0ICBndWktYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXI+XG5cdFx0XHRcdFx0XHR7eydpbmZvUGFuZWxTaG93aW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHRcdDxiPnt7cHJlcGFyZWRJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj5cblx0XHRcdFx0e3snaW5mb1BhbmVsT3V0T2YnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0PGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPlxuXHRcdFx0XHR7eydpbmZvUGFuZWxJdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PC9zcGFuPlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0PC9kaXY+XG48L2Rpdj5cblxuPGRpdj5cblx0PGRpdiBjbGFzcz1cImd1aS1yaWdodC1zZWN0aW9uXCI+XG5cblx0XHQ8ZGl2IChjbGljayk9XCJvcGVuU2NoZW1hTWFuYWdlcigpXCJcblx0XHRcdCAqbmdJZj1cImluZm9QYW5lbENvbmZpZy5pc1NjaGVtYU1hbmFnZXJFbmFibGVkKClcIj5cblx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cInRoZW1lTWFuYWdlclRvb2x0aXBUZXh0XCIgZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1pY29uPjwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiAoY2xpY2spPVwib3BlbkNvbHVtbk1hbmFnZXIoKVwiXG5cdFx0XHQgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKVwiPlxuXHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiY29sdW1uTWFuYWdlclRvb2x0aXBUZXh0XCIgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlci1pY29uPjwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiAoY2xpY2spPVwib3BlbkluZm8oKVwiXG5cdFx0XHQgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNJbmZvRGlhbG9nRW5hYmxlZCgpXCI+XG5cdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCJpbmZvVG9vbHRpcFRleHRcIiBndWktc3RydWN0dXJlLWluZm8taWNvbj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==