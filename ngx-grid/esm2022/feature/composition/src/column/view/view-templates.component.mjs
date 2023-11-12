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
    textTemplate;
    numberTemplate;
    chipTemplate;
    linkTemplate;
    imageTemplate;
    checkboxTemplate;
    boldTemplate;
    italicTemplate;
    customTemplate;
    functionTemplate;
    htmlTemplate;
    dateTemplate;
    barTemplate;
    percentageBarTemplate;
    percentageTemplate;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ViewTemplatesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ViewTemplatesComponent, selector: "ng-component", viewQueries: [{ propertyName: "textTemplate", first: true, predicate: ["text"], descendants: true, read: TemplateRef, static: true }, { propertyName: "numberTemplate", first: true, predicate: ["number"], descendants: true, read: TemplateRef, static: true }, { propertyName: "chipTemplate", first: true, predicate: ["chip"], descendants: true, read: TemplateRef, static: true }, { propertyName: "linkTemplate", first: true, predicate: ["link"], descendants: true, read: TemplateRef, static: true }, { propertyName: "imageTemplate", first: true, predicate: ["image"], descendants: true, read: TemplateRef, static: true }, { propertyName: "checkboxTemplate", first: true, predicate: ["checkbox"], descendants: true, read: TemplateRef, static: true }, { propertyName: "boldTemplate", first: true, predicate: ["bold"], descendants: true, read: TemplateRef, static: true }, { propertyName: "italicTemplate", first: true, predicate: ["italic"], descendants: true, read: TemplateRef, static: true }, { propertyName: "customTemplate", first: true, predicate: ["custom"], descendants: true, read: TemplateRef, static: true }, { propertyName: "functionTemplate", first: true, predicate: ["function"], descendants: true, read: TemplateRef, static: true }, { propertyName: "htmlTemplate", first: true, predicate: ["html"], descendants: true, read: TemplateRef, static: true }, { propertyName: "dateTemplate", first: true, predicate: ["date"], descendants: true, read: TemplateRef, static: true }, { propertyName: "barTemplate", first: true, predicate: ["bar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageBarTemplate", first: true, predicate: ["percentageBar"], descendants: true, read: TemplateRef, static: true }, { propertyName: "percentageTemplate", first: true, predicate: ["percentage"], descendants: true, read: TemplateRef, static: true }], ngImport: i0, template: `

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
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ViewTemplatesComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2REFBNkQsQ0FBQzs7Ozs7Ozs7O0FBNkV2RixNQUFNLE9BQU8sc0JBQXNCO0lBR2xDLFlBQVksQ0FBbUI7SUFHL0IsY0FBYyxDQUFtQjtJQUdqQyxZQUFZLENBQW1CO0lBRy9CLFlBQVksQ0FBbUI7SUFHL0IsYUFBYSxDQUFtQjtJQUdoQyxnQkFBZ0IsQ0FBbUI7SUFHbkMsWUFBWSxDQUFtQjtJQUcvQixjQUFjLENBQW1CO0lBR2pDLGNBQWMsQ0FBbUI7SUFHakMsZ0JBQWdCLENBQW1CO0lBR25DLFlBQVksQ0FBbUI7SUFHL0IsWUFBWSxDQUFtQjtJQUcvQixXQUFXLENBQW1CO0lBRzlCLHFCQUFxQixDQUFtQjtJQUd4QyxrQkFBa0IsQ0FBbUI7SUFFckMsV0FBVyxDQUFDLElBQWM7UUFFekIsUUFBUSxJQUFJLEVBQUU7WUFFYixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FB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QVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJeEQsZ0JBQWdCO3NCQURmLFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUkxRCxZQUFZO3NCQURYLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl0RCxZQUFZO3NCQURYLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUl0RCxXQUFXO3NCQURWLFNBQVM7dUJBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUlyRCxxQkFBcUI7c0JBRHBCLFNBQVM7dUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUkvRCxrQkFBa0I7c0JBRGpCLFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctdGVtcGxhdGUgI3RleHQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNudW1iZXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLW51bWJlclwiPlxuXHRcdFx0XHR7eyBlbGVtZW50LnZhbHVlIH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hpcCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktY2hpcD5cblx0XHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0XHQ8L2d1aS1jaGlwPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2xpbmsgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8YSBndWktYnV0dG9uIGxpbms9XCJ0cnVlXCIgaHJlZj1cInt7IGVsZW1lbnQudmFsdWUgfX1cIj5cblx0XHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0XHQ8L2E+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaW1hZ2UgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8aW1nIHNyYz1cInt7IGVsZW1lbnQudmFsdWUgfX1cIi8+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY2hlY2tib3ggbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCIhIWVsZW1lbnQudmFsdWVcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JvbGQgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBib2xkIFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2l0YWxpYyBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktdmlldy10ZXh0IGl0YWxpYyBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjdXN0b20gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHR7eyBlbGVtZW50LnZhbHVlIH19XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZnVuY3Rpb24gbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWZ1bmN0aW9uLXZpZXcgW2VsZW1lbnRdPVwiZWxlbWVudFwiPjwvZ3VpLWZ1bmN0aW9uLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjaHRtbCBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktaHRtbC12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIj48L2d1aS1odG1sLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjZGF0ZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXZpZXctdGV4dFwiPnt7IGVsZW1lbnQudmFsdWUgfCBkYXRlOiAnZGQvTU0veXl5eScgfX08L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjYmFyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1iYXItdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiIFtzaG93UGVyY2VudGFnZV09XCJmYWxzZVwiPjwvZ3VpLWJhci12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3BlcmNlbnRhZ2VCYXIgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWJhci12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCIgW3Nob3dQZXJjZW50YWdlXT1cInRydWVcIj48L2d1aS1iYXItdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIj48L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBUZW1wbGF0ZXNDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ3RleHQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0dGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ251bWJlcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRudW1iZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGlwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoaXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdsaW5rJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGxpbmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdpbWFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnYm9sZCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRib2xkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaXRhbGljJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGl0YWxpY1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2N1c3RvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdmdW5jdGlvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRmdW5jdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2h0bWwnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aHRtbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2RhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZGF0ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlQmFyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdwZXJjZW50YWdlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHBlcmNlbnRhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRnZXRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3Lk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpcFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmtUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tib3hUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ib2xkVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGFsaWNUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkZVTkNUSU9OOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvblRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkhUTUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLmh0bWxUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZUJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcmNlbnRhZ2VUZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=