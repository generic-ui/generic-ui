/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
var EditTemplatesComponent = /** @class */ (function () {
    function EditTemplatesComponent() {
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    EditTemplatesComponent.prototype.getTemplate = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        switch (dataType) {
            case DataType.STRING:
                return this.stringTemplate;
            case DataType.NUMBER:
                return this.numberTemplate;
            case DataType.BOOLEAN:
                return this.booleanTemplate;
            default:
                return this.emptyTemplate;
        }
    };
    EditTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #string let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-string-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-string-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-number-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-number-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #boolean let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-boolean-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-boolean-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #empty>\n\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    EditTemplatesComponent.propDecorators = {
        stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
        emptyTemplate: [{ type: ViewChild, args: ['empty', { read: TemplateRef, static: true },] }]
    };
    return EditTemplatesComponent;
}());
export { EditTemplatesComponent };
if (false) {
    /** @type {?} */
    EditTemplatesComponent.prototype.stringTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.booleanTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.emptyTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFHcEc7SUFBQTtJQXdEQSxDQUFDOzs7OztJQWxCQSw0Q0FBVzs7OztJQUFYLFVBQVksUUFBa0I7UUFFN0IsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFN0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7Z0JBdERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbzVCQXFCVDtpQkFDRDs7O2lDQUdDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBR3ZELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7a0NBR3ZELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBR3hELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBcUJ4RCw2QkFBQztDQUFBLEFBeERELElBd0RDO1NBaENZLHNCQUFzQjs7O0lBRWxDLGdEQUNpQzs7SUFFakMsZ0RBQ2lDOztJQUVqQyxpREFDa0M7O0lBRWxDLCtDQUNnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktc3RyaW5nLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktc3RyaW5nLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktbnVtYmVyLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktbnVtYmVyLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9vbGVhbiBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiA+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZW1wdHk+XG5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgnc3RyaW5nJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHN0cmluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib29sZWFuJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvb2xlYW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdlbXB0eScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRlbXB0eVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoIChkYXRhVHlwZSkge1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RyaW5nVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib29sZWFuVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmVtcHR5VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==