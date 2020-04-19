/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
var StructureFilterMenuComponent = /** @class */ (function () {
    function StructureFilterMenuComponent() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    StructureFilterMenuComponent.prototype.onColumnSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedColumnId = value;
    };
    StructureFilterMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-filter-menu',
                    template: "\n\t\t\n\t\t<gui-structure-column-selector\n\t\t\t\t(columnSelected)=\"onColumnSelect($event)\">\n\t\t</gui-structure-column-selector>\n\t\t\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-filter-menu]': 'true'
                    }
                }] }
    ];
    return StructureFilterMenuComponent;
}());
export { StructureFilterMenuComponent };
if (false) {
    /** @type {?} */
    StructureFilterMenuComponent.prototype.selectedColumnId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RGO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7SUFIQSxxREFBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O2dCQXJCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLGtKQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLG1DQUFtQyxFQUFFLE1BQU07cUJBQzNDO2lCQUNEOztJQVFELG1DQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FQWSw0QkFBNEI7OztJQUV4Qyx3REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtZmlsdGVyLW1lbnUnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFxuXHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1zZWxlY3RvclxuXHRcdFx0XHQoY29sdW1uU2VsZWN0ZWQpPVwib25Db2x1bW5TZWxlY3QoJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tc2VsZWN0b3I+XG5cdFx0XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3RydWN0dXJlLWZpbHRlci1tZW51XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpbHRlck1lbnVDb21wb25lbnQge1xuXG5cdHNlbGVjdGVkQ29sdW1uSWQ6IHN0cmluZztcblxuXHRvbkNvbHVtblNlbGVjdCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbklkID0gdmFsdWU7XG5cdH1cbn1cbiJdfQ==