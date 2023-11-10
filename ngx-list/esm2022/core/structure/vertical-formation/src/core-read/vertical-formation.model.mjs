import { __decorate } from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
export let VerticalFormationModel = class VerticalFormationModel {
    enabled;
    topMargin;
    sourceHeight;
    viewportHeight;
    rowHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2NvcmUtcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QyxXQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUFzQjtJQUVMO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFKcEIsWUFBNkIsT0FBZ0IsRUFDekIsU0FBaUIsRUFDakIsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsU0FBaUI7UUFKUixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUNyQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHFCQUFxQjtJQUM3QyxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0NBRUQsQ0FBQTtBQTdCWSxzQkFBc0I7SUFEbEMsZUFBZTtHQUNILHNCQUFzQixDQTZCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBSZWFkTW9kZWxPYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbk1vZGVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdG9wTWFyZ2luOiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlSGVpZ2h0OiBudW1iZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmlld3BvcnRIZWlnaHQ6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dIZWlnaHQ6IG51bWJlcikge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRUb3BNYXJnaW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy50b3BNYXJnaW47IC8vICAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Z2V0U291cmNlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0O1xuXHR9XG5cblx0Z2V0Vmlld1BvcnRIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3cG9ydEhlaWdodDtcblx0fVxuXG5cdGdldFJvd0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG59XG4iXX0=