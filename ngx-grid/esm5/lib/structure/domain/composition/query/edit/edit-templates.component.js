/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../structure/command/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUdoRjtJQUFBO0lBd0RBLENBQUM7Ozs7O0lBbEJBLDRDQUFXOzs7O0lBQVgsVUFBWSxRQUFrQjtRQUU3QixRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUU3QjtnQkFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7SUFDRixDQUFDOztnQkF0REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvNUJBcUJUO2lCQUNEOzs7aUNBR0MsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtrQ0FHdkQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FHeEQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFxQnhELDZCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FoQ1ksc0JBQXNCOzs7SUFFbEMsZ0RBQ2lDOztJQUVqQyxnREFDaUM7O0lBRWpDLGlEQUNrQzs7SUFFbEMsK0NBQ2dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktc3RyaW5nLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktc3RyaW5nLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktbnVtYmVyLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktbnVtYmVyLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9vbGVhbiBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiA+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZW1wdHk+XG5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgnc3RyaW5nJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHN0cmluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib29sZWFuJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvb2xlYW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdlbXB0eScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRlbXB0eVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoIChkYXRhVHlwZSkge1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RyaW5nVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib29sZWFuVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmVtcHR5VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==