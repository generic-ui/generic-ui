import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-message.service";
export class FabricMessageComponent {
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
}
FabricMessageComponent.ɵfac = function FabricMessageComponent_Factory(t) { return new (t || FabricMessageComponent)(i0.ɵɵdirectiveInject(i1.FabricMessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
FabricMessageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricMessageComponent, selectors: [["gui-message"]], decls: 4, vars: 1, consts: [[1, "gui-message"], [3, "click"]], template: function FabricMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function FabricMessageComponent_Template_button_click_2_listener() { return ctx.close(); });
        i0.ɵɵtext(3, "X");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, styles: [".gui-message{left:50%;position:fixed;top:50%}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricMessageComponent, [{
        type: Component,
        args: [{
                selector: 'gui-message',
                template: `
		<div class=" gui-message">
			{{text}}
			<button (click)="close()">X</button>
		</div>
	`,
                styleUrls: [
                    './fabric-message.ngx.scss'
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FabricMessageService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL21lc3NhZ2UvZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQnpHLE1BQU0sT0FBTyxzQkFBc0I7SUFHbEMsWUFBNkIsY0FBb0MsRUFDN0MsaUJBQW9DO1FBRDNCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUM3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs0RkFiVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQVhqQyw4QkFBMEI7UUFDekIsWUFDQTtRQUFBLGlDQUEwQjtRQUFsQixtR0FBUyxXQUFPLElBQUM7UUFBQyxpQkFBQztRQUFBLGlCQUFTO1FBQ3JDLGlCQUFNOztRQUZMLGVBQ0E7UUFEQSx5Q0FDQTs7dUZBU1Usc0JBQXNCO2NBZGxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7OztFQUtUO2dCQUNELFNBQVMsRUFBRTtvQkFDViwyQkFBMkI7aUJBQzNCO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbWVzc2FnZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cIiBndWktbWVzc2FnZVwiPlxuXHRcdFx0e3t0ZXh0fX1cblx0XHRcdDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5YPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1tZXNzYWdlLm5neC5zY3NzJ1xuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNNZXNzYWdlQ29tcG9uZW50IHtcblx0dGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZVNlcnZpY2U6IEZhYnJpY01lc3NhZ2VTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMubWVzc2FnZVNlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19