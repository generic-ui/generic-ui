import { Directive } from '@angular/core';
import { ClassModifier } from '../../../dom/class/class-modifier';
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
    ifChanged(prop, callback) {
        if (this.hasChanged(prop)) {
            callback();
        }
    }
    addHostClass() {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    }
}
GuiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: GuiComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9ndWktY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUlsRSxNQUFNLE9BQWdCLFlBQVk7SUFJakMsWUFBdUMsZUFBMkI7UUFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7UUFGakQsdUJBQWtCLEdBQWtCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHMUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxjQUFjLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFJLElBQWdCO1FBQzdCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFJLElBQWdCLEVBQUUsUUFBb0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1NBQ1g7SUFDRixDQUFDO0lBRU8sWUFBWTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O3lHQTlCb0IsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBRGpDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlubmVyQ2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuaW5uZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGlubmVyRWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuYWRkSG9zdENsYXNzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZztcblxuXHRhZGRDbGFzc1RvSG9zdChjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXG5cdHJlbW92ZUNsYXNzRnJvbUhvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRoYXNDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZkNoYW5nZWQ8VD4ocHJvcDogQ2hhbmdlczxUPiwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5oYXNDaGFuZ2VkKHByb3ApKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkSG9zdENsYXNzKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQodGhpcy5nZXRTZWxlY3Rvck5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==