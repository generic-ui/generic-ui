export class SelectOptionsCords {
    window;
    static BORDER_WIDTH = 1;
    verticalPosition = 0;
    horizontalPosition = 0;
    canOpenUpward = false;
    constructor(element, selectContainerGeometry, window) {
        this.window = window;
        this.calculateCords(element, selectContainerGeometry);
    }
    getVerticalPosition() {
        return this.verticalPosition;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    getCanOpenUpward() {
        return this.canOpenUpward;
    }
    calculateCords(element, selectOptionsGeometry) {
        const elementRect = element.nativeElement.getBoundingClientRect(), elementBottom = this.window.pageYOffset + elementRect.bottom, elementLeft = this.window.pageXOffset + elementRect.left;
        this.horizontalPosition = elementLeft;
        this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
        this.calculateDirection(selectOptionsGeometry, element);
    }
    calculateDirection(selectOptionsGeometry, element) {
        const windowHeight = this.window.innerHeight + this.window.pageYOffset, elementHeight = element.nativeElement.offsetHeight, selectOptionsHeight = selectOptionsGeometry.getHeight();
        const selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
        if (selectOptionsDoesNotFitVertically) {
            this.canOpenUpward = true;
            this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29yZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zZWxlY3Qvb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sa0JBQWtCO0lBV1Y7SUFWWixNQUFNLENBQVUsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUVqQyxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFFN0Isa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO0lBRS9CLGFBQWEsR0FBWSxLQUFLLENBQUM7SUFFdkMsWUFBWSxPQUFtQixFQUM1Qix1QkFBOEMsRUFDN0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQW1CLEVBQUUscUJBQTRDO1FBRXZGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsRUFDaEUsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQzVELFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRTFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxxQkFBNEMsRUFBRSxPQUFtQjtRQUMzRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFDckUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUNsRCxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6RCxNQUFNLGlDQUFpQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRyxJQUFJLGlDQUFpQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1NBQy9GO0lBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSB9IGZyb20gJy4vc2VsZWN0LWdlb21ldHJ5JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGlvbnNDb3JkcyB7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEJPUkRFUl9XSURUSCA9IDE7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHNlbGVjdENvbnRhaW5lckdlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3cpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQsIHNlbGVjdENvbnRhaW5lckdlb21ldHJ5KTtcblx0fVxuXG5cdGdldFZlcnRpY2FsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuXHR9XG5cblx0Z2V0Q2FuT3BlblVwd2FyZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jYW5PcGVuVXB3YXJkO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBzZWxlY3RPcHRpb25zR2VvbWV0cnk6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRlbGVtZW50Qm90dG9tID0gdGhpcy53aW5kb3cucGFnZVlPZmZzZXQgKyBlbGVtZW50UmVjdC5ib3R0b20sXG5cdFx0XHRlbGVtZW50TGVmdCA9IHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0ICsgZWxlbWVudFJlY3QubGVmdDtcblxuXHRcdHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uID0gZWxlbWVudExlZnQ7XG5cdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uID0gZWxlbWVudEJvdHRvbSAtIFNlbGVjdE9wdGlvbnNDb3Jkcy5CT1JERVJfV0lEVEg7XG5cdFx0dGhpcy5jYWxjdWxhdGVEaXJlY3Rpb24oc2VsZWN0T3B0aW9uc0dlb21ldHJ5LCBlbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGlyZWN0aW9uKHNlbGVjdE9wdGlvbnNHZW9tZXRyeTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5LCBlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gdGhpcy53aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0c2VsZWN0T3B0aW9uc0hlaWdodCA9IHNlbGVjdE9wdGlvbnNHZW9tZXRyeS5nZXRIZWlnaHQoKTtcblxuXHRcdGNvbnN0IHNlbGVjdE9wdGlvbnNEb2VzTm90Rml0VmVydGljYWxseSA9ICh3aW5kb3dIZWlnaHQgLSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gLSBzZWxlY3RPcHRpb25zSGVpZ2h0KSA8IDA7XG5cblx0XHRpZiAoc2VsZWN0T3B0aW9uc0RvZXNOb3RGaXRWZXJ0aWNhbGx5KSB7XG5cdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSB0cnVlO1xuXHRcdFx0dGhpcy52ZXJ0aWNhbFBvc2l0aW9uIC09IHNlbGVjdE9wdGlvbnNIZWlnaHQgKyBlbGVtZW50SGVpZ2h0IC0gU2VsZWN0T3B0aW9uc0NvcmRzLkJPUkRFUl9XSURUSDtcblx0XHR9XG5cdH1cblxufVxuIl19