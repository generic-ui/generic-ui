import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../../composition/core/api/composition.id";
import * as i3 from "../../core/api/summaries.event-repository";
import * as i4 from "../../../../l10n/core/api/translation.facade";
import * as i5 from "../../../source/core/api/source.warehouse";
import * as i6 from "../../../source/core/api/formation/type/row-selection-type.archive";
import * as i7 from "../../../../composition/core/api/composition.warehouse";
import * as i8 from "@angular/common";
import * as i9 from "@generic-ui/fabric";
import * as i10 from "../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-summaries-panel", "", "enabled", ""];
function StructureSummariesPanelComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r5.summariesTranslations.countTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "summariesCount"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r5.summaries.get(column_r3.getFieldId().getId()).count);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r6.summariesTranslations.distinctTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "summariesDist"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r6.summaries.get(column_r3.getFieldId().getId()).distinct);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "summariesSum"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r7.summaries.get(column_r3.getFieldId().getId()).sum);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r8.summariesTranslations.averageTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "summariesAvg"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r8.summaries.get(column_r3.getFieldId().getId()).average);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r9.summariesTranslations.minTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "summariesMin"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r9.summaries.get(column_r3.getFieldId().getId()).min);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r10.summariesTranslations.maxTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "summariesMax"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r10.summaries.get(column_r3.getFieldId().getId()).max);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gui-tooltip", ctx_r11.summariesTranslations.medTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "summariesMed"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r11.summaries.get(column_r3.getFieldId().getId()).median);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "summariesTruthy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r12.summaries.get(column_r3.getFieldId().getId()).truthy);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "summariesFalsy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r13.summaries.get(column_r3.getFieldId().getId()).falsy);
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_1_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(2, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_2_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(3, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_3_Template, 6, 4, "div", 5);
    i0.ɵɵtemplate(4, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_4_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(5, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_5_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(6, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_6_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(7, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_7_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(8, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_8_Template, 6, 4, "div", 5);
    i0.ɵɵtemplate(9, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_div_9_Template, 6, 4, "div", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).count));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).distinct));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).sum));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).average));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).min));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).max));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).median));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).truthy));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isSummariesTypePresent(ctx_r4.summaries.get(column_r3.getFieldId().getId()).falsy));
} }
function StructureSummariesPanelComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, StructureSummariesPanelComponent_ng_container_0_div_2_ng_container_1_Template, 10, 9, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", column_r3.width, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.summaries && !!ctx_r2.summaries.get(column_r3.getFieldId().getId()));
} }
function StructureSummariesPanelComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StructureSummariesPanelComponent_ng_container_0_div_1_Template, 1, 0, "div", 1);
    i0.ɵɵtemplate(2, StructureSummariesPanelComponent_ng_container_0_div_2_Template, 2, 3, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checkboxSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.headerColumns);
} }
export class StructureSummariesPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, structureSummariesEventRepository, translationService, sourceWarehouse, rowSelectionTypeArchive, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureSummariesEventRepository = structureSummariesEventRepository;
        this.translationService = translationService;
        this.sourceWarehouse = sourceWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.compositionWarehouse = compositionWarehouse;
        this.sourceEmpty = false;
        this.addClassToHost('gui-flex');
        this.hermesSubscribe(this.structureSummariesEventRepository.onSummariesChanged(this.structureId.toReadModelRootId()), (event) => {
            this.summaries = event.getSummaries();
        });
    }
    ngOnInit() {
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.hermesSubscribe(this.sourceWarehouse.onEntitiesSize(this.structureId), (size) => {
            this.sourceEmpty = size === 0;
        });
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.hermesSubscribe(this.translationService.onTranslation(), (translation) => {
            this.summariesTranslations = new SummariesTranslations(translation.summariesDistinctValuesTooltip, translation.summariesAverageTooltip, translation.summariesMinTooltip, translation.summariesMaxTooltip, translation.summariesMedTooltip, translation.summariesCountTooltip);
        });
    }
    isSummariesTypePresent(summaries) {
        return summaries !== undefined && summaries !== null;
    }
    getSelectorName() {
        return 'gui-structure-summaries-panel';
    }
}
StructureSummariesPanelComponent.ɵfac = function StructureSummariesPanelComponent_Factory(t) { return new (t || StructureSummariesPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.CompositionId), i0.ɵɵdirectiveInject(i3.SummariesEventRepository), i0.ɵɵdirectiveInject(i4.TranslationFacade), i0.ɵɵdirectiveInject(i5.SourceWarehouse), i0.ɵɵdirectiveInject(i6.RowSelectionTypeArchive), i0.ɵɵdirectiveInject(i7.CompositionWarehouse)); };
StructureSummariesPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureSummariesPanelComponent, selectors: [["div", "gui-structure-summaries-panel", "", "enabled", ""]], inputs: { enabled: "enabled" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 4, "ngIf"], ["class", "gui-structure-summaries-cell", 3, "width", 4, "ngFor", "ngForOf"], [1, "gui-structure-summaries-cell", "gui-row-checkbox", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis"], [1, "gui-structure-summaries-cell"], ["class", "gui-structure-summaries-value", 4, "ngIf"], [1, "gui-structure-summaries-value"], [3, "gui-tooltip"], [1, "gui-summaries-value"]], template: function StructureSummariesPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureSummariesPanelComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.enabled && ctx.summaries && !ctx.sourceEmpty);
    } }, directives: [i8.NgIf, i8.NgForOf, i9.FabricTooltipDirective], pipes: [i10.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSummariesPanelComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-summaries-panel][enabled]',
                templateUrl: './structure.summaries-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.SummariesEventRepository }, { type: i4.TranslationFacade }, { type: i5.SourceWarehouse }, { type: i6.RowSelectionTypeArchive }, { type: i7.CompositionWarehouse }]; }, { enabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvZmVhdHVyZS9wYW5lbC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9mZWF0dXJlL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3BJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUlsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNWekUseUJBSU07OztJQVFKLDhCQUN3QztJQUN2QywrQkFBeUQ7SUFBQSxZQUFtQzs7SUFBQSxpQkFBTztJQUNuRywrQkFBa0M7SUFBQSxZQUFzRDtJQUFBLGlCQUFPO0lBQ2hHLGlCQUFNOzs7O0lBRkMsZUFBa0Q7SUFBbEQsdUVBQWtEO0lBQUMsZUFBbUM7SUFBbkMsNERBQW1DO0lBQzFELGVBQXNEO0lBQXRELGdGQUFzRDs7O0lBR3pGLDhCQUN3QztJQUN2QywrQkFBNEQ7SUFBQSxZQUFrQzs7SUFBQSxpQkFBTztJQUNyRywrQkFBa0M7SUFBQSxZQUF5RDtJQUFBLGlCQUFPO0lBQ25HLGlCQUFNOzs7O0lBRkMsZUFBcUQ7SUFBckQsMEVBQXFEO0lBQUMs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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFN1bW1hcmllc1RyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3N0cnVjdHVyZS5zdW1tYXJpZXMtdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbF1bZW5hYmxlZF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c291cmNlRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0c3VtbWFyaWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdHN1bW1hcmllc1RyYW5zbGF0aW9uczogU3VtbWFyaWVzVHJhbnNsYXRpb25zO1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeTogU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5Lm9uU3VtbWFyaWVzQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpLFxuXHRcdFx0KGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXMgPSBldmVudC5nZXRTdW1tYXJpZXMoKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucm93U2VsZWN0aW9uVHlwZUFyY2hpdmUub24oKSxcblx0XHRcdCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hTZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uRW50aXRpZXNTaXplKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVtcHR5ID0gc2l6ZSA9PT0gMDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uSGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLm9uVHJhbnNsYXRpb24oKSxcblx0XHRcdCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUcmFuc2xhdGlvbnMgPSBuZXcgU3VtbWFyaWVzVHJhbnNsYXRpb25zKFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc0Rpc3RpbmN0VmFsdWVzVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNBdmVyYWdlVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNNaW5Ub29sdGlwLFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc01heFRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzTWVkVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNDb3VudFRvb2x0aXApO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllczogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllcyAhPT0gbnVsbDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsJztcblx0fVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZWQgJiYgc3VtbWFyaWVzICYmICFzb3VyY2VFbXB0eVwiPlxuXG5cdDxkaXYgKm5nSWY9XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtY2VsbCBndWktcm93LWNoZWNrYm94IGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblx0PC9kaXY+XG5cblx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGhlYWRlckNvbHVtbnNcIlxuXHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1jZWxsXCI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic3VtbWFyaWVzICYmICEhc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpXCI+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5jb3VudClcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLmNvdW50VG9vbHRpcFwiPnt7J3N1bW1hcmllc0NvdW50JyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0KVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMuZGlzdGluY3RUb29sdGlwXCI+e3snc3VtbWFyaWVzRGlzdCcgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0IH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ1N1bSdcIiAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHRcdHt7J3N1bW1hcmllc1N1bScgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtIH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiLS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWFuXCI+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPl88L3NwYW4+PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLmF2ZXJhZ2VUb29sdGlwXCI+e3snc3VtbWFyaWVzQXZnJyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWluJ1wiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZhbmQ7PC9zcGFuPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWluVG9vbHRpcFwiPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNNaW4nIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4KVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNYXgnXCI+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+Jm9yOzwvc3Bhbj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWF4VG9vbHRpcFwiPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNNYXgnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heCB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCItLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLW1lZGlhblwiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5+PC9zcGFuPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cblx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5tZWRUb29sdGlwXCI+e3snc3VtbWFyaWVzTWVkJyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkpXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0PHNwYW4+e3snc3VtbWFyaWVzVHJ1dGh5JyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5IH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSlcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHQ8c3Bhbj57eydzdW1tYXJpZXNGYWxzeScgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5IH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0PC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19