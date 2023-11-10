export class FormationCustomSelectionFunctionModel {
    key;
    text;
    customSelectId;
    builtIn;
    method;
    constructor(key, text, customSelectId, builtIn, method) {
        this.key = key;
        this.text = text;
        this.customSelectId = customSelectId;
        this.builtIn = builtIn;
        this.method = method;
    }
    getKey() {
        return this.key;
    }
    getText() {
        return this.text;
    }
    getCustomSelectId() {
        return this.customSelectId;
    }
    isBuiltIn() {
        return this.builtIn;
    }
    customSelect(items) {
        return this.method(items);
    }
}
export class FormationCustomSelection {
    enabled;
    selections;
    constructor(enabled, selections) {
        this.enabled = enabled;
        this.selections = selections;
    }
    isEnabled() {
        return this.enabled;
    }
    getSelections() {
        return this.selections;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8scUNBQXFDO0lBRXBCO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFKcEIsWUFBNkIsR0FBVyxFQUNwQixJQUFZLEVBQ1osY0FBdUMsRUFDdkMsT0FBZ0IsRUFDaEIsTUFBd0Q7UUFKL0MsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQXlCO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0Q7SUFFNUUsQ0FBQztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUVEO0FBRUQsTUFBTSxPQUFPLHdCQUF3QjtJQUVQO0lBQ1Q7SUFEcEIsWUFBNkIsT0FBZ0IsRUFDekIsVUFBd0Q7UUFEL0MsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUN6QixlQUFVLEdBQVYsVUFBVSxDQUE4QztJQUM1RSxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3RJZCB9IGZyb20gJy4vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3QuaWQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uRnVuY3Rpb25Nb2RlbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBrZXk6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0ZXh0OiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY3VzdG9tU2VsZWN0SWQ6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGJ1aWx0SW46IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbWV0aG9kPzogKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4gQXJyYXk8SXRlbUVudGl0eT5cblx0KSB7XG5cdH1cblxuXHRnZXRLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5rZXk7XG5cdH1cblxuXHRnZXRUZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0fVxuXG5cdGdldEN1c3RvbVNlbGVjdElkKCk6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdElkIHtcblx0XHRyZXR1cm4gdGhpcy5jdXN0b21TZWxlY3RJZDtcblx0fVxuXG5cdGlzQnVpbHRJbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5idWlsdEluO1xuXHR9XG5cblx0Y3VzdG9tU2VsZWN0KGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5tZXRob2QoaXRlbXMpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvbnM6IEFycmF5PEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkZ1bmN0aW9uTW9kZWw+KSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldFNlbGVjdGlvbnMoKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0aW9ucztcblx0fVxuXG59XG4iXX0=