/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
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
            case DataType.DATE:
                return this.dateTemplate;
            default:
                return this.emptyTemplate;
        }
    };
    EditTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #string let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\">\n\t\t\t<gui-string-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-string-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\">\n\t\t\t<gui-number-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-number-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #boolean let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\">\n\t\t\t<gui-boolean-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-boolean-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #date let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" let-parent=\"parent\">\n\t\t\t<gui-date-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\" [parent]=\"parent\">\n\t\t\t</gui-date-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #empty>\n\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    EditTemplatesComponent.propDecorators = {
        stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
        dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
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
    EditTemplatesComponent.prototype.dateTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.emptyTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBR3hGO0lBQUE7SUFtRUEsQ0FBQzs7Ozs7SUFyQkEsNENBQVc7Ozs7SUFBWCxVQUFZLFFBQWtCO1FBRTdCLFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRTdCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQjtnQkFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7SUFDRixDQUFDOztnQkFqRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpdENBMEJUO2lCQUNEOzs7aUNBR0MsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtrQ0FHdkQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHeEQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQ0FHckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF3QnhELDZCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0F0Q1ksc0JBQXNCOzs7SUFFbEMsZ0RBQ2lDOztJQUVqQyxnREFDaUM7O0lBRWpDLGlEQUNrQzs7SUFFbEMsOENBQytCOztJQUUvQiwrQ0FDZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctdGVtcGxhdGUgI3N0cmluZyBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIj5cblx0XHRcdDxndWktc3RyaW5nLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktc3RyaW5nLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiPlxuXHRcdFx0PGd1aS1udW1iZXItZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1udW1iZXItZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib29sZWFuIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiPlxuXHRcdFx0PGd1aS1ib29sZWFuLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktYm9vbGVhbi1lZGl0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2RhdGUgbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCIgbGV0LXBhcmVudD1cInBhcmVudFwiPlxuXHRcdFx0PGd1aS1kYXRlLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiIFtwYXJlbnRdPVwicGFyZW50XCI+XG5cdFx0XHQ8L2d1aS1kYXRlLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZW1wdHk+XG5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgnc3RyaW5nJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHN0cmluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib29sZWFuJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvb2xlYW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdkYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdlbXB0eScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRlbXB0eVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoIChkYXRhVHlwZSkge1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RyaW5nVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib29sZWFuVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuREFURTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0ZVRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbXB0eVRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=