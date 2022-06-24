export class ActiveFilterModel {
    constructor(filterId, fieldName, filterTypeName, value) {
        this.filterId = filterId;
        this.fieldName = fieldName;
        this.filterTypeName = filterTypeName;
        this.value = value;
    }
    getText() {
        return `${this.fieldName}: ${this.filterTypeName}: ${this.value}`;
    }
    getFilterId() {
        return this.filterId;
    }
    getFieldName() {
        return this.fieldName;
    }
    getFilterTypeName() {
        return this.filterTypeName;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8saUJBQWlCO0lBRTdCLFlBQTZCLFFBQWtCLEVBQzNCLFNBQWlCLEVBQ2pCLGNBQXNCLEVBQ3RCLEtBQVU7UUFIRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUM5QixDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vaWQvZmlsdGVyLmlkJztcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1vZGVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlcklkOiBGaWx0ZXJJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZE5hbWU6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlTmFtZTogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBhbnkpIHtcblx0fVxuXG5cdGdldFRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYCR7dGhpcy5maWVsZE5hbWV9OiAke3RoaXMuZmlsdGVyVHlwZU5hbWV9OiAke3RoaXMudmFsdWV9YDtcblx0fVxuXG5cdGdldEZpbHRlcklkKCk6IEZpbHRlcklkIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpZWxkTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkTmFtZTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU5hbWU7XG5cdH1cblxuXHRnZXRWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==