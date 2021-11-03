import { Directive } from '@angular/core';
import { ClassModifier } from '../dom/class/class-modifier';
import * as i0 from "@angular/core";
export class GuiComponent {
    constructor(innerElementRef) {
        this.innerElementRef = innerElementRef;
        this.innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
        this.addHostClass();
    }
    addClassToHost(className) {
        this.innerClassModifier.getHost().add(className);
    }
    removeClassFromHost(className) {
        this.innerClassModifier.getHost().remove(className);
    }
    hasChanged(prop) {
        return prop !== undefined && prop.currentValue !== undefined;
    }
    addHostClass() {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    }
}
GuiComponent.ɵfac = function GuiComponent_Factory(t) { return new (t || GuiComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
GuiComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: GuiComponent });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tbW9uL2Nkay9jb21wb25lbnQvZ3VpLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFJNUQsTUFBTSxPQUFnQixZQUFZO0lBSWpDLFlBQXVDLGVBQTJCO1FBQTNCLG9CQUFlLEdBQWYsZUFBZSxDQUFZO1FBRmpELHVCQUFrQixHQUFrQixJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRzFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBSUQsY0FBYyxDQUFDLFNBQWlCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLFNBQWlCO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBSSxJQUFnQjtRQUM3QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzt3RUF4Qm9CLFlBQVk7K0RBQVosWUFBWTt1RkFBWixZQUFZO2NBRGpDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlubmVyQ2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuaW5uZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGlubmVyRWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuYWRkSG9zdENsYXNzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZztcblxuXHRhZGRDbGFzc1RvSG9zdChjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXG5cdHJlbW92ZUNsYXNzRnJvbUhvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRoYXNDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFkZEhvc3RDbGFzcygpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRoaXMuZ2V0U2VsZWN0b3JOYW1lKCkpO1xuXHR9XG59XG4iXX0=