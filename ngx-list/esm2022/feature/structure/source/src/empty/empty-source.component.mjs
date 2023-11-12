import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/component/src/pure-component';
import { ifChanged } from '../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../l10n/src/translation.pipe";
export class EmptySourceComponent extends PureComponent {
    items;
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-py-23');
        this.addClassToHost('gui-px-6');
    }
    ngOnChanges(changes) {
        ifChanged(changes.items, () => {
            if (this.items.length === 0) {
                this.removeClassFromHost('gui-hidden');
                this.addClassToHost('gui-block');
            }
            else {
                this.removeClassFromHost('gui-block');
                this.addClassToHost('gui-hidden');
            }
        });
    }
    getSelectorName() {
        return 'gui-empty-source';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: EmptySourceComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: { items: "items" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: EmptySourceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-empty-source][items]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9lbXB0eS9lbXB0eS1zb3VyY2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2VtcHR5L2VtcHR5LXNvdXJjZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7O0FBU3pFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBR3RELEtBQUssQ0FBYztJQUVuQixZQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXdDO1FBRW5ELFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDO3VHQTFCVyxvQkFBb0I7MkZBQXBCLG9CQUFvQiw0SUNiakMsb0dBR0E7OzJGRFVhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDQyw4QkFBOEIsbUJBRXZCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7K0VBS3JDLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWVtcHR5LXNvdXJjZV1baXRlbXNdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2VtcHR5LXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U291cmNlQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0aXRlbXMhOiBBcnJheTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1weS0yMycpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1weC02Jyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8RW1wdHlTb3VyY2VDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5pdGVtcywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWhpZGRlbicpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1lbXB0eS1zb3VyY2UnO1xuXHR9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXMubGVuZ3RoID09PSAwXCI+XG5cdHt7J3NvdXJjZUVtcHR5JyB8IGd1aVRyYW5zbGF0ZX19XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==