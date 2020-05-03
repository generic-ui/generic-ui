/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Input } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { ContanierTemplate } from '../../../lib/container/template/contanier-template';
/**
 * @abstract
 */
var GuiListGateway = /** @class */ (function () {
    function GuiListGateway() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GuiListGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ContanierTemplate(this.template, templateRef);
    };
    GuiListGateway.propDecorators = {
        listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
        items: [{ type: Input }],
        template: [{ type: Input }]
    };
    return GuiListGateway;
}());
export { GuiListGateway };
if (false) {
    /** @type {?} */
    GuiListGateway.prototype.listItem;
    /** @type {?} */
    GuiListGateway.prototype.items;
    /** @type {?} */
    GuiListGateway.prototype.template;
    /** @type {?} */
    GuiListGateway.prototype.containerTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFFdkY7SUFBQTtJQW9CQSxDQUFDOzs7OztJQVBBLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXBFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7MkJBaEJBLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBR25ELEtBQUs7MkJBR0wsS0FBSzs7SUFZUCxxQkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJxQixjQUFjOzs7SUFFbkMsa0NBQytCOztJQUUvQiwrQkFDa0I7O0lBRWxCLGtDQUNnQzs7SUFFaEMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhbmllclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnRhaW5lci90ZW1wbGF0ZS9jb250YW5pZXItdGVtcGxhdGUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpTGlzdEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdEl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RJdGVtOiBHdWlMaXN0SXRlbUNvbXBvbmVudDtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdGNvbnRhaW5lclRlbXBsYXRlOiBDb250YW5pZXJUZW1wbGF0ZTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMubGlzdEl0ZW0gPyB0aGlzLmxpc3RJdGVtLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGUgPSBuZXcgQ29udGFuaWVyVGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgdGVtcGxhdGVSZWYpO1xuXHR9XG5cbn1cbiJdfQ==