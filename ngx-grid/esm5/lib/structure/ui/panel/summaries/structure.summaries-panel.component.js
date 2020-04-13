/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../ui-api/summaries/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../composition/ui-api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
var StructureSummariesPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesPanelComponent, _super);
    function StructureSummariesPanelComponent(changeDetectorRef, structureId, structureSummariesUiEventsRepository, sourceReadModelService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.sourceEmpty = false;
        _this.structureSummariesUiEventsRepository
            .onSummariesChanged(_this.structureId)
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
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Number of items in the grid'\">Count</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Distinct Values'\">Dist</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\tSum\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Average'\">Avg</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Min'\">\n\t\t\t\t\t\t\tMin\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Max'\">\n\t\t\t\t\t\t\tMax\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Median'\">Med</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>Truthy</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>Falsy</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
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
        { type: StructureSourceWarehouse },
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
    StructureSummariesPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUc3RjtJQTZHc0QsNERBQWM7SUFXbkUsMENBQW9CLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixvQ0FBMEUsRUFDMUUsc0JBQWdELEVBQ3ZDLDJCQUFpRDtRQUpyRSxZQUtDLGlCQUFPLFNBWVA7UUFqQm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMENBQW9DLEdBQXBDLG9DQUFvQyxDQUFzQztRQUMxRSw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ3ZDLGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7UUFWckUsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFhNUIsS0FBSSxDQUFDLG9DQUFvQzthQUN2QyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BDLElBQUksQ0FDSixLQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBcUM7WUFFaEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7UUFBQSxpQkFzQkM7UUFwQkEsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMkJBQTJCO2FBQzlCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7O0lBRUQsaUVBQXNCOzs7O0lBQXRCLFVBQXVCLFNBQWlCO1FBQ3ZDLE9BQU8sU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDO0lBQ3RELENBQUM7O2dCQXJLRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLDQ1SUFvR1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsdUNBQXVDLEVBQUUsTUFBTTtxQkFDL0M7aUJBQ0Q7Ozs7Z0JBdkhpQyxpQkFBaUI7Z0JBRzFDLFdBQVc7Z0JBQ1gsb0NBQW9DO2dCQUlwQyx3QkFBd0I7Z0JBSHhCLG9CQUFvQjs7OzBCQXFIM0IsS0FBSzs7SUF1RFAsdUNBQUM7Q0FBQSxBQXRLRCxDQTZHc0QsY0FBYyxHQXlEbkU7U0F6RFksZ0NBQWdDOzs7SUFFNUMsbURBQ2lCOztJQUVqQix1REFBNkI7O0lBRTdCLHlEQUE4Qzs7SUFFOUMscURBQTRCOzs7OztJQUVoQiw2REFBNEM7Ozs7O0lBQ3JELHVEQUFnQzs7Ozs7SUFDaEMsZ0ZBQWtGOzs7OztJQUNsRixrRUFBd0Q7Ozs7O0lBQ3hELHVFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZWQgJiYgc3VtbWFyaWVzICYmICFzb3VyY2VFbXB0eVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaGVhZGVyQ29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtY2VsbFwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzdW1tYXJpZXMgJiYgISFzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSlcIj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5jb3VudClcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInTnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBncmlkJ1wiPkNvdW50PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidEaXN0aW5jdCBWYWx1ZXMnXCI+RGlzdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidTdW0nXCIgLS0+XG5cdFx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdFx0ICBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZzdW07PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0XHRTdW1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVhblwiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+Xzwvc3Bhbj48c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiPkF2Zzwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWluJ1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInTWluJ1wiPlxuXHRcdFx0XHRcdFx0XHRNaW5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbiB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+Jm9yOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidNYXgnXCI+XG5cdFx0XHRcdFx0XHRcdE1heFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWVkaWFuJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVkaWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5+PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCI+TWVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbiB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5UcnV0aHk8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+RmFsc3k8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdHN1bW1hcmllczogTWFwPHN0cmluZywgYW55PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnlcblx0XHRcdC5vblN1bW1hcmllc0NoYW5nZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0dGhpcy5zdW1tYXJpZXMgPSBldmVudC5nZXRTdW1tYXJpZXMoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25FbnRpdGllc1NpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVtcHR5ID0gc2l6ZSA9PT0gMDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0aXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXM6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXMgIT09IG51bGw7XG5cdH1cbn1cbiJdfQ==