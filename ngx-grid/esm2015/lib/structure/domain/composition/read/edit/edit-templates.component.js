/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DataType } from '../../../structure/command/field/data-type/data-type';
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

		<ng-template #empty>

		</ng-template>

	`
            }] }
];
EditTemplatesComponent.propDecorators = {
    stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
    numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
    booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
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
    EditTemplatesComponent.prototype.emptyTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBMkJoRixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQWNsQyxXQUFXLENBQUMsUUFBa0I7UUFFN0IsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFN0I7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7O1lBdERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCVDthQUNEOzs7NkJBR0MsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFHdkQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHeEQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVR2RCxnREFDaUM7O0lBRWpDLGdEQUNpQzs7SUFFakMsaURBQ2tDOztJQUVsQywrQ0FDZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLXRlbXBsYXRlICNzdHJpbmcgbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCIgPlxuXHRcdFx0PGd1aS1zdHJpbmctZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1zdHJpbmctZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LXZhbHVlQ2hhbmdlcz1cInZhbHVlQ2hhbmdlc1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXN0YXR1cz1cInN0YXR1c1wiIGxldC1mb2N1cz1cImZvY3VzXCIgPlxuXHRcdFx0PGd1aS1udW1iZXItZWRpdCBbdmFsdWVDaGFuZ2VzXT1cInZhbHVlQ2hhbmdlc1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtzdGF0dXNdPVwic3RhdHVzXCIgW2ZvY3VzXT1cImZvY3VzXCI+XG5cdFx0XHQ8L2d1aS1udW1iZXItZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib29sZWFuIGxldC12YWx1ZUNoYW5nZXM9XCJ2YWx1ZUNoYW5nZXNcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1zdGF0dXM9XCJzdGF0dXNcIiBsZXQtZm9jdXM9XCJmb2N1c1wiID5cblx0XHRcdDxndWktYm9vbGVhbi1lZGl0IFt2YWx1ZUNoYW5nZXNdPVwidmFsdWVDaGFuZ2VzXCIgW3ZhbHVlXT1cInZhbHVlXCIgW3N0YXR1c109XCJzdGF0dXNcIiBbZm9jdXNdPVwiZm9jdXNcIj5cblx0XHRcdDwvZ3VpLWJvb2xlYW4tZWRpdD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNlbXB0eT5cblxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCdzdHJpbmcnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0c3RyaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Jvb2xlYW4nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9vbGVhblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2VtcHR5JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGVtcHR5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKGRhdGFUeXBlKSB7XG5cblx0XHRcdGNhc2UgRGF0YVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHJpbmdUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBEYXRhVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIERhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvb2xlYW5UZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZW1wdHlUZW1wbGF0ZTtcblx0XHR9XG5cdH1cblxufVxuIl19