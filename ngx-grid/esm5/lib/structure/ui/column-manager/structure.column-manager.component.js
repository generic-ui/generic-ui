/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
import { CompositionCommandService } from '../../../composition/ui-api/composition.command-service';
import { CompositionId } from '../../../composition/domain/composition-id';
var StructureColumnManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnManagerComponent, _super);
    function StructureColumnManagerComponent(changeDetectorRef, compositionId, compositionCommandService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionId = compositionId;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnManagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionReadModelService
            .onAllColumns(this.compositionId)
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
    StructureColumnManagerComponent.prototype.toggleColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandService.disableColumn(column.getColumnId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnId(), this.compositionId);
        }
    };
    StructureColumnManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-manager',
                    template: "\n\n\t\t<ol>\n\t\t\t<li *ngFor=\"let column of columns\"\n\t\t\t\t(click)=\"toggleColumn(column)\">\n\n\t\t\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t\t\t  [disabled]=\"enabledColumnsCount === 1 && column.isEnabled()\">\n\n\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t\t\t</ng-container>\n\t\t\t\t</gui-checkbox>\n\n\t\t\t</li>\n\t\t</ol>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-column-manager]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    StructureColumnManagerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CompositionId },
        { type: CompositionCommandService },
        { type: CompositionReadModelService }
    ]; };
    return StructureColumnManagerComponent;
}(SmartComponent));
export { StructureColumnManagerComponent };
if (false) {
    /** @type {?} */
    StructureColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFekcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRzNFO0lBMkJxRCwyREFBYztJQU1sRSx5Q0FBb0IsaUJBQW9DLEVBQzdDLGFBQTRCLEVBQzVCLHlCQUFvRCxFQUNwRCwyQkFBd0Q7UUFIbkUsWUFJQyxpQkFBTyxTQUNQO1FBTG1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCOztJQUVuRSxDQUFDOzs7O0lBRUQsa0RBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFiQSxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBdUM7WUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBZCxDQUFjLEVBQUM7aUJBQzFCLE1BQU07Ozs7O1lBQUMsVUFBQyxXQUFXLEVBQUUsWUFBWSxJQUFLLE9BQUEsV0FBVyxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1lBRTdFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0RBQVk7Ozs7SUFBWixVQUFhLE1BQStCO1FBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkY7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0RjtJQUNGLENBQUM7O2dCQWhFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLHljQWtCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxzQ0FBc0MsRUFBRSxNQUFNO3FCQUM5QztpQkFDRDs7OztnQkFwQ2lDLGlCQUFpQjtnQkFPMUMsYUFBYTtnQkFEYix5QkFBeUI7Z0JBRnpCLDJCQUEyQjs7SUF1RXBDLHNDQUFDO0NBQUEsQUFqRUQsQ0EyQnFELGNBQWMsR0FzQ2xFO1NBdENZLCtCQUErQjs7O0lBRTNDLGtEQUF3Qzs7SUFFeEMsOERBQTRCOzs7OztJQUVoQiw0REFBNEM7Ozs7O0lBQ3JELHdEQUFvQzs7Ozs7SUFDcEMsb0VBQTREOzs7OztJQUM1RCxzRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8b2w+XG5cdFx0XHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZUNvbHVtbihjb2x1bW4pXCI+XG5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHQgIFtkaXNhYmxlZF09XCJlbmFibGVkQ29sdW1uc0NvdW50ID09PSAxICYmIGNvbHVtbi5pc0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cblx0XHRcdDwvbGk+XG5cdFx0PC9vbD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRlbmFibGVkQ29sdW1uc0NvdW50OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkFsbENvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmVuYWJsZWRDb2x1bW5zQ291bnQgPSB0aGlzLmNvbHVtbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAubWFwKChjKSA9PiArYy5pc0VuYWJsZWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSk7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUNvbHVtbihjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKGNvbHVtbi5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLmRpc2FibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=