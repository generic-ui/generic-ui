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
                    template: "\n\n\t\t<ng-template #text let-element=\"element\">\n\t\t\t<span [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-element=\"element\">\n\t\t\t<span class=\"gui-cell-number\">\n\t\t\t\t{{ element }}\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #chip let-element=\"element\">\n\t\t\t<gui-chip>\n\t\t\t\t<span [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t\t</gui-chip>\n\t\t</ng-template>\n\n\t\t<ng-template #link let-element=\"element\">\n\t\t\t<a gui-button link=\"true\" href=\"{{ element }}\">\n\t\t\t\t<span [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #image let-element=\"element\">\n\t\t\t<img src=\"{{ element }}\"/>\n\t\t</ng-template>\n\n\t\t<ng-template #checkbox let-element=\"element\">\n\t\t\t<span class=\"gui-cell-boolean\">\n\t\t\t\t<gui-checkbox [checked]=\"!!element\" [disabled]=\"true\"></gui-checkbox>\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bold let-element=\"element\">\n\t\t\t<span class=\"gui-bold\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #italic let-element=\"element\">\n\t\t\t<span class=\"gui-italic\" [innerHTML]=\"element | guiSafe: 'html'\"></span>\n\t\t</ng-template>\n\n\t\t<ng-template #custom let-element=\"element\">\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #function let-element=\"element\">\n\t\t\t<gui-function-view [element]=\"element\"></gui-function-view>\n\t\t</ng-template>\n\n\t\t<ng-template #date let-element=\"element\">\n\t\t\t{{ element | date: 'dd/MM/yyyy' }} \n\t\t</ng-template>\n\n\t\t<ng-template #bar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element\" [showPercentage]=\"false\"></gui-bar-view>\n\t\t</ng-template>\n\n\t\t<ng-template #percentageBar let-element=\"element\">\n\t\t\t<gui-bar-view [value]=\"element\" [showPercentage]=\"true\"></gui-bar-view>\n\t\t</ng-template>\n\t\t\n\t\t<ng-template #percentage let-element=\"element\">\n\t\t\t<gui-percentage-view [value]=\"element\"></gui-percentage-view>\n\t\t</ng-template>\n\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0M7SUFBQTtJQWlLQSxDQUFDOzs7OztJQWhEQSw0Q0FBVzs7OztJQUFYLFVBQVksSUFBYztRQUV6QixRQUFRLElBQUksRUFBRTtZQUViLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUUzQixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBRXpCLEtBQUssUUFBUSxDQUFDLGNBQWM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBRW5DLEtBQUssUUFBUSxDQUFDLFVBQVU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBRWhDO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtJQUNGLENBQUM7O2dCQS9KRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhrRUFrRVQ7aUJBQ0Q7OzsrQkFHQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUdyRCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUd2RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUdyRCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUdyRCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUd0RCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUd6RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUdyRCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUd2RCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUd2RCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUd6RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUdyRCxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dDQUdwRCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FDQUc5RCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQW1EN0QsNkJBQUM7Q0FBQSxBQWpLRCxJQWlLQztTQTVGWSxzQkFBc0I7OztJQUVsQyw4Q0FDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsOENBQytCOztJQUUvQiw4Q0FDK0I7O0lBRS9CLCtDQUNnQzs7SUFFaEMsa0RBQ21DOztJQUVuQyw4Q0FDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsZ0RBQ2lDOztJQUVqQyxrREFDbUM7O0lBRW5DLDhDQUMrQjs7SUFFL0IsNkNBQzhCOztJQUU5Qix1REFDd0M7O0lBRXhDLG9EQUNxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudCB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLW51bWJlclwiPlxuXHRcdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hpcCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktY2hpcD5cblx0XHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50IHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdFx0PC9ndWktY2hpcD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNsaW5rIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGEgZ3VpLWJ1dHRvbiBsaW5rPVwidHJ1ZVwiIGhyZWY9XCJ7eyBlbGVtZW50IH19XCI+XG5cdFx0XHRcdDxzcGFuIFtpbm5lckhUTUxdPVwiZWxlbWVudCB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpbWFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxpbWcgc3JjPVwie3sgZWxlbWVudCB9fVwiLz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGVja2JveCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cIiEhZWxlbWVudFwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9sZCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWJvbGRcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaXRhbGljIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktaXRhbGljXCIgW2lubmVySFRNTF09XCJlbGVtZW50IHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2N1c3RvbSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNmdW5jdGlvbiBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktZnVuY3Rpb24tdmlldyBbZWxlbWVudF09XCJlbGVtZW50XCI+PC9ndWktZnVuY3Rpb24tdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNkYXRlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudCB8IGRhdGU6ICdkZC9NTS95eXl5JyB9fSBcblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNiYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50XCIgW3Nob3dQZXJjZW50YWdlXT1cImZhbHNlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZUJhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnRcIiBbc2hvd1BlcmNlbnRhZ2VdPVwidHJ1ZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0dGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGlwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoaXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdsaW5rJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGxpbmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpbWFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9sZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib2xkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaXRhbGljJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGl0YWxpY1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2N1c3RvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdmdW5jdGlvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmdW5jdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlQmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoaXBUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW5rVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLmltYWdlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrYm94VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9sZFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRhbGljVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXN0b21UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5GVU5DVElPTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZUJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcmNlbnRhZ2VUZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=