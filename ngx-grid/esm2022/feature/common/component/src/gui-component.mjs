import { Directive } from '@angular/core';
import { ClassModifier } from './dom/class/class-modifier';
import * as i0 from "@angular/core";
export class GuiComponent {
    innerElementRef;
    innerClassModifier;
    constructor(innerElementRef) {
        this.innerElementRef = innerElementRef;
        this.initClassModifier();
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
    initClassModifier() {
        this.innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
    }
    addHostClass() {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: GuiComponent, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9ndWktY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUkzRCxNQUFNLE9BQWdCLFlBQVk7SUFJTTtJQUYvQixrQkFBa0IsQ0FBZ0I7SUFFMUMsWUFBdUMsZUFBMkI7UUFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxjQUFjLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFJLElBQWdCO1FBQzdCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFJLElBQWdCLEVBQUUsUUFBb0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1NBQ1g7SUFDRixDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzt1R0FuQ29CLFlBQVk7MkZBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFEakMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi9kb20vY2xhc3MvY2xhc3MtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ2hhbmdlcyB9IGZyb20gJy4vbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBpbm5lckNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5uZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0dGhpcy5pbml0Q2xhc3NNb2RpZmllcigpO1xuXHRcdHRoaXMuYWRkSG9zdENsYXNzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZztcblxuXHRhZGRDbGFzc1RvSG9zdChjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXG5cdHJlbW92ZUNsYXNzRnJvbUhvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRoYXNDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZkNoYW5nZWQ8VD4ocHJvcDogQ2hhbmdlczxUPiwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5oYXNDaGFuZ2VkKHByb3ApKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5pdENsYXNzTW9kaWZpZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmlubmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkSG9zdENsYXNzKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQodGhpcy5nZXRTZWxlY3Rvck5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==