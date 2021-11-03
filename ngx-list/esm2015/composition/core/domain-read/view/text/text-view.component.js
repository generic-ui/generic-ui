import { Attribute, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CellValueType } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../common/cdk/sanitize/safe.pipe";
const _c0 = ["value", ""];
function TextViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 2);
    i0.ɵɵpipe(2, "guiSafe");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(2, 1, ctx_r0.value.value, "html"), i0.ɵɵsanitizeHtml);
} }
function TextViewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.value.value, " ");
} }
export class TextViewComponent extends PureComponent {
    constructor(isBold, isItalic, elementRef, renderer) {
        super(elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.addClassToHost('gui-bold');
        }
        if (isItalic !== null) {
            this.addClassToHost('gui-italic');
        }
    }
    ngOnChanges() {
        this.isHtml = this.value.type === CellValueType.HTML;
    }
    getSelectorName() {
        return 'gui-text-view';
    }
}
TextViewComponent.ɵfac = function TextViewComponent_Factory(t) { return new (t || TextViewComponent)(i0.ɵɵinjectAttribute('bold'), i0.ɵɵinjectAttribute('italic'), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
TextViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextViewComponent, selectors: [["gui-view-text", "value", ""]], inputs: { value: "value" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["text", ""], [3, "innerHTML"]], template: function TextViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TextViewComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        i0.ɵɵtemplate(1, TextViewComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isHtml)("ngIfElse", _r1);
    } }, directives: [i1.NgIf], pipes: [i2.SafePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextViewComponent, [{
        type: Component,
        args: [{
                selector: 'gui-view-text[value]',
                template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['bold']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['italic']
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFhLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7O0lBTWpGLDZCQUF3QztJQUN2QywwQkFBeUQ7O0lBQzFELDBCQUFlOzs7SUFEUixlQUEyQztJQUEzQywrRkFBMkM7OztJQUlqRCw0QkFBTTtJQUNMLFlBQ0Q7SUFBQSxpQkFBTzs7O0lBRE4sZUFDRDtJQURDLG1EQUNEOztBQU1ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBT25ELFlBQStCLE1BQVcsRUFDbEIsUUFBYSxFQUNqQixVQUFzQixFQUN0QixRQUFtQjtRQUN0QyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMdkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVFkLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOztrRkE1QlcsaUJBQWlCLHVCQU9OLE1BQU0sd0JBQ2YsUUFBUTtvRUFSVixpQkFBaUI7UUFiNUIsb0ZBRWU7UUFFZixtSEFJYzs7O1FBUkMsaUNBQWMsaUJBQUE7O3VGQWFsQixpQkFBaUI7Y0FqQjdCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOztzQkFRYSxTQUFTO3VCQUFDLE1BQU07O3NCQUN6QixTQUFTO3VCQUFDLFFBQVE7eUVBTHRCLEtBQUs7a0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZhbHVlLCBDZWxsVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS12aWV3LXRleHRbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0h0bWw7IGVsc2UgdGV4dFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJ2YWx1ZS52YWx1ZSB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7e3ZhbHVlLnZhbHVlfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBDZWxsVmFsdWU7XG5cblx0aXNIdG1sID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEF0dHJpYnV0ZSgnYm9sZCcpIGlzQm9sZDogYW55LFxuXHRcdFx0XHRAQXR0cmlidXRlKCdpdGFsaWMnKSBpc0l0YWxpYzogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXG5cdFx0aWYgKGlzQm9sZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJvbGQnKTtcblx0XHR9XG5cblx0XHRpZiAoaXNJdGFsaWMgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1pdGFsaWMnKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmlzSHRtbCA9IHRoaXMudmFsdWUudHlwZSA9PT0gQ2VsbFZhbHVlVHlwZS5IVE1MO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXRleHQtdmlldyc7XG5cdH1cblxufVxuIl19