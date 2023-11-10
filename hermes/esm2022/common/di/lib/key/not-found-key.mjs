import { Key } from './key';
export class NotFoundKey extends Key {
    constructor(token) {
        super(token);
    }
    getError() {
        if (typeof this.token === 'string') {
            return 'Key not found for the token: ' + this.token;
        }
        else {
            return 'Key not found for the token: ' + this.token.toString();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLWtleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL2tleS9ub3QtZm91bmQta2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFHNUIsTUFBTSxPQUFPLFdBQWUsU0FBUSxHQUFNO0lBRXpDLFlBQVksS0FBZTtRQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxPQUFPLCtCQUErQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNOLE9BQU8sK0JBQStCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvRDtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleSB9IGZyb20gJy4va2V5JztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vdG9rZW4nO1xuXG5leHBvcnQgY2xhc3MgTm90Rm91bmRLZXk8VD4gZXh0ZW5kcyBLZXk8VD4ge1xuXG5cdGNvbnN0cnVjdG9yKHRva2VuOiBUb2tlbjxUPikge1xuXHRcdHN1cGVyKHRva2VuKTtcblx0fVxuXG5cdGdldEVycm9yKCk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnRva2VuID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdLZXkgbm90IGZvdW5kIGZvciB0aGUgdG9rZW46ICcgKyB0aGlzLnRva2VuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ0tleSBub3QgZm91bmQgZm9yIHRoZSB0b2tlbjogJyArIHRoaXMudG9rZW4udG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxufVxuIl19