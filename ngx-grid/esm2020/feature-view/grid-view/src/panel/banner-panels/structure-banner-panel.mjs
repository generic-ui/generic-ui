import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class StructureBannerPanel extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
    }
    ngOnInit() {
        this.subscribe(this.onBannerPanelConfig(), (config) => {
            this.bannerPanel = config.template;
            if (typeof this.bannerPanel === 'function') {
                this.bannerPanel = this.bannerPanel();
            }
        });
    }
}
StructureBannerPanel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureBannerPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
StructureBannerPanel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: StructureBannerPanel, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureBannerPanel, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQXFCLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7O0FBS2pGLE1BQU0sT0FBZ0Isb0JBQXFCLFNBQVEsY0FBYztJQUloRSxZQUFzQixpQkFBb0MsRUFDbkQsVUFBc0I7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFRRCxRQUFRO1FBRVAsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFDMUIsQ0FBQyxNQUFrQyxFQUFFLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBRW5DLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEM7UUFDRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7O2lIQTVCb0Isb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEekMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUJhbm5lclBhbmVsIGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGJhbm5lclBhbmVsOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25CYW5uZXJQYW5lbENvbmZpZygpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPjtcblxuXHRhYnN0cmFjdCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nO1xuXG5cdGFic3RyYWN0IGdldFBhbmVsVGl0bGUoKTogc3RyaW5nO1xuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLm9uQmFubmVyUGFuZWxDb25maWcoKSxcblx0XHRcdChjb25maWc6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5iYW5uZXJQYW5lbCA9IGNvbmZpZy50ZW1wbGF0ZTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuYmFubmVyUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmJhbm5lclBhbmVsID0gdGhpcy5iYW5uZXJQYW5lbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=