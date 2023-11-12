import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-message.service";
export class FabricMessageComponent {
    messageService;
    changeDetectorRef;
    text = '';
    constructor(messageService, changeDetectorRef) {
        this.messageService = messageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    close() {
        this.messageService.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricMessageComponent, deps: [{ token: i1.FabricMessageService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricMessageComponent, selector: "gui-message", ngImport: i0, template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, isInline: true, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-message', template: `
		<div class="gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"] }]
        }], ctorParameters: () => [{ type: i1.FabricMessageService }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL21lc3NhZ2UvZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQnpHLE1BQU0sT0FBTyxzQkFBc0I7SUFHTDtJQUNUO0lBSHBCLElBQUksR0FBVyxFQUFFLENBQUM7SUFFbEIsWUFBNkIsY0FBb0MsRUFDN0MsaUJBQW9DO1FBRDNCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUM3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO3VHQWJXLHNCQUFzQjsyRkFBdEIsc0JBQXNCLG1EQVp4Qjs7Ozs7RUFLVDs7MkZBT1csc0JBQXNCO2tCQWRsQyxTQUFTOytCQUNDLGFBQWEsWUFDYjs7Ozs7RUFLVCxpQkFJYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vZmFicmljLW1lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1tZXNzYWdlJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLW1lc3NhZ2VcIj5cblx0XHRcdHt7dGV4dH19XG5cdFx0XHQ8YnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+WDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtbWVzc2FnZS5jb21wb25lbnQuc2Nzcydcblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTWVzc2FnZUNvbXBvbmVudCB7XG5cdHRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZVNlcnZpY2U6IEZhYnJpY01lc3NhZ2VTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMubWVzc2FnZVNlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19