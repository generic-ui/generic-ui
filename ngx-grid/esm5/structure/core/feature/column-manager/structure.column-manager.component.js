/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/domain-api/composition.command-invoker';
import { CompositionId } from '../../../../composition/domain/composition.id';
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
            this.compositionCommandService.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnDefinitionId(), this.compositionId);
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
        { type: CompositionCommandInvoker },
        { type: CompositionWarehouse }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRzlFO0lBMkJxRCwyREFBYztJQU1sRSx5Q0FBb0IsaUJBQW9DLEVBQzdDLGFBQTRCLEVBQzVCLHlCQUFvRCxFQUNwRCwyQkFBaUQ7UUFINUQsWUFJQyxpQkFBTyxTQUNQO1FBTG1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCOztJQUU1RCxDQUFDOzs7O0lBRUQsa0RBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFiQSxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBdUM7WUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBZCxDQUFjLEVBQUM7aUJBQzFCLE1BQU07Ozs7O1lBQUMsVUFBQyxXQUFXLEVBQUUsWUFBWSxJQUFLLE9BQUEsV0FBVyxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1lBRTdFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0RBQVk7Ozs7SUFBWixVQUFhLE1BQStCO1FBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRzthQUFNO1lBQ04sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEc7SUFDRixDQUFDOztnQkFoRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSx5Y0FrQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsc0NBQXNDLEVBQUUsTUFBTTtxQkFDOUM7aUJBQ0Q7Ozs7Z0JBcENpQyxpQkFBaUI7Z0JBTzFDLGFBQWE7Z0JBRGIseUJBQXlCO2dCQUZ6QixvQkFBb0I7O0lBdUU3QixzQ0FBQztDQUFBLEFBakVELENBMkJxRCxjQUFjLEdBc0NsRTtTQXRDWSwrQkFBK0I7OztJQUUzQyxrREFBd0M7O0lBRXhDLDhEQUE0Qjs7Ozs7SUFFaEIsNERBQTRDOzs7OztJQUNyRCx3REFBb0M7Ozs7O0lBQ3BDLG9FQUE0RDs7Ozs7SUFDNUQsc0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8b2w+XG5cdFx0XHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZUNvbHVtbihjb2x1bW4pXCI+XG5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHQgIFtkaXNhYmxlZF09XCJlbmFibGVkQ29sdW1uc0NvdW50ID09PSAxICYmIGNvbHVtbi5pc0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cblx0XHRcdDwvbGk+XG5cdFx0PC9vbD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRlbmFibGVkQ29sdW1uc0NvdW50OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZENvbHVtbnNDb3VudCA9IHRoaXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGMpID0+ICtjLmlzRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlKTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxufVxuIl19