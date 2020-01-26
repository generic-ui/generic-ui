/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../../../composition/ui-api/composition-read-model.service';
import { CompositionCommandService } from '../../../../../composition/ui-api/composition.command-service';
var StructureMenuColumnManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureMenuColumnManagerComponent, _super);
    function StructureMenuColumnManagerComponent(changeDetectorRef, compositionCommandService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureMenuColumnManagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionReadModelService
            .onAllColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
            _this.enabledColumnsCount = _this.columns
                .map((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return +c.isEnabled(); }))
                .reduce((/**
             * @param {?} accumulator
             * @param {?} currentValue
             * @return {?}
             */
            function (accumulator, currentValue) { return accumulator + currentValue; }));
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureMenuColumnManagerComponent.prototype.toggleColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandService.disableColumn(column.getColumnId());
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnId());
        }
    };
    StructureMenuColumnManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-menu-column-manager',
                    template: "\n\n\t\t<div *ngFor=\"let column of columns\">\n\n\t\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t\t  [disabled]=\"enabledColumnsCount === 1 && column.isEnabled()\"\n\t\t\t\t\t\t  (click)=\"toggleColumn(column)\">\n\n\t\t\t\t<ng-container\n\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t\t</ng-container>\n\t\t\t</gui-checkbox>\n\t\t\t\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-menu-column-manager]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    StructureMenuColumnManagerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CompositionCommandService },
        { type: CompositionReadModelService }
    ]; };
    return StructureMenuColumnManagerComponent;
}(SmartComponent));
export { StructureMenuColumnManagerComponent };
if (false) {
    /** @type {?} */
    StructureMenuColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureMenuColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5tZW51LWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRS9HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRzFHO0lBeUJ5RCwrREFBYztJQU10RSw2Q0FBb0IsaUJBQW9DLEVBQzdDLHlCQUFvRCxFQUNwRCwyQkFBd0Q7UUFGbkUsWUFHQyxpQkFBTyxTQUNQO1FBSm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCOztJQUVuRSxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQSxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBdUM7WUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBZCxDQUFjLEVBQUM7aUJBQzFCLE1BQU07Ozs7O1lBQUMsVUFBQyxXQUFXLEVBQUUsWUFBWSxJQUFLLE9BQUEsV0FBVyxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1lBRTdFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMERBQVk7Ozs7SUFBWixVQUFhLE1BQStCO1FBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7Z0JBNURELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUUsa2JBZ0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLDJDQUEyQyxFQUFFLE1BQU07cUJBQ25EO2lCQUNEOzs7O2dCQWpDaUMsaUJBQWlCO2dCQU0xQyx5QkFBeUI7Z0JBRnpCLDJCQUEyQjs7SUFrRXBDLDBDQUFDO0NBQUEsQUE3REQsQ0F5QnlELGNBQWMsR0FvQ3RFO1NBcENZLG1DQUFtQzs7O0lBRS9DLHNEQUF3Qzs7SUFFeEMsa0VBQTRCOzs7OztJQUVoQixnRUFBNEM7Ozs7O0lBQ3JELHdFQUE0RDs7Ozs7SUFDNUQsMEVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cblxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0ICBbZGlzYWJsZWRdPVwiZW5hYmxlZENvbHVtbnNDb3VudCA9PT0gMSAmJiBjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0ICAoY2xpY2spPVwidG9nZ2xlQ29sdW1uKGNvbHVtbilcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGVuYWJsZWRDb2x1bW5zQ291bnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25BbGxDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5lbmFibGVkQ29sdW1uc0NvdW50ID0gdGhpcy5jb2x1bW5zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLm1hcCgoYykgPT4gK2MuaXNFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWUpO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVDb2x1bW4oY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChjb2x1bW4uaXNFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5kaXNhYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5JZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLmVuYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uSWQoKSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=