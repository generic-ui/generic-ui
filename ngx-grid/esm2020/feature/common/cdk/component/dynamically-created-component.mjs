import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
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
DynamicallyCreatedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DynamicallyCreatedComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: DynamicallyCreatedComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHMUMsTUFBTSxPQUFnQiwyQkFBMkI7SUFJaEQ7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDdkU7SUFDRixDQUFDO0lBRU8sU0FBUztRQUVoQixPQUFPLEtBQUssQ0FBQztRQUViLHdCQUF3QjtRQUN4QiwrREFBK0Q7SUFDaEUsQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFXO1FBQzFCLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ3RCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLHVDQUF1QyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlHLENBQUM7O3dIQTlCb0IsMkJBQTJCOzRHQUEzQiwyQkFBMkI7MkZBQTNCLDJCQUEyQjtrQkFEaEQsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKHRoaXMuaGFzSW5wdXRzKCkpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgY2Fubm90IGhhdmUgcHJvcGVydGllcyBhbm5vdGF0ZWQgd2l0aCBASW5wdXRzKCkuJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoYXNJbnB1dHMoKTogYm9vbGVhbiB7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHQvLyBXb3JrcyB3aXRoIEFuZ3VsYXIgMTJcblx0XHQvLyByZXR1cm4gIXRoaXMuaXNFbXB0eSgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLsm1Y21wLmlucHV0cyk7XG5cdH1cblxuXHRwcml2YXRlIGlzRW1wdHkob2JqOiBPYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcblx0XHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==