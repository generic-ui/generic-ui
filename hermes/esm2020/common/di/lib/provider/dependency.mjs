export class Dependency {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL3Byb3ZpZGVyL2RlcGVuZGVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLFVBQVU7SUFFdEIsWUFBNkIsWUFBK0I7UUFBL0IsaUJBQVksR0FBWixZQUFZLENBQW1CO0lBQzVELENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDaEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFFRCxVQUFVO1FBQ1QsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUN4QyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNYLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVE7WUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVE7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztTQUNwQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZVRva2VuIH0gZnJvbSAnLi4vc2VydmljZS50b2tlbic7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4uL3Rva2VuJztcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VydmljZVRva2VuOiBTZXJ2aWNlVG9rZW48YW55Pikge1xuXHR9XG5cblx0Z2V0VG9rZW48VD4oKTogVG9rZW48VD4ge1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnNlcnZpY2VUb2tlbiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiB0aGlzLnNlcnZpY2VUb2tlbi5pbmplY3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNlcnZpY2VUb2tlbjtcblx0XHR9XG5cdH1cblxuXHRpc09wdGlvbmFsKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5zZXJ2aWNlVG9rZW4gIT09ICdzdHJpbmcnICYmXG5cdFx0XHR0eXBlb2YgdGhpcy5zZXJ2aWNlVG9rZW4gPT09ICdvYmplY3QnICYmXG5cdFx0XHR0aGlzLnNlcnZpY2VUb2tlbi5vcHRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXJ2aWNlVG9rZW4ub3B0aW9uYWw7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0aXNDb2xsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5zZXJ2aWNlVG9rZW4gIT09ICdzdHJpbmcnICYmXG5cdFx0XHR0eXBlb2YgdGhpcy5zZXJ2aWNlVG9rZW4gPT09ICdvYmplY3QnICYmXG5cdFx0XHR0aGlzLnNlcnZpY2VUb2tlbi5jb2xsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXJ2aWNlVG9rZW4uY29sbGVjdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn1cbiJdfQ==