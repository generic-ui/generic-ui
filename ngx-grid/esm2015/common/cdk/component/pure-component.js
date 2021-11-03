import { GuiComponent } from './gui-component';
import { Directive, ElementRef } from '@angular/core';
export class PureComponent extends GuiComponent {
    constructor(elementRef) {
        super(elementRef);
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = this.ngOnInit;
        if (!this.hasConstructorOnlyElementRefInjected(arguments)) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    hasConstructorOnlyElementRefInjected(args) {
        if (arguments.length > 1) {
            return false;
        }
        if (arguments.length === 1) {
            return this.isElementRef(arguments[0]);
        }
        return false;
    }
    isElementRef(elRef) {
        return elRef.nativeElement !== null;
    }
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a PureComponent, ${reason}.`);
    }
}
PureComponent.decorators = [
    { type: Directive }
];
PureComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RCxNQUFNLE9BQWdCLGFBQWMsU0FBUSxZQUFZO0lBTXZELFlBQXNCLFVBQXNCO1FBQzNDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUksSUFBWSxDQUFDLFFBQVEsQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFFTyxvQ0FBb0MsQ0FBQyxJQUFnQjtRQUU1RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSx5QkFBeUIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUF4Q0QsU0FBUzs7O1lBRlUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHVyZUNvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc0NvbnN0cnVjdG9yOiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YkNsYXNzTmdPbkluaXQ6IEZ1bmN0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdFx0dGhpcy5zdWJDbGFzc0NvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHR0aGlzLnN1YkNsYXNzTmdPbkluaXQgPSAodGhpcyBhcyBhbnkpLm5nT25Jbml0O1xuXG5cdFx0aWYgKCF0aGlzLmhhc0NvbnN0cnVjdG9yT25seUVsZW1lbnRSZWZJbmplY3RlZChhcmd1bWVudHMpKSB7XG5cdFx0XHR0aGlzLnRocm93RXJyb3IoJ2l0IHNob3VsZCBub3QgaW5qZWN0IHNlcnZpY2VzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3ViQ2xhc3NOZ09uSW5pdCkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IHVzZSBuZ09uSW5pdCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGFzQ29uc3RydWN0b3JPbmx5RWxlbWVudFJlZkluamVjdGVkKGFyZ3M6IElBcmd1bWVudHMpOiBib29sZWFuIHtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pc0VsZW1lbnRSZWYoYXJndW1lbnRzWzBdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGlzRWxlbWVudFJlZihlbFJlZjogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGVsUmVmLm5hdGl2ZUVsZW1lbnQgIT09IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIHRocm93RXJyb3IocmVhc29uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBcIiR7dGhpcy5zdWJDbGFzc0NvbnN0cnVjdG9yLm5hbWV9XCIgaXMgYSBQdXJlQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==