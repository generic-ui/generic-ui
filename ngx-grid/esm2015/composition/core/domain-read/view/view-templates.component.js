import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../domain/column/cell-view';
import * as i0 from "@angular/core";
import * as i1 from "./text/text-view.component";
import * as i2 from "@generic-ui/fabric";
import * as i3 from "./function/function-view.component";
import * as i4 from "./bar/bar-view.component";
import * as i5 from "./percentage/percentage-view.component";
import * as i6 from "@angular/common";
const _c0 = ["text"];
const _c1 = ["number"];
const _c2 = ["chip"];
const _c3 = ["link"];
const _c4 = ["image"];
const _c5 = ["checkbox"];
const _c6 = ["bold"];
const _c7 = ["italic"];
const _c8 = ["custom"];
const _c9 = ["function"];
const _c10 = ["date"];
const _c11 = ["bar"];
const _c12 = ["percentageBar"];
const _c13 = ["percentage"];
function ViewTemplatesComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-view-text", 14);
} if (rf & 2) {
    const element_r28 = ctx.element;
    i0.ɵɵproperty("value", element_r28);
} }
function ViewTemplatesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r29 = ctx.element;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r29.value, " ");
} }
function ViewTemplatesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "gui-chip");
    i0.ɵɵelement(1, "gui-view-text", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r30 = ctx.element;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r30);
} }
function ViewTemplatesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵelement(1, "gui-view-text", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r31 = ctx.element;
    i0.ɵɵpropertyInterpolate("href", element_r31.value, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", element_r31);
} }
function ViewTemplatesComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} if (rf & 2) {
    const element_r32 = ctx.element;
    i0.ɵɵpropertyInterpolate("src", element_r32.value, i0.ɵɵsanitizeUrl);
} }
function ViewTemplatesComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "gui-checkbox", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r33 = ctx.element;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", !!element_r33.value)("disabled", true);
} }
function ViewTemplatesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-view-text", 20);
} if (rf & 2) {
    const element_r34 = ctx.element;
    i0.ɵɵproperty("value", element_r34);
} }
function ViewTemplatesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-view-text", 21);
} if (rf & 2) {
    const element_r35 = ctx.element;
    i0.ɵɵproperty("value", element_r35);
} }
function ViewTemplatesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const element_r36 = ctx.element;
    i0.ɵɵtextInterpolate1(" ", element_r36.value, " ");
} }
function ViewTemplatesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-function-view", 22);
} if (rf & 2) {
    const element_r37 = ctx.element;
    i0.ɵɵproperty("element", element_r37);
} }
function ViewTemplatesComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r38 = ctx.element;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, element_r38.value, "dd/MM/yyyy"));
} }
function ViewTemplatesComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-bar-view", 24);
} if (rf & 2) {
    const element_r39 = ctx.element;
    i0.ɵɵproperty("value", element_r39.value)("showPercentage", false);
} }
function ViewTemplatesComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-bar-view", 24);
} if (rf & 2) {
    const element_r40 = ctx.element;
    i0.ɵɵproperty("value", element_r40.value)("showPercentage", true);
} }
function ViewTemplatesComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-percentage-view", 14);
} if (rf & 2) {
    const element_r41 = ctx.element;
    i0.ɵɵproperty("value", element_r41.value);
} }
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
ViewTemplatesComponent.ɵfac = function ViewTemplatesComponent_Factory(t) { return new (t || ViewTemplatesComponent)(); };
ViewTemplatesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewTemplatesComponent, selectors: [["ng-component"]], viewQuery: function ViewTemplatesComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, TemplateRef);
        i0.ɵɵviewQuery(_c1, 7, TemplateRef);
        i0.ɵɵviewQuery(_c2, 7, TemplateRef);
        i0.ɵɵviewQuery(_c3, 7, TemplateRef);
        i0.ɵɵviewQuery(_c4, 7, TemplateRef);
        i0.ɵɵviewQuery(_c5, 7, TemplateRef);
        i0.ɵɵviewQuery(_c6, 7, TemplateRef);
        i0.ɵɵviewQuery(_c7, 7, TemplateRef);
        i0.ɵɵviewQuery(_c8, 7, TemplateRef);
        i0.ɵɵviewQuery(_c9, 7, TemplateRef);
        i0.ɵɵviewQuery(_c10, 7, TemplateRef);
        i0.ɵɵviewQuery(_c11, 7, TemplateRef);
        i0.ɵɵviewQuery(_c12, 7, TemplateRef);
        i0.ɵɵviewQuery(_c13, 7, TemplateRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numberTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkboxTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boldTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.italicTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.functionTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.barTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.percentageBarTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.percentageTemplate = _t.first);
    } }, decls: 28, vars: 0, consts: [["text", ""], ["number", ""], ["chip", ""], ["link", ""], ["image", ""], ["checkbox", ""], ["bold", ""], ["italic", ""], ["custom", ""], ["function", ""], ["date", ""], ["bar", ""], ["percentageBar", ""], ["percentage", ""], [3, "value"], [1, "gui-cell-number"], ["gui-button", "", "link", "true", 3, "href"], [3, "src"], [1, "gui-cell-boolean"], [3, "checked", "disabled"], ["bold", "", 3, "value"], ["italic", "", 3, "value"], [3, "element"], [1, "gui-view-text"], [3, "value", "showPercentage"]], template: function ViewTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ViewTemplatesComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, ViewTemplatesComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, ViewTemplatesComponent_ng_template_4_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, ViewTemplatesComponent_ng_template_6_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, ViewTemplatesComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, ViewTemplatesComponent_ng_template_10_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, ViewTemplatesComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, ViewTemplatesComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, ViewTemplatesComponent_ng_template_16_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, ViewTemplatesComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, ViewTemplatesComponent_ng_template_20_Template, 3, 4, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(22, ViewTemplatesComponent_ng_template_22_Template, 1, 2, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(24, ViewTemplatesComponent_ng_template_24_Template, 1, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(26, ViewTemplatesComponent_ng_template_26_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.TextViewComponent, i2.FabricChipComponent, i2.FabricButtonComponent, i2.FabricCheckboxComponent, i3.FunctionViewComponent, i4.BarViewComponent, i5.PercentageViewComponent], pipes: [i6.DatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewTemplatesComponent, [{
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
    }], null, { textTemplate: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUXRELG9DQUFpRDs7O0lBQWxDLG1DQUFpQjs7O0lBSWhDLGdDQUE4QjtJQUM3QixZQUNEO0lBQUEsaUJBQU87OztJQUROLGVBQ0Q7SUFEQyxrREFDRDs7O0lBSUEsZ0NBQVU7SUFDVCxvQ0FBaUQ7SUFDbEQsaUJBQVc7OztJQURLLGVBQWlCO0lBQWpCLG1DQUFpQjs7O0lBS2pDLDZCQUFxRDtJQUNwRCxvQ0FBaUQ7SUFDbEQsaUJBQUk7OztJQUZzQixxRUFBMEI7SUFDcEMsZUFBaUI7SUFBakIsbUNBQWlCOzs7SUFLakMsMEJBQWdDOzs7SUFBM0Isb0VBQXlCOzs7SUFJOUIsZ0NBQStCO0lBQzlCLG1DQUEyRTtJQUM1RSxpQkFBTzs7O0lBRFEsZUFBMkI7SUFBM0IsNkNBQTJCLGtCQUFBOzs7SUFLMUMsb0NBQXNEOzs7SUFBbEMsbUNBQWlCOzs7SUFJckMsb0NBQXdEOzs7SUFBbEMsbUNBQWlCOzs7SUFJdkMsWUFDRDs7O0lBREMsa0RBQ0Q7OztJQUdDLHdDQUEyRDs7O0lBQXhDLHFDQUFtQjs7O0lBSXRDLGdDQUE0QjtJQUFBLFlBQXdDOztJQUFBLGlCQUFPOzs7SUFBL0MsZUFBd0M7SUFBeEMsMkVBQXdDOzs7SUFJcEUsbUNBQThFOzs7SUFBaEUseUNBQXVCLHlCQUFBOzs7SUFJckMsbUNB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ZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1udW1iZXJcIj5cblx0XHRcdFx0e3sgZWxlbWVudC52YWx1ZSB9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoaXAgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWNoaXA+XG5cdFx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdFx0PC9ndWktY2hpcD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNsaW5rIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGEgZ3VpLWJ1dHRvbiBsaW5rPVwidHJ1ZVwiIGhyZWY9XCJ7eyBlbGVtZW50LnZhbHVlIH19XCI+XG5cdFx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdFx0PC9hPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2ltYWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGltZyBzcmM9XCJ7eyBlbGVtZW50LnZhbHVlIH19XCIvPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoZWNrYm94IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiISFlbGVtZW50LnZhbHVlXCIgW2Rpc2FibGVkXT1cInRydWVcIj48L2d1aS1jaGVja2JveD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib2xkIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgYm9sZCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpdGFsaWMgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBpdGFsaWMgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY3VzdG9tIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudC52YWx1ZSB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Z1bmN0aW9uIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1mdW5jdGlvbi12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIj48L2d1aS1mdW5jdGlvbi12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2RhdGUgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHRcIj57eyBlbGVtZW50LnZhbHVlIHwgZGF0ZTogJ2RkL01NL3l5eXknIH19PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIiBbc2hvd1BlcmNlbnRhZ2VdPVwiZmFsc2VcIj48L2d1aS1iYXItdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlQmFyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1iYXItdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiIFtzaG93UGVyY2VudGFnZV09XCJ0cnVlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCI+PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCd0ZXh0JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHRleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdudW1iZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bnVtYmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hpcCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbGluaycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRsaW5rVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaW1hZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aW1hZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JvbGQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9sZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2l0YWxpYycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpdGFsaWNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjdXN0b20nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZnVuY3Rpb24nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZnVuY3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdkYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdiYXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0YmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgncGVyY2VudGFnZUJhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRwZXJjZW50YWdlQmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgncGVyY2VudGFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRwZXJjZW50YWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdHN3aXRjaCAodmlldykge1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlRFWFQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoaXBUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW5rVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLmltYWdlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrYm94VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9sZFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRhbGljVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXN0b21UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5GVU5DVElPTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGVyY2VudGFnZUJhclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlBFUkNFTlRBR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcmNlbnRhZ2VUZW1wbGF0ZTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dFRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=