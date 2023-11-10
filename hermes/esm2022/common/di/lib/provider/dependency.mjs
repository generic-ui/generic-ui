export class Dependency {
    serviceToken;
    constructor(serviceToken) {
        this.serviceToken = serviceToken;
    }
    getToken() {
        if (typeof this.serviceToken === 'object') {
            return this.serviceToken.inject;
        }
        else {
            return this.serviceToken;
        }
    }
    isOptional() {
        if (typeof this.serviceToken !== 'string' &&
            typeof this.serviceToken === 'object' &&
            this.serviceToken.optional !== undefined) {
            return this.serviceToken.optional;
        }
        return false;
    }
    /**
     * @deprecated
     */
    isCollection() {
        if (typeof this.serviceToken !== 'string' &&
            typeof this.serviceToken === 'object' &&
            this.serviceToken.collection) {
            return this.serviceToken.collection;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL3Byb3ZpZGVyL2RlcGVuZGVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLFVBQVU7SUFFTztJQUE3QixZQUE2QixZQUErQjtRQUEvQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7SUFDNUQsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNoQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1gsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUN4QyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlVG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlLnRva2VuJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vdG9rZW4nO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlVG9rZW46IFNlcnZpY2VUb2tlbjxhbnk+KSB7XG5cdH1cblxuXHRnZXRUb2tlbjxUPigpOiBUb2tlbjxUPiB7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMuc2VydmljZVRva2VuID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VydmljZVRva2VuLmluamVjdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VydmljZVRva2VuO1xuXHRcdH1cblx0fVxuXG5cdGlzT3B0aW9uYWwoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnNlcnZpY2VUb2tlbiAhPT0gJ3N0cmluZycgJiZcblx0XHRcdHR5cGVvZiB0aGlzLnNlcnZpY2VUb2tlbiA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHRoaXMuc2VydmljZVRva2VuLm9wdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNlcnZpY2VUb2tlbi5vcHRpb25hbDtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRpc0NvbGxlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnNlcnZpY2VUb2tlbiAhPT0gJ3N0cmluZycgJiZcblx0XHRcdHR5cGVvZiB0aGlzLnNlcnZpY2VUb2tlbiA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHRoaXMuc2VydmljZVRva2VuLmNvbGxlY3Rpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlcnZpY2VUb2tlbi5jb2xsZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxufVxuIl19