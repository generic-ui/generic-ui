/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
var StructureColumnManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnManagerComponent, _super);
    function StructureColumnManagerComponent(changeDetectorRef, elementRef, compositionId, compositionCommandInvoker, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionId = compositionId;
        _this.compositionCommandInvoker = compositionCommandInvoker;
        _this.compositionWarehouse = compositionWarehouse;
        _this.addClassToHost('gui-block');
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
        this.hermesSubscribe(this.compositionWarehouse.onAllColumns(this.compositionId), (/**
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
            this.compositionCommandInvoker.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandInvoker.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnManagerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-manager';
    };
    StructureColumnManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-manager]',
                    template: "\n\n\t\t<ol class=\"gui-p-0 gui-my-4 gui-mx-0 gui-list-none gui-overflow-auto\">\n\t\t\t<li *ngFor=\"let column of columns\"\n\t\t\t\t(click)=\"toggleColumn(column)\"\n\t\t\t\tclass=\"gui-p-6 gui-cursor-pointer\">\n\n\t\t\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t\t\t  [disabled]=\"enabledColumnsCount === 1 && column.isEnabled()\">\n\n\t\t\t\t\t<ng-container\n\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t\t\t</ng-container>\n\t\t\t\t</gui-checkbox>\n\n\t\t\t</li>\n\t\t</ol>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnManagerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
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
    StructureColumnManagerComponent.prototype.compositionCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUdoRjtJQXlCcUQsMkRBQWM7SUFNbEUseUNBQW9CLGlCQUFvQyxFQUNyRCxVQUFzQixFQUNkLGFBQTRCLEVBQzVCLHlCQUFvRCxFQUNwRCxvQkFBMEM7UUFKckQsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FHcEM7UUFSbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHcEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVEEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7O1FBQzFELFVBQUMsT0FBdUM7WUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBZCxDQUFjLEVBQUM7aUJBQzFCLE1BQU07Ozs7O1lBQUMsVUFBQyxXQUFXLEVBQUUsWUFBWSxJQUFLLE9BQUEsV0FBVyxHQUFHLFlBQVksRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQzlFLENBQUMsRUFDRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzREFBWTs7OztJQUFaLFVBQWEsTUFBK0I7UUFDM0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pHO2FBQU07WUFDTixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRztJQUNGLENBQUM7Ozs7O0lBRVMseURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLDhCQUE4QixDQUFDO0lBQ3ZDLENBQUM7O2dCQWpFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsUUFBUSxFQUFFLHlqQkFtQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFsQ2lDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQU9qRSxhQUFhO2dCQURiLHlCQUF5QjtnQkFGekIsb0JBQW9COztJQXdFN0Isc0NBQUM7Q0FBQSxBQWxFRCxDQXlCcUQsY0FBYyxHQXlDbEU7U0F6Q1ksK0JBQStCOzs7SUFFM0Msa0RBQXdDOztJQUV4Qyw4REFBNEI7Ozs7O0lBRWhCLDREQUE0Qzs7Ozs7SUFFckQsd0RBQW9DOzs7OztJQUNwQyxvRUFBNEQ7Ozs7O0lBQzVELCtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8b2wgY2xhc3M9XCJndWktcC0wIGd1aS1teS00IGd1aS1teC0wIGd1aS1saXN0LW5vbmUgZ3VpLW92ZXJmbG93LWF1dG9cIj5cblx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuXHRcdFx0XHQoY2xpY2spPVwidG9nZ2xlQ29sdW1uKGNvbHVtbilcIlxuXHRcdFx0XHRjbGFzcz1cImd1aS1wLTYgZ3VpLWN1cnNvci1wb2ludGVyXCI+XG5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHQgIFtkaXNhYmxlZF09XCJlbmFibGVkQ29sdW1uc0NvdW50ID09PSAxICYmIGNvbHVtbi5pc0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4udmlld1RlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdFx0XHQ8L2xpPlxuXHRcdDwvb2w+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0ZW5hYmxlZENvbHVtbnNDb3VudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmVuYWJsZWRDb2x1bW5zQ291bnQgPSB0aGlzLmNvbHVtbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAubWFwKChjKSA9PiArYy5pc0VuYWJsZWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHRvZ2dsZUNvbHVtbihjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKGNvbHVtbi5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLmRpc2FibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZW5hYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyJztcblx0fVxufVxuIl19