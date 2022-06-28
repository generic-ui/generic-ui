import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionType } from '../../../../core/structure/formation/api/row-selected/row-selection';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/api/global/structure.id";
import * as i2 from "../../../../core/composition/api/global/composition.id";
import * as i3 from "../../../../core/structure/summaries/api/summaries.event-repository";
import * as i4 from "../../../../core/l10n/api/translation.facade";
import * as i5 from "../../../../core/structure/source/api/source.warehouse";
import * as i6 from "../../../../core/structure/formation/api/type/row-selection-type.archive";
import * as i7 from "../../../../core/composition/api/composition.warehouse";
import * as i8 from "@angular/common";
import * as i9 from "@generic-ui/fabric";
import * as i10 from "../../../l10n/translation.pipe";
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
        this.subscribe(this.structureSummariesEventRepository.onSummariesChanged(this.structureId.toReadModelRootId()), (event) => {
            this.summaries = event.getSummaries();
        });
    }
    ngOnInit() {
        this.subscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.subscribe(this.sourceWarehouse.onEntitiesSize(this.structureId), (size) => {
            this.sourceEmpty = size === 0;
        });
        this.subscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.headerColumns = columns;
        });
        this.subscribe(this.translationService.onTranslation(), (translation) => {
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
StructureSummariesPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.SummariesEventRepository }, { token: i4.TranslationFacade }, { token: i5.SourceWarehouse }, { token: i6.RowSelectionTypeArchive }, { token: i7.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureSummariesPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: { enabled: "enabled" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t<div *ngIf=\"checkboxSelection\"\n\t\t class=\"gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t</div>\n\n\t<div *ngFor=\"let column of headerColumns\"\n\t\t [style.width.px]=\"column.width\"\n\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n\n</ng-container>\n", dependencies: [{ kind: "directive", type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "pipe", type: i10.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSummariesPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-summaries-panel][enabled]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t<div *ngIf=\"checkboxSelection\"\n\t\t class=\"gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t</div>\n\n\t<div *ngFor=\"let column of headerColumns\"\n\t\t [style.width.px]=\"column.width\"\n\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.SummariesEventRepository }, { type: i4.TranslationFacade }, { type: i5.SourceWarehouse }, { type: i6.RowSelectionTypeArchive }, { type: i7.CompositionWarehouse }]; }, propDecorators: { enabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3N1bW1hcmllcy9wYW5lbC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3BJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUkvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBV3ZHLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxjQUFjO0lBZW5FLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGlDQUEyRCxFQUMzRCxrQkFBcUMsRUFDckMsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELG9CQUEwQztRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFUVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBMEI7UUFDM0QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBbEI5RCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQXFCNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDL0YsQ0FBQyxLQUFxQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUNqQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUM3RCxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQzdELENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzlCLENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLEVBQ3ZDLENBQUMsV0FBd0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUNyRCxXQUFXLENBQUMsOEJBQThCLEVBQzFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFDbkMsV0FBVyxDQUFDLG1CQUFtQixFQUMvQixXQUFXLENBQUMsbUJBQW1CLEVBQy9CLFdBQVcsQ0FBQyxtQkFBbUIsRUFDL0IsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsU0FBaUI7UUFDdkMsT0FBTyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUM7SUFDdEQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTywrQkFBK0IsQ0FBQztJQUN4QyxDQUFDOzs2SEEvRVcsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MsMElDdkI3Qyx3eUpBdUdBOzJGRGhGYSxnQ0FBZ0M7a0JBTjVDLFNBQVM7K0JBQ0MsNkNBQTZDLG1CQUV0Qyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO3FXQUtyQyxPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2FwaS9zdW1tYXJpZXMuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9sMTBuL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2wxMG4vYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFN1bW1hcmllc1RyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3N0cnVjdHVyZS5zdW1tYXJpZXMtdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbF1bZW5hYmxlZF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQhOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdHN1bW1hcmllczogTWFwPHN0cmluZywgYW55PjtcblxuXHRzdW1tYXJpZXNUcmFuc2xhdGlvbnM6IFN1bW1hcmllc1RyYW5zbGF0aW9ucztcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnk6IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeS5vblN1bW1hcmllc0NoYW5nZWQodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKSxcblx0XHRcdChldmVudDogU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzID0gZXZlbnQuZ2V0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodHlwZTogUm93U2VsZWN0aW9uVHlwZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNoZWNrYm94U2VsZWN0aW9uID0gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFbXB0eSA9IHNpemUgPT09IDA7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5vblRyYW5zbGF0aW9uKCksXG5cdFx0XHQodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHJhbnNsYXRpb25zID0gbmV3IFN1bW1hcmllc1RyYW5zbGF0aW9ucyhcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNEaXN0aW5jdFZhbHVlc1Rvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQXZlcmFnZVRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzTWluVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNNYXhUb29sdGlwLFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc01lZFRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQ291bnRUb29sdGlwKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0aXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXM6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXMgIT09IG51bGw7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbCc7XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJlbmFibGVkICYmIHN1bW1hcmllcyAmJiAhc291cmNlRW1wdHlcIj5cblxuXHQ8ZGl2ICpuZ0lmPVwiY2hlY2tib3hTZWxlY3Rpb25cIlxuXHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLWNlbGwgZ3VpLXJvdy1jaGVja2JveCBndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuXG5cdCBndWktb3ZlcmZsb3ctaGlkZGVuIGd1aS1yZWxhdGl2ZSBndWktcHktMCBndWktcHgtNiBndWktYm94LWJvcmRlclxuXHQgZ3VpLWxlYWRpbmctNCBndWktd2hpdGVzcGFjZS1ub3dyYXAgZ3VpLW92ZXJmbG93LWVsbGlwc2lzXCI+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBoZWFkZXJDb2x1bW5zXCJcblx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtY2VsbFwiPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN1bW1hcmllcyAmJiAhIXN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQpXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5jb3VudFRvb2x0aXBcIj57eydzdW1tYXJpZXNDb3VudCcgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50IH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdClcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLmRpc3RpbmN0VG9vbHRpcFwiPnt7J3N1bW1hcmllc0Rpc3QnIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSlcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidTdW0nXCIgLS0+XG5cdFx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZzdW07PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNTdW0nIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSlcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInQXZlcmFnZSdcIi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVhblwiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5fPC9zcGFuPjxzcGFuPlg8L3NwYW4+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5hdmVyYWdlVG9vbHRpcFwiPnt7J3N1bW1hcmllc0F2ZycgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UgfX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01pbidcIj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLm1pblRvb2x0aXBcIj5cblx0XHRcdFx0XHRcdFx0e3snc3VtbWFyaWVzTWluJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbiB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heClcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWF4J1wiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZvcjs8L3NwYW4+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLm1heFRvb2x0aXBcIj5cblx0XHRcdFx0XHRcdFx0e3snc3VtbWFyaWVzTWF4JyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXggfX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWVkaWFuJ1wiLS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWRpYW5cIj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+fjwvc3Bhbj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWVkVG9vbHRpcFwiPnt7J3N1bW1hcmllc01lZCcgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbiB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5KVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdDxzcGFuPnt7J3N1bW1hcmllc1RydXRoeScgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kpXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0PHNwYW4+e3snc3VtbWFyaWVzRmFsc3knIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSB9fTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cdDwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cbiJdfQ==