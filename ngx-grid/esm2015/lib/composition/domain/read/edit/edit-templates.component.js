/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
export class EditTemplatesComponent {
    /**
     * @param {?} dataType
     * @return {?}
     */
    getTemplate(dataType) {
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
    }
}
EditTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #string let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-string-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-string-edit>
		</ng-template>

		<ng-template #number let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-number-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-number-edit>
		</ng-template>

		<ng-template #boolean let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-boolean-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-boolean-edit>
		</ng-template>

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" >
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus">
			</gui-date-edit>
		</ng-template> 
		
		<ng-template #empty>

		</ng-template>

	`
            }] }
];
EditTemplatesComponent.propDecorators = {
    stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
    numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
    booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
    dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
    emptyTemplate: [{ type: ViewChild, args: ['empty', { read: TemplateRef, static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFnQ3BHLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBaUJsQyxXQUFXLENBQUMsUUFBa0I7UUFFN0IsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFN0IsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCO2dCQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjtJQUNGLENBQUM7OztZQWpFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCVDthQUNEOzs7NkJBR0MsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFHdkQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHeEQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVp2RCxnREFDaUM7O0lBRWpDLGdEQUNpQzs7SUFFakMsaURBQ2tDOztJQUVsQyw4Q0FDK0I7O0lBRS9CLCtDQUNnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktc3RyaW5nLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktc3RyaW5nLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktbnVtYmVyLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktbnVtYmVyLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9vbGVhbiBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiA+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiA+XG5cdFx0XHQ8Z3VpLWRhdGUtZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1kYXRlLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT4gXG5cdFx0XG5cdFx0PG5nLXRlbXBsYXRlICNlbXB0eT5cblxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCdzdHJpbmcnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0c3RyaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Jvb2xlYW4nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9vbGVhblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2VtcHR5JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGVtcHR5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKGRhdGFUeXBlKSB7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHJpbmdUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvb2xlYW5UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmVtcHR5VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==