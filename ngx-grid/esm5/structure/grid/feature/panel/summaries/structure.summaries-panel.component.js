/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../../summaries/core/api/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { SummariesTranslations } from './structure.summaries-translations';
var StructureSummariesPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesPanelComponent, _super);
    function StructureSummariesPanelComponent(changeDetectorRef, structureId, structureSummariesUiEventsRepository, translationService, sourceReadModelService, compositionReadModelService) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        _this.translationService = translationService;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.sourceEmpty = false;
        _this.structureSummariesUiEventsRepository
            .onSummariesChanged(_this.structureId.toReadModelRootId())
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.summaries = event.getSummaries();
            _this.changeDetectorRef.detectChanges();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceReadModelService
            .onEntitiesSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceEmpty = size === 0;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
        this.translationService
            .onTranslation()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) {
            _this.summariesTranslations = new SummariesTranslations(translation.summariesDistinctValuesTooltip, translation.summariesAverageTooltip, translation.summariesMinTooltip, translation.summariesMaxTooltip, translation.summariesMedTooltip, translation.summariesCountTooltip);
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} summaries
     * @return {?}
     */
    StructureSummariesPanelComponent.prototype.isSummariesTypePresent = /**
     * @param {?} summaries
     * @return {?}
     */
    function (summaries) {
        return summaries !== undefined && summaries !== null;
    };
    StructureSummariesPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-summaries-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | translate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | translate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | translate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>{{'summariesTruthy' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>{{'summariesFalsy' | translate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-summaries-panel]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    StructureSummariesPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureSummariesUiEventsRepository },
        { type: TranslationService },
        { type: SourceWarehouse },
        { type: CompositionWarehouse }
    ]; };
    StructureSummariesPanelComponent.propDecorators = {
        enabled: [{ type: Input }]
    };
    return StructureSummariesPanelComponent;
}(SmartComponent));
export { StructureSummariesPanelComponent };
if (false) {
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.sourceEmpty;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.summaries;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.summariesTranslations;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureSummariesUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHM0U7SUE2R3NELDREQUFjO0lBYW5FLDBDQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsb0NBQTBFLEVBQzFFLGtCQUFzQyxFQUN0QyxzQkFBdUMsRUFDdkMsMkJBQWlEO1FBTHJFLFlBTUMsa0JBQU0saUJBQWlCLENBQUMsU0FXeEI7UUFqQjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMENBQW9DLEdBQXBDLG9DQUFvQyxDQUFzQztRQUMxRSx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDRCQUFzQixHQUF0Qixz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bnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9hcGkvc3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtdHJhbnNsYXRpb25zJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlZCAmJiBzdW1tYXJpZXMgJiYgIXNvdXJjZUVtcHR5XCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBoZWFkZXJDb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjb2x1bW4ud2lkdGhcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1jZWxsXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN1bW1hcmllcyAmJiAhIXN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKVwiPlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5jb3VudFRvb2x0aXBcIj57eydzdW1tYXJpZXNDb3VudCcgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5jb3VudCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdClcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMuZGlzdGluY3RUb29sdGlwXCI+e3snc3VtbWFyaWVzRGlzdCcgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidTdW0nXCIgLS0+XG5cdFx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZzdW07PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNTdW0nIHwgdHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVhblwiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+Xzwvc3Bhbj48c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5hdmVyYWdlVG9vbHRpcFwiPnt7J3N1bW1hcmllc0F2ZycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWluJ1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWluVG9vbHRpcFwiPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNNaW4nIHwgdHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbiB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+Jm9yOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5tYXhUb29sdGlwXCI+XG5cdFx0XHRcdFx0XHRcdHt7J3N1bW1hcmllc01heCcgfCB0cmFuc2xhdGV9fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWVkaWFuJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVkaWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5+PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cInN1bW1hcmllc1RyYW5zbGF0aW9ucy5tZWRUb29sdGlwXCI+e3snc3VtbWFyaWVzTWVkJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbiB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eydzdW1tYXJpZXNUcnV0aHknIHwgdHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3snc3VtbWFyaWVzRmFsc3knIHwgdHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdHN1bW1hcmllczogTWFwPHN0cmluZywgYW55PjtcblxuXHRzdW1tYXJpZXNUcmFuc2xhdGlvbnM6IFN1bW1hcmllc1RyYW5zbGF0aW9ucztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU3VtbWFyaWVzQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN1bW1hcmllcyA9IGV2ZW50LmdldFN1bW1hcmllcygpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRW1wdHkgPSBzaXplID09PSAwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Vcblx0XHRcdC5vblRyYW5zbGF0aW9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXNUcmFuc2xhdGlvbnMgPSBuZXcgU3VtbWFyaWVzVHJhbnNsYXRpb25zKFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc0Rpc3RpbmN0VmFsdWVzVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNBdmVyYWdlVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNNaW5Ub29sdGlwLFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc01heFRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzTWVkVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNDb3VudFRvb2x0aXApO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXM6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXMgIT09IG51bGw7XG5cdH1cbn1cbiJdfQ==