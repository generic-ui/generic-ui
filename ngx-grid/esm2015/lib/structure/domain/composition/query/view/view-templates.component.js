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
            default:
                return this.textTemplate;
        }
    }
}
ViewTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #text let-element="element">
			{{ element }}
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				{{ element }}
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element }}">
				{{ element }}
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
			<span class="gui-bold">{{ element }}</span>
		</ng-template>

		<ng-template #italic let-element="element">
			<span class="gui-italic">{{ element }}</span>
		</ng-template>

		<ng-template #custom let-element="element" >
			{{ element }}
		</ng-template>

		<ng-template #function let-element="element" >
			<gui-function-view [element]="element" ></gui-function-view>
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
    functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXlEM0MsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFnQ2xDLFdBQVcsQ0FBQyxJQUFjO1FBRXpCLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTlCO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtJQUNGLENBQUM7OztZQXZIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtEVDthQUNEOzs7MkJBR0MsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHdkQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHckQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHdEQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHekQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHdkQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTNCMUQsOENBQytCOztJQUUvQixnREFDaUM7O0lBRWpDLDhDQUMrQjs7SUFFL0IsOENBQytCOztJQUUvQiwrQ0FDZ0M7O0lBRWhDLGtEQUNtQzs7SUFFbkMsOENBQytCOztJQUUvQixnREFDaUM7O0lBRWpDLGdEQUNpQzs7SUFFakMsa0RBQ21DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI251bWJlciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtbnVtYmVyXCI+XG5cdFx0XHRcdHt7IGVsZW1lbnQgfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGlwIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1jaGlwPlxuXHRcdFx0XHR7eyBlbGVtZW50IH19XG5cdFx0XHQ8L2d1aS1jaGlwPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2xpbmsgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8YSBndWktYnV0dG9uIGxpbms9XCJ0cnVlXCIgaHJlZj1cInt7IGVsZW1lbnQgfX1cIj5cblx0XHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdFx0PC9hPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2ltYWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGltZyBzcmM9XCJ7eyBlbGVtZW50IH19XCIvPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoZWNrYm94IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiISFlbGVtZW50XCIgW2Rpc2FibGVkXT1cInRydWVcIj48L2d1aS1jaGVja2JveD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib2xkIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYm9sZFwiPnt7IGVsZW1lbnQgfX08L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaXRhbGljIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktaXRhbGljXCI+e3sgZWxlbWVudCB9fTwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjdXN0b20gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCIgPlxuXHRcdFx0e3sgZWxlbWVudCB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Z1bmN0aW9uIGxldC1lbGVtZW50PVwiZWxlbWVudFwiID5cblx0XHRcdDxndWktZnVuY3Rpb24tdmlldyBbZWxlbWVudF09XCJlbGVtZW50XCIgPjwvZ3VpLWZ1bmN0aW9uLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0dGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGlwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoaXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdsaW5rJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGxpbmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpbWFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9sZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib2xkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaXRhbGljJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGl0YWxpY1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2N1c3RvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdmdW5jdGlvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmdW5jdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpcFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmtUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tib3hUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib2xkVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGFsaWNUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkZVTkNUSU9OOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvblRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==