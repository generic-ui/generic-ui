import { Directive } from '@angular/core';
import { ClassModifier } from './dom/class/class-modifier';
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
GuiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: GuiComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9ndWktY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUkzRCxNQUFNLE9BQWdCLFlBQVk7SUFJakMsWUFBdUMsZUFBMkI7UUFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7UUFGakQsdUJBQWtCLEdBQWtCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHMUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxjQUFjLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFJLElBQWdCO1FBQzdCLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFJLElBQWdCLEVBQUUsUUFBb0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1NBQ1g7SUFDRixDQUFDO0lBRU8sWUFBWTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O3lHQTlCb0IsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBRGpDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4vZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IENoYW5nZXMgfSBmcm9tICcuL25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaW5uZXJDbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5pbm5lckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5uZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0dGhpcy5hZGRIb3N0Q2xhc3MoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nO1xuXG5cdGFkZENsYXNzVG9Ib3N0KGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLmFkZChjbGFzc05hbWUpO1xuXHR9XG5cblx0cmVtb3ZlQ2xhc3NGcm9tSG9zdChjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmUoY2xhc3NOYW1lKTtcblx0fVxuXG5cdGhhc0NoYW5nZWQ8VD4ocHJvcDogQ2hhbmdlczxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBwcm9wICE9PSB1bmRlZmluZWQgJiYgcHJvcC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmQ2hhbmdlZDxUPihwcm9wOiBDaGFuZ2VzPFQ+LCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmhhc0NoYW5nZWQocHJvcCkpIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRIb3N0Q2xhc3MoKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLmFkZCh0aGlzLmdldFNlbGVjdG9yTmFtZSgpKTtcblx0fVxufVxuIl19