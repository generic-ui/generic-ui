export class HermesSubscription {
    constructor(finalize, isClosed) {
        this.closed = false;
        this.finalize = () => {
        };
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    }
    getFinalize() {
        return this.finalize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxrQkFBa0I7SUFPOUIsWUFBWSxRQUFxQixFQUFFLFFBQWtCO1FBTDdDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFZixhQUFRLEdBQWUsR0FBRyxFQUFFO1FBQzdDLENBQUMsQ0FBQztRQUlELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSTtZQUM5QyxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDekI7UUFFRCxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUN2QjtJQUNGLENBQUM7SUFFRCxXQUFXO1FBRVYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmluYWxpemU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cdH07XG5cblx0Y29uc3RydWN0b3IoZmluYWxpemU/OiAoKSA9PiB2b2lkLCBpc0Nsb3NlZD86IGJvb2xlYW4pIHtcblxuXHRcdGlmIChmaW5hbGl6ZSAhPT0gdW5kZWZpbmVkICYmIGZpbmFsaXplICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmluYWxpemUgPSBmaW5hbGl6ZTtcblx0XHR9XG5cblx0XHRpZiAoaXNDbG9zZWQgIT09IHVuZGVmaW5lZCAmJiBpc0Nsb3NlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jbG9zZWQgPSBpc0Nsb3NlZDtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmZpbmFsaXplKCk7XG5cdH1cblxuXHRnZXRGaW5hbGl6ZSgpOiAoKSA9PiB2b2lkIHtcblx0XHRyZXR1cm4gdGhpcy5maW5hbGl6ZTtcblx0fVxufVxuIl19