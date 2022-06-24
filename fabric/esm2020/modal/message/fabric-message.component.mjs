import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-message.service";
export class FabricMessageComponent {
    constructor(messageService, changeDetectorRef) {
        this.messageService = messageService;
        this.changeDetectorRef = changeDetectorRef;
        this.text = '';
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    close() {
        this.messageService.close();
    }
}
FabricMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageComponent, deps: [{ token: i1.FabricMessageService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FabricMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricMessageComponent, selector: "gui-message", ngImport: i0, template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, isInline: true, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-message', template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FabricMessageService }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL21lc3NhZ2UvZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQnpHLE1BQU0sT0FBTyxzQkFBc0I7SUFHbEMsWUFBNkIsY0FBb0MsRUFDN0MsaUJBQW9DO1FBRDNCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUM3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSHhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFJbEIsQ0FBQztJQUVELGFBQWE7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7O29IQWJXLHNCQUFzQjt3R0FBdEIsc0JBQXNCLG1EQVp4Qjs7Ozs7RUFLVDs0RkFPVyxzQkFBc0I7a0JBZGxDLFNBQVM7K0JBQ0MsYUFBYSxZQUNiOzs7OztFQUtULGlCQUljLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY01lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtbWVzc2FnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW1lc3NhZ2UnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktbWVzc2FnZVwiPlxuXHRcdFx0e3t0ZXh0fX1cblx0XHRcdDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5YPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1tZXNzYWdlLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNNZXNzYWdlQ29tcG9uZW50IHtcblx0dGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogRmFicmljTWVzc2FnZVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5tZXNzYWdlU2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iXX0=