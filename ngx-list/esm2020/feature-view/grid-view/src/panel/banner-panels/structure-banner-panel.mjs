import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { Directive } from '@angular/core';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructureBannerPanel extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
    }
    initObservables() {
        this.bannerPanel$ = this.selectBannerPanelTemplate();
    }
    selectBannerPanelTemplate() {
        return this.onBannerPanelConfig()
            .pipe(hermesMap((config) => {
            if (typeof config.template === 'function') {
                return config.template();
            }
            return config.template;
        }));
    }
}
StructureBannerPanel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureBannerPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
StructureBannerPanel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureBannerPanel, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureBannerPanel, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RixPQUFPLEVBQXFCLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHakUsTUFBTSxPQUFnQixvQkFBcUIsU0FBUSxjQUFjO0lBSWhFLFlBQXNCLGlCQUFvQyxFQUNuRCxVQUFzQjtRQUM1QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQU1ELGVBQWU7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFTyx5QkFBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7YUFDM0IsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRTtZQUVoRCxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQzFDLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDOztrSEE3Qm9CLG9CQUFvQjtzR0FBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBRHpDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUJhbm5lclBhbmVsIGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGJhbm5lclBhbmVsJDogSGVybWVzT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRhYnN0cmFjdCBvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nO1xuXG5cdGluaXRPYnNlcnZhYmxlcygpOiB2b2lkIHtcblx0XHR0aGlzLmJhbm5lclBhbmVsJCA9IHRoaXMuc2VsZWN0QmFubmVyUGFuZWxUZW1wbGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RCYW5uZXJQYW5lbFRlbXBsYXRlKCk6IEhlcm1lc09ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMub25CYW5uZXJQYW5lbENvbmZpZygpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29uZmlnOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKCk7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb25maWcudGVtcGxhdGU7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=