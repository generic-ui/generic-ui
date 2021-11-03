import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../domain/column/cell-view';
export class ViewTemplatesComponent {
    getTemplate(view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.NUMBER:
                return this.numberTemplate;
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
			<gui-view-text [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element.value }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				<gui-view-text [value]="element"></gui-view-text>
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element.value }}">
				<gui-view-text [value]="element"></gui-view-text>
			</a>
		</ng-template>

		<ng-template #image let-element="element">
			<img src="{{ element.value }}"/>
		</ng-template>

		<ng-template #checkbox let-element="element">
			<span class="gui-cell-boolean">
				<gui-checkbox [checked]="!!element.value" [disabled]="true"></gui-checkbox>
			</span>
		</ng-template>

		<ng-template #bold let-element="element">
			<gui-view-text bold [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #italic let-element="element">
			<gui-view-text italic [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #custom let-element="element">
			{{ element.value }}
		</ng-template>

		<ng-template #function let-element="element">
			<gui-function-view [element]="element"></gui-function-view>
		</ng-template>

		<ng-template #date let-element="element">
			<span class="gui-view-text">{{ element.value | date: 'dd/MM/yyyy' }}</span>
		</ng-template>

		<ng-template #bar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="false"></gui-bar-view>
		</ng-template>

		<ng-template #percentageBar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="true"></gui-bar-view>
		</ng-template>

		<ng-template #percentage let-element="element">
			<gui-percentage-view [value]="element.value"></gui-percentage-view>
		</ng-template>

	`
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUF5RXpELE1BQU0sT0FBTyxzQkFBc0I7SUE0Q2xDLFdBQVcsQ0FBQyxJQUFjO1FBRXpCLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUUzQixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBRXpCLEtBQUssUUFBUSxDQUFDLGNBQWM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBRW5DLEtBQUssUUFBUSxDQUFDLFVBQVU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBRWhDO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtJQUNGLENBQUM7OztZQWxLRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrRVQ7YUFDRDs7OzJCQUdDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3ZELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3JELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBR3JELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3RELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3JELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3ZELFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBR3ZELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR3pELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBR3JELFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0NBR3BELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7aUNBRzlELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI251bWJlciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtbnVtYmVyXCI+XG5cdFx0XHRcdHt7IGVsZW1lbnQudmFsdWUgfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGlwIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1jaGlwPlxuXHRcdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHRcdDwvZ3VpLWNoaXA+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbGluayBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxhIGd1aS1idXR0b24gbGluaz1cInRydWVcIiBocmVmPVwie3sgZWxlbWVudC52YWx1ZSB9fVwiPlxuXHRcdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHRcdDwvYT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpbWFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxpbWcgc3JjPVwie3sgZWxlbWVudC52YWx1ZSB9fVwiLz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGVja2JveCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cIiEhZWxlbWVudC52YWx1ZVwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9sZCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IGJvbGQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaXRhbGljIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgaXRhbGljIFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2N1c3RvbSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdHt7IGVsZW1lbnQudmFsdWUgfX1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNmdW5jdGlvbiBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktZnVuY3Rpb24tdmlldyBbZWxlbWVudF09XCJlbGVtZW50XCI+PC9ndWktZnVuY3Rpb24tdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNkYXRlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktdmlldy10ZXh0XCI+e3sgZWxlbWVudC52YWx1ZSB8IGRhdGU6ICdkZC9NTS95eXl5JyB9fTwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNiYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCIgW3Nob3dQZXJjZW50YWdlXT1cImZhbHNlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZUJhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIiBbc2hvd1BlcmNlbnRhZ2VdPVwidHJ1ZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3BlcmNlbnRhZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiPjwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgndGV4dCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaXAnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2xpbmsnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bGlua1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib2xkJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvbGRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpdGFsaWMnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aXRhbGljVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY3VzdG9tJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Z1bmN0aW9uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZ1bmN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2VCYXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZUJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSElQOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGlwVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlua1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklNQUdFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbWFnZVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNIRUNLQk9YOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2JveFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkJPTEQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvbGRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiB0aGlzLml0YWxpY1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VzdG9tVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuRlVOQ1RJT046XG5cdFx0XHRcdHJldHVybiB0aGlzLmZ1bmN0aW9uVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuREFURTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0ZVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkJBUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5QRVJDRU5UQUdFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblx0XHR9XG5cdH1cblxufVxuIl19