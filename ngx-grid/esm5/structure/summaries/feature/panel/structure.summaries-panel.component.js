/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesEventRepository } from '../../core/api/summaries.event-repository';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { TranslationFacade } from '../../../../l10n/core/api/translation.facade';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { CompositionId } from '../../../../composition/core/api/composition.id';
var StructureSummariesPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesPanelComponent, _super);
    function StructureSummariesPanelComponent(changeDetectorRef, elementRef, structureId, compositionId, structureSummariesEventRepository, translationService, sourceWarehouse, rowSelectionTypeArchive, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.structureSummariesEventRepository = structureSummariesEventRepository;
        _this.translationService = translationService;
        _this.sourceWarehouse = sourceWarehouse;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.compositionWarehouse = compositionWarehouse;
        _this.sourceEmpty = false;
        _this.addClassToHost('gui-flex');
        _this.hermesSubscribe(_this.structureSummariesEventRepository.onSummariesChanged(_this.structureId.toReadModelRootId()), (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.summaries = event.getSummaries();
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
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        }));
        this.hermesSubscribe(this.sourceWarehouse.onEntitiesSize(this.structureId), (/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceEmpty = size === 0;
        }));
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
        }));
        this.hermesSubscribe(this.translationService.onTranslation(), (/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) {
            _this.summariesTranslations = new SummariesTranslations(translation.summariesDistinctValuesTooltip, translation.summariesAverageTooltip, translation.summariesMinTooltip, translation.summariesMaxTooltip, translation.summariesMedTooltip, translation.summariesCountTooltip);
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
                    template: "<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t<div *ngIf=\"checkboxSelection\"\n\t\t class=\"gui-structure-summaries-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t</div>\n\n\t<div *ngFor=\"let column of headerColumns\"\n\t\t [style.width.px]=\"column.width\"\n\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.countTooltip\">{{'summariesCount' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.distinctTooltip\">{{'summariesDist' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\t{{'summariesSum' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.averageTooltip\">{{'summariesAvg' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.minTooltip\">\n\t\t\t\t\t\t\t{{'summariesMin' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.maxTooltip\">\n\t\t\t\t\t\t\t{{'summariesMax' | guiTranslate}}\n\t\t\t\t\t\t</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t<span [gui-tooltip]=\"summariesTranslations.medTooltip\">{{'summariesMed' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesTruthy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t<span>{{'summariesFalsy' | guiTranslate}}</span>\n\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSummariesPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: CompositionId },
        { type: SummariesEventRepository },
        { type: TranslationFacade },
        { type: SourceWarehouse },
        { type: RowSelectionTypeArchive },
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
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.checkboxSelection;
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
    StructureSummariesPanelComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureSummariesEventRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.sourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.rowSelectionTypeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvZmVhdHVyZS9wYW5lbC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFHaEY7SUFNc0QsNERBQWM7SUFlbkUsMENBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGlDQUEyRCxFQUMzRCxrQkFBcUMsRUFDckMsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELG9CQUEwQztRQVI5RCxZ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RCxDQU1zRCxjQUFjLEdBZ0ZuRTtTQWhGWSxnQ0FBZ0M7OztJQUU1QyxtREFDaUI7O0lBRWpCLHVEQUE2Qjs7SUFFN0IseURBQThDOztJQUU5QyxxREFBNEI7O0lBRTVCLGlFQUE2Qzs7SUFFN0MsNkRBQTJCOzs7OztJQUVmLDZEQUFxRDs7Ozs7SUFFOUQsdURBQXlDOzs7OztJQUN6Qyx5REFBNkM7Ozs7O0lBQzdDLDZFQUE0RTs7Ozs7SUFDNUUsOERBQXNEOzs7OztJQUN0RCwyREFBaUQ7Ozs7O0lBQ2pELG1FQUFpRTs7Ozs7SUFDakUsZ0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWxdW2VuYWJsZWRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdHN1bW1hcmllczogTWFwPHN0cmluZywgYW55PjtcblxuXHRzdW1tYXJpZXNUcmFuc2xhdGlvbnM6IFN1bW1hcmllc1RyYW5zbGF0aW9ucztcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnk6IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeS5vblN1bW1hcmllc0NoYW5nZWQodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKSxcblx0XHRcdChldmVudDogU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzID0gZXZlbnQuZ2V0U3VtbWFyaWVzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodHlwZTogUm93U2VsZWN0aW9uVHlwZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNoZWNrYm94U2VsZWN0aW9uID0gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFbXB0eSA9IHNpemUgPT09IDA7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5vblRyYW5zbGF0aW9uKCksXG5cdFx0XHQodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3VtbWFyaWVzVHJhbnNsYXRpb25zID0gbmV3IFN1bW1hcmllc1RyYW5zbGF0aW9ucyhcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNEaXN0aW5jdFZhbHVlc1Rvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQXZlcmFnZVRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzTWluVG9vbHRpcCxcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5zdW1tYXJpZXNNYXhUb29sdGlwLFxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uLnN1bW1hcmllc01lZFRvb2x0aXAsXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24uc3VtbWFyaWVzQ291bnRUb29sdGlwKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0aXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXM6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXMgIT09IG51bGw7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbCc7XG5cdH1cbn1cbiJdfQ==