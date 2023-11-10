import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { Directive } from '@angular/core';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructureBannerPanel extends SmartComponent {
    bannerPanel$;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureBannerPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureBannerPanel, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureBannerPanel, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RixPQUFPLEVBQXFCLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHakUsTUFBTSxPQUFnQixvQkFBcUIsU0FBUSxjQUFjO0lBRWhFLFlBQVksQ0FBMkI7SUFFdkMsWUFBc0IsaUJBQW9DLEVBQ25ELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBTUQsZUFBZTtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLHlCQUF5QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRTthQUMzQixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsTUFBa0MsRUFBRSxFQUFFO1lBRWhELElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDMUMsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekI7WUFFRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7d0dBN0JvQixvQkFBb0I7NEZBQXBCLG9CQUFvQjs7NEZBQXBCLG9CQUFvQjtrQkFEekMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlQmFubmVyUGFuZWwgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0YmFubmVyUGFuZWwkOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0XHRcdCAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdGFic3RyYWN0IG9uQmFubmVyUGFuZWxDb25maWcoKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmc7XG5cblx0aW5pdE9ic2VydmFibGVzKCk6IHZvaWQge1xuXHRcdHRoaXMuYmFubmVyUGFuZWwkID0gdGhpcy5zZWxlY3RCYW5uZXJQYW5lbFRlbXBsYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEJhbm5lclBhbmVsVGVtcGxhdGUoKTogSGVybWVzT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkJhbm5lclBhbmVsQ29uZmlnKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb25maWc6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGlmICh0eXBlb2YgY29uZmlnLnRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBjb25maWcudGVtcGxhdGUoKTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==