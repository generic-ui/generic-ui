export class SelectorVisibility {
    constructor() {
        this.enabled = null;
        this.visible = false;
    }
    isVisible() {
        if (this.enabled !== null) {
            return this.enabled;
        }
        return this.visible;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    setVisible(visible) {
        this.visible = visible;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItdmlzaWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvY29yZS9kb21haW4vbW9kZS9zZWxlY3Rvci9zZWxlY3Rvci12aXNpYmlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxrQkFBa0I7SUFNOUI7UUFKQSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELFNBQVM7UUFFUixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwQjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNlbGVjdG9yVmlzaWJpbGl0eSB7XG5cblx0ZW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XG5cblx0dmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0aXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKHRoaXMuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52aXNpYmxlO1xuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG5cdH1cblxufVxuIl19