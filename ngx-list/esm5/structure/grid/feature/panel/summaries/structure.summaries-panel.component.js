/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../../summaries/core/api/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { SummariesTranslations } from './structure.summaries-translations';
var StructureSummariesPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesPanelComponent, _super);
    function StructureSummariesPanelComponent(changeDetectorRef, elementRef, structureId, structureSummariesUiEventsRepository, translationService, sourceReadModelService, compositionReadModelService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        _this.translationService = translationService;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.sourceEmpty = false;
        _this.addClassToHost('gui-flex');
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
    /**
     * @protected
     * @return {?}
     */
    StructureSummariesPanelComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-summaries-panel';
    };
    StructureSummariesPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-summaries-panel][enabled]',
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSummariesPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRXRGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzNFO0lBMEdzRCw0REFBYztJQWFuRSwwQ0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsb0NBQTBFLEVBQzFFLGtCQUFzQyxFQUN0QyxzQkFBdUMsRUFDdkMsMkJBQWlEO1FBTnJFLFlBT0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBYXBDO1FBcEI0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBDQUFvQyxHQUFwQyxvQ0FBb0MsQ0FBc0M7UUFDMUUsd0JBQWtCLEdBQWxCLGtC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OztJQUU5RCx1REFBeUM7Ozs7O0lBQ3pDLGdGQUEyRjs7Ozs7SUFDM0YsOERBQXVEOzs7OztJQUN2RCxrRUFBd0Q7Ozs7O0lBQ3hELHVFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvYXBpL3N0cnVjdHVyZS1zdW1tYXJpZXMudWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFN1bW1hcmllc1RyYW5zbGF0aW9ucyB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy10cmFuc2xhdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbF1bZW5hYmxlZF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZWQgJiYgc3VtbWFyaWVzICYmICFzb3VyY2VFbXB0eVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaGVhZGVyQ29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtY2VsbFwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzdW1tYXJpZXMgJiYgISFzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSlcIj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5jb3VudClcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMuY291bnRUb29sdGlwXCI+e3snc3VtbWFyaWVzQ291bnQnIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLmRpc3RpbmN0VG9vbHRpcFwiPnt7J3N1bW1hcmllc0Rpc3QnIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInU3VtJ1wiIC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHRcdCAgY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mc3VtOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdFx0e3snc3VtbWFyaWVzU3VtJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInQXZlcmFnZSdcIi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLW1lYW5cIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPl88L3NwYW4+PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMuYXZlcmFnZVRvb2x0aXBcIj57eydzdW1tYXJpZXNBdmcnIHwgZ3VpVHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01pbidcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JmFuZDs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwic3VtbWFyaWVzVHJhbnNsYXRpb25zLm1pblRvb2x0aXBcIj5cblx0XHRcdFx0XHRcdFx0e3snc3VtbWFyaWVzTWluJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heClcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNYXgnXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZvcjs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWF4VG9vbHRpcFwiPlxuXHRcdFx0XHRcdFx0XHR7eydzdW1tYXJpZXNNYXgnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXggfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01lZGlhbidcIi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLW1lZGlhblwiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+fjwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPlg8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCJzdW1tYXJpZXNUcmFuc2xhdGlvbnMubWVkVG9vbHRpcFwiPnt7J3N1bW1hcmllc01lZCcgfCBndWlUcmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+e3snc3VtbWFyaWVzVHJ1dGh5JyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7J3N1bW1hcmllc0ZhbHN5JyB8IGd1aVRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdHN1bW1hcmllczogTWFwPHN0cmluZywgYW55PjtcblxuXHRzdW1tYXJpZXNUcmFuc2xhdGlvbnM6IFN1bW1hcmllc1RyYW5zbGF0aW9ucztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnlcblx0XHRcdC5vblN1bW1hcmllc0NoYW5nZWQodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5zdW1tYXJpZXMgPSBldmVudC5nZXRTdW1tYXJpZXMoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25FbnRpdGllc1NpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVtcHR5ID0gc2l6ZSA9PT0gMDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG5cdFx0XHQub25UcmFuc2xhdGlvbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHJhbnNsYXRpb25zID0gbmV3IFN1bW1hcmllc1RyYW5zbGF0aW9ucyhcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNEaXN0aW5jdFZhbHVlc1Rvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQXZlcmFnZVRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzTWluVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNNYXhUb29sdGlwLFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc01lZFRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQ291bnRUb29sdGlwKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gc3VtbWFyaWVzICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzICE9PSBudWxsO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWwnO1xuXHR9XG59XG4iXX0=