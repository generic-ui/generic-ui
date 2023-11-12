import { __decorate } from "tslib";
import { DomainObject, Optional } from '@generic-ui/hermes';
let VerticalFormationContainerHeight = class VerticalFormationContainerHeight {
    containerHeight = Optional.empty();
    sourceHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvZG9tYWluL2NvbnRhaW5lci92ZXJ0aWNhbC1mb3JtYXRpb24uY29udGFpbmVyLWhlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxJQUFNLGdDQUFnQyxHQUF0QyxNQUFNLGdDQUFnQztJQUVwQyxlQUFlLEdBQXFCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVyRCxZQUFZLENBQVM7SUFFN0IsdUNBQXVDO1FBQ3RDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBRUQseUJBQXlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTO1FBRVIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFFaEMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU8sa0JBQWtCO1FBRXpCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUN6RDtJQUNGLENBQUM7Q0FDRCxDQUFBO0FBbERZLGdDQUFnQztJQUQ1QyxZQUFZO0dBQ0EsZ0NBQWdDLENBa0Q1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbk9iamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ARG9tYWluT2JqZWN0XG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQge1xuXG5cdHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBPcHRpb25hbDxudW1iZXI+ID0gT3B0aW9uYWwuZW1wdHkoKTtcblxuXHRwcml2YXRlIHNvdXJjZUhlaWdodDogbnVtYmVyO1xuXG5cdGlzQ29udGFpbmVySGVpZ2h0UHJvcGVyRm9yVmlydHVhbFNjcm9sbCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5jb250YWluZXJIZWlnaHQuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodC5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpID4gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGdldFZpc2libGVDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcblx0fVxuXG5cdGdldEhlaWdodCgpOiBudW1iZXIge1xuXG5cdFx0aWYgKHRoaXMuY29udGFpbmVySGVpZ2h0LmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRDb250YWluZXJIZWlnaHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VIZWlnaHQ7XG5cdH1cblxuXHRnZXRTb3VyY2VIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VIZWlnaHQ7XG5cdH1cblxuXHRzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChoZWlnaHQgPj0gMCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBPcHRpb25hbC5vZihoZWlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHNldFNvdXJjZVNpemUoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUhlaWdodCA9IGhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29udGFpbmVySGVpZ2h0KCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5jb250YWluZXJIZWlnaHQuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKSA+IHRoaXMuc291cmNlSGVpZ2h0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VIZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckhlaWdodC5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXHRcdH1cblx0fVxufVxuIl19