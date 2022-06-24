import { __decorate } from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
let VerticalFormationModel = class VerticalFormationModel {
    constructor(enabled, topMargin, sourceHeight, viewportHeight, rowHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.sourceHeight = sourceHeight;
        this.viewportHeight = viewportHeight;
        this.rowHeight = rowHeight;
    }
    isEnabled() {
        return this.enabled;
    }
    getTopMargin() {
        return this.topMargin; //  * this.rowHeight;
    }
    getSourceHeight() {
        return this.sourceHeight;
    }
    getViewPortHeight() {
        return this.viewportHeight;
    }
    getRowHeight() {
        return this.rowHeight;
    }
};
VerticalFormationModel = __decorate([
    ReadModelObject
], VerticalFormationModel);
export { VerticalFormationModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZG9tYWluLXJlYWQvdmVydGljYWwtZm9ybWF0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJckQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFFbEMsWUFBNkIsT0FBZ0IsRUFDekIsU0FBaUIsRUFDakIsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsU0FBaUI7UUFKUixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUNyQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM3QyxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0NBRUQsQ0FBQTtBQTdCWSxzQkFBc0I7SUFEbEMsZUFBZTtHQUNILHNCQUFzQixDQTZCbEM7U0E3Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AUmVhZE1vZGVsT2JqZWN0XG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Nb2RlbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRvcE1hcmdpbjogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUhlaWdodDogbnVtYmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93SGVpZ2h0OiBudW1iZXIpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudG9wTWFyZ2luOyAvLyAgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdGdldFZpZXdQb3J0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmlld3BvcnRIZWlnaHQ7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19