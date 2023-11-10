import { Attribute, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CellValueType } from '../../../../../../core/composition/src/core-read/definition/cell-value';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../common/cdk/src/sanitize/safe.pipe";
export class TextViewComponent extends PureComponent {
    value;
    isHtml = false;
    constructor(isBold, isItalic, elementRef) {
        super(elementRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextViewComponent, deps: [{ token: 'bold', attribute: true }, { token: 'italic', attribute: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextViewComponent, selector: "gui-view-text[value]", inputs: { value: "value" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextViewComponent, decorators: [{
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
                }] }, { type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQWEsYUFBYSxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7O0FBbUJuRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQUduRCxLQUFLLENBQVk7SUFFakIsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVmLFlBQStCLE1BQVcsRUFDbEIsUUFBYSxFQUNsQyxVQUFzQjtRQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEIsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7d0dBM0JXLGlCQUFpQixrQkFPTixNQUFNLDhCQUNmLFFBQVE7NEZBUlYsaUJBQWlCLG9JQWZuQjs7Ozs7Ozs7Ozs7RUFXVDs7NEZBSVcsaUJBQWlCO2tCQWpCN0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7MEJBUWEsU0FBUzsyQkFBQyxNQUFNOzswQkFDekIsU0FBUzsyQkFBQyxRQUFRO3FFQUx0QixLQUFLO3NCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmFsdWUsIENlbGxWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS12aWV3LXRleHRbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0h0bWw7IGVsc2UgdGV4dFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJ2YWx1ZS52YWx1ZSB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7e3ZhbHVlLnZhbHVlfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBDZWxsVmFsdWU7XG5cblx0aXNIdG1sID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEF0dHJpYnV0ZSgnYm9sZCcpIGlzQm9sZDogYW55LFxuXHRcdFx0XHRAQXR0cmlidXRlKCdpdGFsaWMnKSBpc0l0YWxpYzogYW55LFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHRpZiAoaXNCb2xkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9sZCcpO1xuXHRcdH1cblxuXHRcdGlmIChpc0l0YWxpYyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0YWxpYycpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuaXNIdG1sID0gdGhpcy52YWx1ZS50eXBlID09PSBDZWxsVmFsdWVUeXBlLkhUTUw7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktdGV4dC12aWV3Jztcblx0fVxuXG59XG4iXX0=