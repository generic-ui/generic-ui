import { Attribute, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CellValueType } from '../../definition/cell-value';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../feature/common/cdk/sanitize/safe.pipe";
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
TextViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextViewComponent, deps: [{ token: 'bold', attribute: true }, { token: 'italic', attribute: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
TextViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextViewComponent, selector: "gui-view-text[value]", inputs: { value: "value" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "guiSafe": i2.SafePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextViewComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['bold']
                }] }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['italic']
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFhLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7OztBQW1CM0YsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQWE7SUFPbkQsWUFBK0IsTUFBVyxFQUNsQixRQUFhLEVBQ2pCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUx2QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBUWQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7OytHQTVCVyxpQkFBaUIsa0JBT04sTUFBTSw4QkFDZixRQUFRO21HQVJWLGlCQUFpQixvSUFmbkI7Ozs7Ozs7Ozs7O0VBV1Q7NEZBSVcsaUJBQWlCO2tCQWpCN0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7MEJBUWEsU0FBUzsyQkFBQyxNQUFNOzswQkFDekIsU0FBUzsyQkFBQyxRQUFROzZGQUx0QixLQUFLO3NCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWYWx1ZSwgQ2VsbFZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL2RlZmluaXRpb24vY2VsbC12YWx1ZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS12aWV3LXRleHRbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0h0bWw7IGVsc2UgdGV4dFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJ2YWx1ZS52YWx1ZSB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7e3ZhbHVlLnZhbHVlfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBDZWxsVmFsdWU7XG5cblx0aXNIdG1sID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEF0dHJpYnV0ZSgnYm9sZCcpIGlzQm9sZDogYW55LFxuXHRcdFx0XHRAQXR0cmlidXRlKCdpdGFsaWMnKSBpc0l0YWxpYzogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXG5cdFx0aWYgKGlzQm9sZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJvbGQnKTtcblx0XHR9XG5cblx0XHRpZiAoaXNJdGFsaWMgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1pdGFsaWMnKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmlzSHRtbCA9IHRoaXMudmFsdWUudHlwZSA9PT0gQ2VsbFZhbHVlVHlwZS5IVE1MO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXRleHQtdmlldyc7XG5cdH1cblxufVxuIl19