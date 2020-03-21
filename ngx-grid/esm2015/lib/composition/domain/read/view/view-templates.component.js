/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../cell-view';
export class ViewTemplatesComponent {
    /**
     * @param {?} view
     * @return {?}
     */
    getTemplate(view) {
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
    }
}
ViewTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #text let-element="element">
			<span [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				<span [innerHTML]="element | guiSafe: 'html'"></span>
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element }}">
				<span [innerHTML]="element | guiSafe: 'html'"></span>
			</a>
		</ng-template>

		<ng-template #image let-element="element">
			<img src="{{ element }}"/>
		</ng-template>

		<ng-template #checkbox let-element="element">
			<span class="gui-cell-boolean">
				<gui-checkbox [checked]="!!element" [disabled]="true"></gui-checkbox>
			</span>
		</ng-template>

		<ng-template #bold let-element="element">
			<span class="gui-bold" [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #italic let-element="element">
			<span class="gui-italic" [innerHTML]="element | guiSafe: 'html'"></span>
		</ng-template>

		<ng-template #custom let-element="element">
			{{ element }}
		</ng-template>

		<ng-template #function let-element="element">
			<gui-function-view [element]="element"></gui-function-view>
		</ng-template>

		<ng-template #date let-element="element">
			{{ element | date: 'dd/MM/yyyy' }} 
		</ng-template>

		<ng-template #bar let-element="element">
			<gui-bar-view [value]="element" [showPercentage]="false"></gui-bar-view>
		</ng-template>

		<ng-template #percentageBar let-element="element">
			<gui-bar-view [value]="element" [showPercentage]="true"></gui-bar-view>
		</ng-template>
		
		<ng-template #percentage let-element="element">
			<gui-percentage-view [value]="element"></gui-percentage-view>
		</ng-template>

	`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUF5RTNDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBNENsQyxXQUFXLENBQUMsSUFBYztRQUV6QixRQUFRLElBQUksRUFBRTtZQUViLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUUzQixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBRXpCLEtBQUssUUFBUSxDQUFDLGNBQWM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBRW5DLEtBQUssUUFBUSxDQUFDLFVBQVU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBRWhDO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtJQUNGLENBQUM7OztZQS9KRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrRVQ7YUFDRDs7OzJCQUdDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3ZELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3JELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBR3JELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3RELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3ZELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3ZELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBR3JELFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0NBR3BELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBRzlELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUF2QzVELDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyw4Q0FDK0I7O0lBRS9CLDhDQUMrQjs7SUFFL0IsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDhDQUMrQjs7SUFFL0IsZ0RBQ2lDOztJQUVqQyxnREFDaUM7O0lBRWpDLGtEQUNtQzs7SUFFbkMsOENBQytCOztJQUUvQiw2Q0FDOEI7O0lBRTlCLHVEQUN3Qzs7SUFFeEMsb0RBQ3FDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50IHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI251bWJlciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtbnVtYmVyXCI+XG5cdFx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGlwIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1jaGlwPlxuXHRcdFx0XHQ8c3BhbiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0XHQ8L2d1aS1jaGlwPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2xpbmsgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8YSBndWktYnV0dG9uIGxpbms9XCJ0cnVlXCIgaHJlZj1cInt7IGVsZW1lbnQgfX1cIj5cblx0XHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJlbGVtZW50IHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdFx0PC9hPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2ltYWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGltZyBzcmM9XCJ7eyBlbGVtZW50IH19XCIvPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoZWNrYm94IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiISFlbGVtZW50XCIgW2Rpc2FibGVkXT1cInRydWVcIj48L2d1aS1jaGVja2JveD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib2xkIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYm9sZFwiIFtpbm5lckhUTUxdPVwiZWxlbWVudCB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpdGFsaWMgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1pdGFsaWNcIiBbaW5uZXJIVE1MXT1cImVsZW1lbnQgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY3VzdG9tIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Z1bmN0aW9uIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1mdW5jdGlvbi12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIj48L2d1aS1mdW5jdGlvbi12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2RhdGUgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHR7eyBlbGVtZW50IHwgZGF0ZTogJ2RkL01NL3l5eXknIH19IFxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnRcIiBbc2hvd1BlcmNlbnRhZ2VdPVwiZmFsc2VcIj48L2d1aS1iYXItdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlQmFyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1iYXItdmlldyBbdmFsdWVdPVwiZWxlbWVudFwiIFtzaG93UGVyY2VudGFnZV09XCJ0cnVlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcblx0XHQ8bmctdGVtcGxhdGUgI3BlcmNlbnRhZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgndGV4dCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaXAnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2xpbmsnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bGlua1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib2xkJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvbGRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpdGFsaWMnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aXRhbGljVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY3VzdG9tJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Z1bmN0aW9uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZ1bmN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2VCYXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZUJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpcFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmtUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tib3hUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib2xkVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGFsaWNUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkZVTkNUSU9OOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvblRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkRBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGVUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlQmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZVRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==