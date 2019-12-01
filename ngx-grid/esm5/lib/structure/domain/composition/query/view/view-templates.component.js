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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQztJQUFBO0lBeUhBLENBQUM7Ozs7O0lBcENBLDRDQUFXOzs7O0lBQVgsVUFBWSxJQUFjO1FBRXpCLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtJQUNGLENBQUM7O2dCQXZIRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGsxQ0FrRFQ7aUJBQ0Q7OzsrQkFHQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUdyRCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUd2RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUdyRCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dDQUdyRCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUd0RCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUd6RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUdyRCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUd2RCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUd2RCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXVDM0QsNkJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXBFWSxzQkFBc0I7OztJQUVsQyw4Q0FDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsOENBQytCOztJQUUvQiw4Q0FDK0I7O0lBRS9CLCtDQUNnQzs7SUFFaEMsa0RBQ21DOztJQUVuQyw4Q0FDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsZ0RBQ2lDOztJQUVqQyxrREFDbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctdGVtcGxhdGUgI3RleHQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1udW1iZXJcIj5cblx0XHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoaXAgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWNoaXA+XG5cdFx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHRcdDwvZ3VpLWNoaXA+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbGluayBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxhIGd1aS1idXR0b24gbGluaz1cInRydWVcIiBocmVmPVwie3sgZWxlbWVudCB9fVwiPlxuXHRcdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0XHQ8L2E+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaW1hZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8aW1nIHNyYz1cInt7IGVsZW1lbnQgfX1cIi8+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hlY2tib3ggbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCIhIWVsZW1lbnRcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JvbGQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1ib2xkXCI+e3sgZWxlbWVudCB9fTwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpdGFsaWMgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1pdGFsaWNcIj57eyBlbGVtZW50IH19PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2N1c3RvbSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIiA+XG5cdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZnVuY3Rpb24gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCIgPlxuXHRcdFx0PGd1aS1mdW5jdGlvbi12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIiA+PC9ndWktZnVuY3Rpb24tdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgndGV4dCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaXAnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2xpbmsnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bGlua1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib2xkJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvbGRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpdGFsaWMnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aXRhbGljVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY3VzdG9tJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Z1bmN0aW9uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZ1bmN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdHN3aXRjaCAodmlldykge1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlRFWFQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSElQOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGlwVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlua1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklNQUdFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbWFnZVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNIRUNLQk9YOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2JveFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkJPTEQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvbGRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiB0aGlzLml0YWxpY1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VzdG9tVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuRlVOQ1RJT046XG5cdFx0XHRcdHJldHVybiB0aGlzLmZ1bmN0aW9uVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblx0XHR9XG5cdH1cblxufVxuIl19