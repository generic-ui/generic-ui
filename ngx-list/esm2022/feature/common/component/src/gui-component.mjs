import { Directive } from '@angular/core';
import { ClassModifier } from './dom/class/class-modifier';
import * as i0 from "@angular/core";
export class GuiComponent {
    innerElementRef;
    // @ts-ignore
    innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
    constructor(innerElementRef) {
        this.innerElementRef = innerElementRef;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GuiComponent, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9ndWktY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUkzRCxNQUFNLE9BQWdCLFlBQVk7SUFLTTtJQUh2QyxhQUFhO0lBQ0ksa0JBQWtCLEdBQWtCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0csWUFBdUMsZUFBMkI7UUFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7UUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxjQUFjLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFJLElBQWdCO1FBQzdCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFJLElBQWdCLEVBQUUsUUFBb0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1NBQ1g7SUFDRixDQUFDO0lBRU8sWUFBWTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7d0dBL0JvQixZQUFZOzRGQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBRGpDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4vZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IENoYW5nZXMgfSBmcm9tICcuL25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlDb21wb25lbnQge1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cHJpdmF0ZSByZWFkb25seSBpbm5lckNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmlubmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbm5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmFkZEhvc3RDbGFzcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmc7XG5cblx0YWRkQ2xhc3NUb0hvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRyZW1vdmVDbGFzc0Zyb21Ib3N0KGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZShjbGFzc05hbWUpO1xuXHR9XG5cblx0aGFzQ2hhbmdlZDxUPihwcm9wOiBDaGFuZ2VzPFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWZDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4sIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGFzQ2hhbmdlZChwcm9wKSkge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEhvc3RDbGFzcygpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRoaXMuZ2V0U2VsZWN0b3JOYW1lKCkpO1xuXHR9XG59XG4iXX0=