/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../cell-view';
var ViewTemplatesComponent = /** @class */ (function () {
    function ViewTemplatesComponent() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    ViewTemplatesComponent.prototype.getTemplate = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.CHIP:
                return this.chipTemplate;
            case CellView.LINK:
                return this.linkTemplate;
            case CellView.IMAGE:
                return this.imageTemplate;
            case CellView.CHECKBOX:
                return this.checkboxTemplate;
            case CellView.BOLD:
                return this.boldTemplate;
            case CellView.ITALIC:
                return this.italicTemplate;
            case CellView.CUSTOM:
                return this.customTemplate;
            case CellView.FUNCTION:
                return this.functionTemplate;
            default:
                return this.textTemplate;
        }
    };
    ViewTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #text let-element=\"element\">\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #number let-element=\"element\">\n\t\t\t<span class=\"gui-cell-number\">\n\t\t\t\t{{ element }}\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #chip let-element=\"element\">\n\t\t\t<gui-chip>\n\t\t\t\t{{ element }}\n\t\t\t</gui-chip>\n\t\t</ng-template>\n\n\t\t<ng-template #link let-element=\"element\">\n\t\t\t<a gui-button link=\"true\" href=\"{{ element }}\">\n\t\t\t\t{{ element }}\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #image let-element=\"element\">\n\t\t\t<img src=\"{{ element }}\"/>\n\t\t</ng-template>\n\n\t\t<ng-template #checkbox let-element=\"element\">\n\t\t\t<span class=\"gui-cell-boolean\">\n\t\t\t\t<gui-checkbox [checked]=\"!!element\" [disabled]=\"true\"></gui-checkbox>\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bold let-element=\"element\">\n\t\t\t<span class=\"gui-bold\">{{ element }}</span>\n\t\t</ng-template>\n\n\t\t<ng-template #italic let-element=\"element\">\n\t\t\t<span class=\"gui-italic\">{{ element }}</span>\n\t\t</ng-template>\n\n\t\t<ng-template #custom let-element=\"element\" >\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #function let-element=\"element\" >\n\t\t\t<gui-function-view [element]=\"element\" ></gui-function-view>\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    ViewTemplatesComponent.propDecorators = {
        textTemplate: [{ type: ViewChild, args: ['text', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        chipTemplate: [{ type: ViewChild, args: ['chip', { read: TemplateRef, static: true },] }],
        linkTemplate: [{ type: ViewChild, args: ['link', { read: TemplateRef, static: true },] }],
        imageTemplate: [{ type: ViewChild, args: ['image', { read: TemplateRef, static: true },] }],
        checkboxTemplate: [{ type: ViewChild, args: ['checkbox', { read: TemplateRef, static: true },] }],
        boldTemplate: [{ type: ViewChild, args: ['bold', { read: TemplateRef, static: true },] }],
        italicTemplate: [{ type: ViewChild, args: ['italic', { read: TemplateRef, static: true },] }],
        customTemplate: [{ type: ViewChild, args: ['custom', { read: TemplateRef, static: true },] }],
        functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }]
    };
    return ViewTemplatesComponent;
}());
export { ViewTemplatesComponent };
if (false) {
    /** @type {?} */
    ViewTemplatesComponent.prototype.textTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.chipTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.linkTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.imageTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.checkboxTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.boldTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.italicTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.customTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.functionTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDO0lBQUE7SUF5SEEsQ0FBQzs7Ozs7SUFwQ0EsNENBQVc7Ozs7SUFBWCxVQUFZLElBQWM7UUFFekIsUUFBUSxJQUFJLEVBQUU7WUFFYixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7Z0JBdkhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsazFDQWtEVDtpQkFDRDs7OytCQUdDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3ZELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3JELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBR3JELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBR3RELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3ZELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBR3ZELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBdUMzRCw2QkFBQztDQUFBLEFBekhELElBeUhDO1NBcEVZLHNCQUFzQjs7O0lBRWxDLDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyw4Q0FDK0I7O0lBRS9CLDhDQUMrQjs7SUFFL0IsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyxnREFDaUM7O0lBRWpDLGtEQUNtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLW51bWJlclwiPlxuXHRcdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hpcCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktY2hpcD5cblx0XHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdFx0PC9ndWktY2hpcD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNsaW5rIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGEgZ3VpLWJ1dHRvbiBsaW5rPVwidHJ1ZVwiIGhyZWY9XCJ7eyBlbGVtZW50IH19XCI+XG5cdFx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHRcdDwvYT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpbWFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxpbWcgc3JjPVwie3sgZWxlbWVudCB9fVwiLz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGVja2JveCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cIiEhZWxlbWVudFwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9sZCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWJvbGRcIj57eyBlbGVtZW50IH19PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2l0YWxpYyBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWl0YWxpY1wiPnt7IGVsZW1lbnQgfX08L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY3VzdG9tIGxldC1lbGVtZW50PVwiZWxlbWVudFwiID5cblx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNmdW5jdGlvbiBsZXQtZWxlbWVudD1cImVsZW1lbnRcIiA+XG5cdFx0XHQ8Z3VpLWZ1bmN0aW9uLXZpZXcgW2VsZW1lbnRdPVwiZWxlbWVudFwiID48L2d1aS1mdW5jdGlvbi12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCd0ZXh0JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHRleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdudW1iZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bnVtYmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hpcCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbGluaycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRsaW5rVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaW1hZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aW1hZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JvbGQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9sZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2l0YWxpYycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpdGFsaWNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjdXN0b20nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZnVuY3Rpb24nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZnVuY3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoaXBUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW5rVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLmltYWdlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrYm94VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9sZFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRhbGljVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXN0b21UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5GVU5DVElPTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25UZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=