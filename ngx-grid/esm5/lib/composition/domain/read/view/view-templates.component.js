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
            case CellView.NUMBER:
                return this.numberTemplate;
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
            case CellView.DATE:
                return this.dateTemplate;
            case CellView.BAR:
                return this.barTemplate;
            case CellView.PERCENTAGE_BAR:
                return this.percentageBarTemplate;
            case CellView.PERCENTAGE:
                return this.percentageTemplate;
            default:
                return this.textTemplate;
        }
    };
    ViewTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #text let-element=\"element\">\n\t\t\t<span class=\"gui-view-text\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-element=\"element\">\n\t\t\t<span class=\"gui-cell-number\">\n\t\t\t\t{{ element }}\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #chip let-element=\"element\">\n\t\t\t<gui-chip>\n\t\t\t\t<span class=\"gui-view-text\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t\t</gui-chip>\n\t\t</ng-template>\n\n\t\t<ng-template #link let-element=\"element\">\n\t\t\t<a gui-button link=\"true\" href=\"{{ element }}\">\n\t\t\t\t<span class=\"gui-view-text\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #image let-element=\"element\">\n\t\t\t<img src=\"{{ element }}\"/>\n\t\t</ng-template>\n\n\t\t<ng-template #checkbox let-element=\"element\">\n\t\t\t<span class=\"gui-cell-boolean\">\n\t\t\t\t<gui-checkbox [checked]=\"!!element\" [disabled]=\"true\"></gui-checkbox>\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bold let-element=\"element\">\n\t\t\t<span class=\"gui-view-text gui-bold\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #italic let-element=\"element\">\n\t\t\t<span class=\"gui-view-text gui-italic\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #custom let-element=\"element\">\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #function let-element=\"element\">\n\t\t\t<gui-function-view [element]=\"element\"></gui-function-view>\n\t\t</ng-template>\n\n\t\t<ng-template #date let-element=\"element\">\n\t\t\t<span class=\"gui-view-text\">{{ element | date: 'dd/MM/yyyy' }}</span> \n\t\t</ng-template>\n\n\t\t<ng-template #bar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element\" [showPercentage]=\"false\"></gui-bar-view>\n\t\t</ng-template>\n\n\t\t<ng-template #percentageBar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element\" [showPercentage]=\"true\"></gui-bar-view>\n\t\t</ng-template>\n\t\t\n\t\t<ng-template #percentage let-element=\"element\">\n\t\t\t<gui-percentage-view [value]=\"element\"></gui-percentage-view>\n\t\t</ng-template>\n\n\t"
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
        functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }],
        dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
        barTemplate: [{ type: ViewChild, args: ['bar', { read: TemplateRef, static: true },] }],
        percentageBarTemplate: [{ type: ViewChild, args: ['percentageBar', { read: TemplateRef, static: true },] }],
        percentageTemplate: [{ type: ViewChild, args: ['percentage', { read: TemplateRef, static: true },] }]
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
    /** @type {?} */
    ViewTemplatesComponent.prototype.dateTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.barTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageBarTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.percentageTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0M7SUFBQTtJQW9LQSxDQUFDOzs7OztJQW5EQSw0Q0FBVzs7OztJQUFYLFVBQVksSUFBYztRQUV6QixRQUFRLElBQUksRUFBRTtZQUViLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEdBQUc7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUV6QixLQUFLLFFBQVEsQ0FBQyxjQUFjO2dCQUMzQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUVuQyxLQUFLLFFBQVEsQ0FBQyxVQUFVO2dCQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUVoQztnQkFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkFsS0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1dEVBa0VUO2lCQUNEOzs7K0JBR0MsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHdkQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHckQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FHckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQ0FHdEQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHekQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQ0FHdkQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHekQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFHckQsU0FBUyxTQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3Q0FHcEQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQ0FHOUQsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFzRDdELDZCQUFDO0NBQUEsQUFwS0QsSUFvS0M7U0EvRlksc0JBQXNCOzs7SUFFbEMsOENBQytCOztJQUUvQixnREFDaUM7O0lBRWpDLDhDQUMrQjs7SUFFL0IsOENBQytCOztJQUUvQiwrQ0FDZ0M7O0lBRWhDLGtEQUNtQzs7SUFFbkMsOENBQytCOztJQUUvQixnREFDaUM7O0lBRWpDLGdEQUNpQzs7SUFFakMsa0RBQ21DOztJQUVuQyw4Q0FDK0I7O0lBRS9CLDZDQUM4Qjs7SUFFOUIsdURBQ3dDOztJQUV4QyxvREFDcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctdGVtcGxhdGUgI3RleHQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHRcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1udW1iZXJcIj5cblx0XHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoaXAgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWNoaXA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXZpZXctdGV4dFwiIFtpbm5lckhUTUxdPVwiZWxlbWVudCB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHRcdDwvZ3VpLWNoaXA+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbGluayBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxhIGd1aS1idXR0b24gbGluaz1cInRydWVcIiBocmVmPVwie3sgZWxlbWVudCB9fVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHRcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0XHQ8L2E+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaW1hZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8aW1nIHNyYz1cInt7IGVsZW1lbnQgfX1cIi8+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hlY2tib3ggbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCIhIWVsZW1lbnRcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JvbGQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHQgZ3VpLWJvbGRcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaXRhbGljIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktdmlldy10ZXh0IGd1aS1pdGFsaWNcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY3VzdG9tIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Z1bmN0aW9uIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1mdW5jdGlvbi12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIj48L2d1aS1mdW5jdGlvbi12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2RhdGUgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHRcIj57eyBlbGVtZW50IHwgZGF0ZTogJ2RkL01NL3l5eXknIH19PC9zcGFuPiBcblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNiYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50XCIgW3Nob3dQZXJjZW50YWdlXT1cImZhbHNlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZUJhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnRcIiBbc2hvd1BlcmNlbnRhZ2VdPVwidHJ1ZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0dGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGlwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoaXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdsaW5rJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGxpbmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpbWFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9sZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib2xkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaXRhbGljJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGl0YWxpY1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2N1c3RvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdmdW5jdGlvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmdW5jdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlQmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3Lk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpcFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmtUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tib3hUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib2xkVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGFsaWNUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkZVTkNUSU9OOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvblRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkRBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGVUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlQmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZVRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==