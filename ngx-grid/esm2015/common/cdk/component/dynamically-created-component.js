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
DynamicallyCreatedComponent.ɵfac = function DynamicallyCreatedComponent_Factory(t) { return new (t || DynamicallyCreatedComponent)(); };
DynamicallyCreatedComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DynamicallyCreatedComponent });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicallyCreatedComponent, [{
        type: Directive
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbW1vbi9jZGsvY29tcG9uZW50L2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzFDLE1BQU0sT0FBZ0IsMkJBQTJCO0lBSWhEO1FBQ0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0YsQ0FBQztJQUVPLFNBQVM7UUFFaEIsT0FBTyxLQUFLLENBQUM7UUFFYix3QkFBd0I7UUFDeEIsK0RBQStEO0lBQ2hFLENBQUM7SUFFTyxPQUFPLENBQUMsR0FBVztRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSx1Q0FBdUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5RyxDQUFDOztzR0E5Qm9CLDJCQUEyQjs4RUFBM0IsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FEaEQsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljYWxseUNyZWF0ZWRDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0aWYgKHRoaXMuaGFzSW5wdXRzKCkpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgY2Fubm90IGhhdmUgcHJvcGVydGllcyBhbm5vdGF0ZWQgd2l0aCBASW5wdXRzKCkuJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoYXNJbnB1dHMoKTogYm9vbGVhbiB7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHQvLyBXb3JrcyB3aXRoIEFuZ3VsYXIgMTJcblx0XHQvLyByZXR1cm4gIXRoaXMuaXNFbXB0eSgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLsm1Y21wLmlucHV0cyk7XG5cdH1cblxuXHRwcml2YXRlIGlzRW1wdHkob2JqOiBPYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcblx0XHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==