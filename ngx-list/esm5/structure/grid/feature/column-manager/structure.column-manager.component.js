/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../composition/core/domain/composition.id';
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
        this.compositionWarehouse
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
                    template: "\n\n\t\t<ol class=\"gui-p-0 gui-my-4 gui-mx-0 gui-list-none gui-overflow-auto\">\n\t\t\t<li *ngFor=\"let column of columns\"\n\t\t\t\t(click)=\"toggleColumn(column)\"\n\t\t\t\tclass=\"gui-p-6 gui-cursor-pointer\">\n\n\t\t\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t\t\t  [disabled]=\"enabledColumnsCount === 1 && column.isEnabled()\">\n\n\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t\t\t</ng-container>\n\t\t\t\t</gui-checkbox>\n\n\t\t\t</li>\n\t\t</ol>\n\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUduRjtJQXlCcUQsMkRBQWM7SUFNbEUseUNBQW9CLGlCQUFvQyxFQUNyRCxVQUFzQixFQUNkLGFBQTRCLEVBQzVCLHlCQUFvRCxFQUNwRCxvQkFBMEM7UUFKckQsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FHcEM7UUFSbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHcEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLG9CQUFvQjthQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsT0FBTztpQkFDNUIsR0FBRzs7OztZQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQWQsQ0FBYyxFQUFDO2lCQUMxQixNQUFNOzs7OztZQUFDLFVBQUMsV0FBVyxFQUFFLFlBQVksSUFBSyxPQUFBLFdBQVcsR0FBRyxZQUFZLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztZQUU3RSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHNEQUFZOzs7O0lBQVosVUFBYSxNQUErQjtRQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7Ozs7SUFFUyx5REFBZTs7OztJQUF6QjtRQUNDLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Z0JBckVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUUsMmpCQW1CVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWxDaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBT2pFLGFBQWE7Z0JBRGIseUJBQXlCO2dCQUZ6QixvQkFBb0I7O0lBNEU3QixzQ0FBQztDQUFBLEFBdEVELENBeUJxRCxjQUFjLEdBNkNsRTtTQTdDWSwrQkFBK0I7OztJQUUzQyxrREFBd0M7O0lBRXhDLDhEQUE0Qjs7Ozs7SUFFaEIsNERBQTRDOzs7OztJQUVyRCx3REFBb0M7Ozs7O0lBQ3BDLG9FQUE0RDs7Ozs7SUFDNUQsK0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXJdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxvbCBjbGFzcz1cImd1aS1wLTAgZ3VpLW15LTQgZ3VpLW14LTAgZ3VpLWxpc3Qtbm9uZSBndWktb3ZlcmZsb3ctYXV0b1wiPlxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVDb2x1bW4oY29sdW1uKVwiXG5cdFx0XHRcdGNsYXNzPVwiZ3VpLXAtNiBndWktY3Vyc29yLXBvaW50ZXJcIj5cblxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImNvbHVtbi5pc0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0XHRcdCAgW2Rpc2FibGVkXT1cImVuYWJsZWRDb2x1bW5zQ291bnQgPT09IDEgJiYgY29sdW1uLmlzRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZXh0OiBjb2x1bW4uY29udGV4dFwiPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRcdFx0PC9saT5cblx0XHQ8L29sPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGVuYWJsZWRDb2x1bW5zQ291bnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkFsbENvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmVuYWJsZWRDb2x1bW5zQ291bnQgPSB0aGlzLmNvbHVtbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAubWFwKChjKSA9PiArYy5pc0VuYWJsZWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSk7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUNvbHVtbihjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKGNvbHVtbi5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLmRpc2FibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZW5hYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyJztcblx0fVxufVxuIl19