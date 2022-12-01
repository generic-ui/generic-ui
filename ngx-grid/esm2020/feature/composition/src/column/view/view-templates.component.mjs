import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "./function/function-view.component";
import * as i3 from "./bar/bar-view.component";
import * as i4 from "./percentage/percentage-view.component";
import * as i5 from "./text/text-view.component";
import * as i6 from "./html/html-view.component";
import * as i7 from "@angular/common";
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
            case CellView.HTML:
                return this.htmlTemplate;
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
ViewTemplatesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ViewTemplatesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ViewTemplatesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: ViewTemplatesComponent, selector: "ng-component", viewQueries: [{ propertyName: "textTemplate", first: true, predicate: ["text"], descendants: true, read: TemplateRef, static: true }, { propertyName: "numberTemplate", first: true, predicate: ["number"], descendants: true, read: TemplateRef, static: true }, { propertyName: "chipTemplate", first: true, predicate: ["chip"], descendants: true, read: TemplateRef, static: true }, { propertyName: "linkTemplate", first: true, predicate: ["link"], descendants: true, read: TemplateRef, static: true }, { propertyName: "imageTemplate", first: true, predicate: ["image"], descendants: true, read: TemplateRef, static: true }, { propertyName: "checkboxTemplate", first: true, predicate: ["checkbox"], descendants: true, read: TemplateRef, static: true }, { propertyName: "boldTemplate", first: true, predicate: ["bold"], descendants: true, read: TemplateRef, static: true }, { propertyName: "italicTemplate", first: true, predicate: ["italic"], descendants: true, read: TemplateRef, static: true }, { propertyName: "customTemplate", first: true, predicate: ["custom"], descendants: true, read: TemplateRef, static: true }, { propertyName: "functionTemplate", first: true, predicate: ["function"], descendants: true, read: TemplateRef, static: true }, { propertyName: "htmlTemplate", first: true, predicate: ["html"], descendants: true, read: TemplateRef, static: true }, { propertyName: "dateTemplate", first: true, predicate: ["date"], descendants: true, read: TemplateRef, static: true }, { propertyName: "barTemplate", first: true, predicate: ["bar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageBarTemplate", first: true, predicate: ["percentageBar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageTemplate", first: true, predicate: ["percentage"], descendants: true, read: TemplateRef, static: true }], ngImport: i0, template: `

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

		<ng-template #html let-element="element">
			<gui-html-view [element]="element"></gui-html-view>
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

	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricChipComponent, selector: "gui-chip" }, { kind: "component", type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i1.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i2.FunctionViewComponent, selector: "gui-function-view", inputs: ["element"] }, { kind: "component", type: i3.BarViewComponent, selector: "gui-bar-view[value]", inputs: ["value", "showPercentage"] }, { kind: "component", type: i4.PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }, { kind: "component", type: i5.TextViewComponent, selector: "gui-view-text[value]", inputs: ["value"] }, { kind: "component", type: i6.HtmlViewComponent, selector: "gui-html-view", inputs: ["element"] }, { kind: "pipe", type: i7.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ViewTemplatesComponent, decorators: [{
            type: Component,
            args: [{
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

		<ng-template #html let-element="element">
			<gui-html-view [element]="element"></gui-html-view>
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
                }]
        }], propDecorators: { textTemplate: [{
                type: ViewChild,
                args: ['text', { read: TemplateRef, static: true }]
            }], numberTemplate: [{
                type: ViewChild,
                args: ['number', { read: TemplateRef, static: true }]
            }], chipTemplate: [{
                type: ViewChild,
                args: ['chip', { read: TemplateRef, static: true }]
            }], linkTemplate: [{
                type: ViewChild,
                args: ['link', { read: TemplateRef, static: true }]
            }], imageTemplate: [{
                type: ViewChild,
                args: ['image', { read: TemplateRef, static: true }]
            }], checkboxTemplate: [{
                type: ViewChild,
                args: ['checkbox', { read: TemplateRef, static: true }]
            }], boldTemplate: [{
                type: ViewChild,
                args: ['bold', { read: TemplateRef, static: true }]
            }], italicTemplate: [{
                type: ViewChild,
                args: ['italic', { read: TemplateRef, static: true }]
            }], customTemplate: [{
                type: ViewChild,
                args: ['custom', { read: TemplateRef, static: true }]
            }], functionTemplate: [{
                type: ViewChild,
                args: ['function', { read: TemplateRef, static: true }]
            }], htmlTemplate: [{
                type: ViewChild,
                args: ['html', { read: TemplateRef, static: true }]
            }], dateTemplate: [{
                type: ViewChild,
                args: ['date', { read: TemplateRef, static: true }]
            }], barTemplate: [{
                type: ViewChild,
                args: ['bar', { read: TemplateRef, static: true }]
            }], percentageBarTemplate: [{
                type: ViewChild,
                args: ['percentageBar', { read: TemplateRef, static: true }]
            }], percentageTemplate: [{
                type: ViewChild,
                args: ['percentage', { read: TemplateRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2REFBNkQsQ0FBQzs7Ozs7Ozs7O0FBNkV2RixNQUFNLE9BQU8sc0JBQXNCO0lBK0NsQyxXQUFXLENBQUMsSUFBYztRQUV6QixRQUFRLElBQUksRUFBRTtZQUViLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFNUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFP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RUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSXRELFdBQVc7c0JBRFYsU0FBUzt1QkFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSXJELHFCQUFxQjtzQkFEcEIsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSS9ELGtCQUFrQjtzQkFEakIsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI251bWJlciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtbnVtYmVyXCI+XG5cdFx0XHRcdHt7IGVsZW1lbnQudmFsdWUgfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGlwIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1jaGlwPlxuXHRcdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHRcdDwvZ3VpLWNoaXA+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbGluayBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxhIGd1aS1idXR0b24gbGluaz1cInRydWVcIiBocmVmPVwie3sgZWxlbWVudC52YWx1ZSB9fVwiPlxuXHRcdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHRcdDwvYT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpbWFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxpbWcgc3JjPVwie3sgZWxlbWVudC52YWx1ZSB9fVwiLz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjaGVja2JveCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cIiEhZWxlbWVudC52YWx1ZVwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYm9sZCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IGJvbGQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaXRhbGljIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgaXRhbGljIFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2N1c3RvbSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdHt7IGVsZW1lbnQudmFsdWUgfX1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNmdW5jdGlvbiBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktZnVuY3Rpb24tdmlldyBbZWxlbWVudF09XCJlbGVtZW50XCI+PC9ndWktZnVuY3Rpb24tdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNodG1sIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1odG1sLXZpZXcgW2VsZW1lbnRdPVwiZWxlbWVudFwiPjwvZ3VpLWh0bWwtdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNkYXRlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktdmlldy10ZXh0XCI+e3sgZWxlbWVudC52YWx1ZSB8IGRhdGU6ICdkZC9NTS95eXl5JyB9fTwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNiYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCIgW3Nob3dQZXJjZW50YWdlXT1cImZhbHNlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZUJhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIiBbc2hvd1BlcmNlbnRhZ2VdPVwidHJ1ZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3BlcmNlbnRhZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiPjwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIFRlbXBsYXRlc0NvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgndGV4dCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHR0ZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbnVtYmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdG51bWJlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaXAnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2xpbmsnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bGlua1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGltYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdib2xkJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJvbGRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpdGFsaWMnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aXRhbGljVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY3VzdG9tJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2Z1bmN0aW9uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZ1bmN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaHRtbCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRodG1sVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2VCYXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZUJhclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ3BlcmNlbnRhZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0cGVyY2VudGFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdGdldFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSElQOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGlwVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlua1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklNQUdFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbWFnZVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNIRUNLQk9YOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2JveFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkJPTEQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvbGRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiB0aGlzLml0YWxpY1RlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VzdG9tVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuRlVOQ1RJT046XG5cdFx0XHRcdHJldHVybiB0aGlzLmZ1bmN0aW9uVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSFRNTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHRtbFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkRBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGVUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlQmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZVRlbXBsYXRlO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0VGVtcGxhdGU7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==