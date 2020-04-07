/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
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

		<ng-template #date let-valueChanges="valueChanges" let-value="value" let-status="status" let-focus="focus" let-parent="parent" >
			<gui-date-edit [valueChanges]="valueChanges" [value]="value" [status]="status" [focus]="focus" [parent]="parent" >
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQWdDekYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFpQmxDLFdBQVcsQ0FBQyxRQUFrQjtRQUU3QixRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUU3QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7O1lBakVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJUO2FBQ0Q7Ozs2QkFHQyxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUd2RCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUd2RCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUd4RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzRCQUdyRCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBWnZELGdEQUNpQzs7SUFFakMsZ0RBQ2lDOztJQUVqQyxpREFDa0M7O0lBRWxDLDhDQUMrQjs7SUFFL0IsK0NBQ2dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RyaW5nIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktc3RyaW5nLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktc3RyaW5nLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktbnVtYmVyLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiPlxuXHRcdFx0PC9ndWktbnVtYmVyLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9vbGVhbiBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiA+XG5cdFx0XHQ8Z3VpLWJvb2xlYW4tZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1ib29sZWFuLWVkaXQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtdmFsdWVDaGFuZ2VzPVwidmFsdWVDaGFuZ2VzXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtc3RhdHVzPVwic3RhdHVzXCIgbGV0LWZvY3VzPVwiZm9jdXNcIiBsZXQtcGFyZW50PVwicGFyZW50XCIgPlxuXHRcdFx0PGd1aS1kYXRlLWVkaXQgW3ZhbHVlQ2hhbmdlc109XCJ2YWx1ZUNoYW5nZXNcIiBbdmFsdWVdPVwidmFsdWVcIiBbc3RhdHVzXT1cInN0YXR1c1wiIFtmb2N1c109XCJmb2N1c1wiIFtwYXJlbnRdPVwicGFyZW50XCIgPlxuXHRcdFx0PC9ndWktZGF0ZS1lZGl0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2VtcHR5PlxuXG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cmluZycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRzdHJpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdudW1iZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bnVtYmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9vbGVhbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib29sZWFuVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZW1wdHknLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZW1wdHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdHN3aXRjaCAoZGF0YVR5cGUpIHtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0cmluZ1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9vbGVhblRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLkRBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGVUZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZW1wdHlUZW1wbGF0ZTtcblx0XHR9XG5cdH1cblxufVxuIl19