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
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a DynamicallyCreatedComponent, ${reason}.`);
    }
}
DynamicallyCreatedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DynamicallyCreatedComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: DynamicallyCreatedComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DynamicallyCreatedComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHMUMsTUFBTSxPQUFnQiwyQkFBMkI7SUFJaEQ7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDdkU7SUFDRixDQUFDO0lBRU8sU0FBUztRQUVoQixPQUFPLEtBQUssQ0FBQztRQUViLHdCQUF3QjtRQUN4QiwrREFBK0Q7SUFDaEUsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSx1Q0FBdUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5RyxDQUFDOzt3SEFyQm9CLDJCQUEyQjs0R0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBRGhELFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YkNsYXNzQ29uc3RydWN0b3I6IEZ1bmN0aW9uO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN1YkNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0aGlzLmhhc0lucHV0cygpKSB7XG5cdFx0XHR0aGlzLnRocm93RXJyb3IoJ2l0IGNhbm5vdCBoYXZlIHByb3BlcnRpZXMgYW5ub3RhdGVkIHdpdGggQElucHV0cygpLicpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaGFzSW5wdXRzKCk6IGJvb2xlYW4ge1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gV29ya3Mgd2l0aCBBbmd1bGFyIDEyXG5cdFx0Ly8gcmV0dXJuICF0aGlzLmlzRW1wdHkoKHRoaXMuY29uc3RydWN0b3IgYXMgYW55KS7JtWNtcC5pbnB1dHMpO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50LCAke3JlYXNvbn0uYCk7XG5cdH1cbn1cbiJdfQ==