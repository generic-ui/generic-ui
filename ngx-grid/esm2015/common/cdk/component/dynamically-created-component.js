import { Directive } from '@angular/core';
export class DynamicallyCreatedComponent {
    constructor() {
        this.subClassConstructor = this.constructor;
        if (this.hasInputs()) {
            this.throwError('it cannot have properties annotated with @Inputs().');
        }
    }
    hasInputs() {
        return false;
        // Works with Angular 12
        // return !this.isEmpty((this.constructor as any).ɵcmp.inputs);
    }
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a DynamicallyCreatedComponent, ${reason}.`);
    }
}
DynamicallyCreatedComponent.decorators = [
    { type: Directive }
];
DynamicallyCreatedComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbW1vbi9jZGsvY29tcG9uZW50L2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsTUFBTSxPQUFnQiwyQkFBMkI7SUFJaEQ7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDdkU7SUFDRixDQUFDO0lBRU8sU0FBUztRQUVoQixPQUFPLEtBQUssQ0FBQztRQUViLHdCQUF3QjtRQUN4QiwrREFBK0Q7SUFDaEUsQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFXO1FBQzFCLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ3RCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLHVDQUF1QyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlHLENBQUM7OztZQS9CRCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc0NvbnN0cnVjdG9yOiBGdW5jdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdWJDbGFzc0NvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAodGhpcy5oYXNJbnB1dHMoKSkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzIGFubm90YXRlZCB3aXRoIEBJbnB1dHMoKS4nKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0lucHV0cygpOiBib29sZWFuIHtcblxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRcdC8vIFdvcmtzIHdpdGggQW5ndWxhciAxMlxuXHRcdC8vIHJldHVybiAhdGhpcy5pc0VtcHR5KCh0aGlzLmNvbnN0cnVjdG9yIGFzIGFueSkuybVjbXAuaW5wdXRzKTtcblx0fVxuXG5cdHByaXZhdGUgaXNFbXB0eShvYmo6IE9iamVjdCkge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuXHRcdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHRocm93RXJyb3IocmVhc29uOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBcIiR7dGhpcy5zdWJDbGFzc0NvbnN0cnVjdG9yLm5hbWV9XCIgaXMgYSBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQsICR7cmVhc29ufS5gKTtcblx0fVxufVxuIl19