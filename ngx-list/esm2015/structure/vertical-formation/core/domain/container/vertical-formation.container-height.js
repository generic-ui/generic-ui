import { __decorate } from "tslib";
import { DomainObject, Optional } from '@generic-ui/hermes';
let VerticalFormationContainerHeight = class VerticalFormationContainerHeight {
    constructor() {
        this.containerHeight = Optional.empty();
    }
    isContainerHeightProperForVirtualScroll() {
        if (this.containerHeight.isPresent()) {
            return this.containerHeight.getValueOrNullOrThrowError() > 0;
        }
        else {
            return false;
        }
    }
    getVisibleContainerHeight() {
        return this.getHeight();
    }
    getHeight() {
        if (this.containerHeight.isPresent()) {
            return this.getContainerHeight();
        }
        return this.sourceHeight;
    }
    getSourceHeight() {
        return this.sourceHeight;
    }
    setContainerHeight(height) {
        if (height >= 0) {
            this.containerHeight = Optional.of(height);
        }
    }
    setSourceSize(height) {
        this.sourceHeight = height;
    }
    getContainerHeight() {
        if (this.containerHeight.getValueOrNullOrThrowError() > this.sourceHeight) {
            return this.sourceHeight;
        }
        else {
            return this.containerHeight.getValueOrNullOrThrowError();
        }
    }
};
VerticalFormationContainerHeight = __decorate([
    DomainObject
], VerticalFormationContainerHeight);
export { VerticalFormationContainerHeight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vY29udGFpbmVyL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb250YWluZXItaGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVELElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBQTdDO1FBRVMsb0JBQWUsR0FBcUIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBZ0Q5RCxDQUFDO0lBNUNBLHVDQUF1QztRQUN0QyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUVELHlCQUF5QjtRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUVSLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBRWhDLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtCQUFrQjtRQUV6QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDekQ7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQWxEWSxnQ0FBZ0M7SUFENUMsWUFBWTtHQUNBLGdDQUFnQyxDQWtENUM7U0FsRFksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0LCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCB7XG5cblx0cHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IE9wdGlvbmFsPG51bWJlcj4gPSBPcHRpb25hbC5lbXB0eSgpO1xuXG5cdHByaXZhdGUgc291cmNlSGVpZ2h0OiBudW1iZXI7XG5cblx0aXNDb250YWluZXJIZWlnaHRQcm9wZXJGb3JWaXJ0dWFsU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkgPiAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VmlzaWJsZUNvbnRhaW5lckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmdldEhlaWdodCgpO1xuXHR9XG5cblx0Z2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5jb250YWluZXJIZWlnaHQuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGhlaWdodCA+PSAwKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IE9wdGlvbmFsLm9mKGhlaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0U291cmNlU2l6ZShoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlSGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLmNvbnRhaW5lckhlaWdodC5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpID4gdGhpcy5zb3VyY2VIZWlnaHQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0LmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=