export class AggregateEvent {
    aggregateId;
    type;
    constructor(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    getAggregateId() {
        return this.aggregateId;
    }
    getType() {
        return this.type;
    }
    equals(event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    }
    equalsByType(event) {
        return this.getType() === event.getType();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFnQixjQUFjO0lBR2pCO0lBQ0E7SUFGbEIsWUFDa0IsV0FBYyxFQUNkLElBQVk7UUFEWixnQkFBVyxHQUFYLFdBQVcsQ0FBRztRQUNkLFNBQUksR0FBSixJQUFJLENBQVE7SUFDOUIsQ0FBQztJQUlELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVFdmVudDxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogVCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZykge1xuXHR9XG5cblx0YWJzdHJhY3QgdG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxUPjtcblxuXHRnZXRBZ2dyZWdhdGVJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdGVxdWFscyhldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHNCeVR5cGUoZXZlbnQpICYmXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkuZXF1YWxzKGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFR5cGUoKSA9PT0gZXZlbnQuZ2V0VHlwZSgpO1xuXHR9XG5cbn1cbiJdfQ==