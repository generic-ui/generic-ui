import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class StructureBannerPanel extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
    }
    ngOnInit() {
        this.hermesSubscribe(this.onBannerPanelConfig(), (config) => {
            this.bannerPanel = config.template;
            if (typeof this.bannerPanel === 'function') {
                this.bannerPanel = this.bannerPanel();
            }
        });
    }
}
StructureBannerPanel.ɵfac = function StructureBannerPanel_Factory(t) { return new (t || StructureBannerPanel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureBannerPanel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureBannerPanel, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureBannerPanel, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBcUIsU0FBUyxFQUFzQixNQUFNLGVBQWUsQ0FBQzs7QUFLakYsTUFBTSxPQUFnQixvQkFBcUIsU0FBUSxjQUFjO0lBSWhFLFlBQXNCLGlCQUFvQyxFQUNuRCxVQUFzQjtRQUM1QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFDMUIsQ0FBQyxNQUFrQyxFQUFFLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBRW5DLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEM7UUFDRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7O3dGQXRCb0Isb0JBQW9CO3VFQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUR6QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUJhbm5lclBhbmVsIGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGJhbm5lclBhbmVsOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMub25CYW5uZXJQYW5lbENvbmZpZygpLFxuXHRcdFx0KGNvbmZpZzogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmJhbm5lclBhbmVsID0gY29uZmlnLnRlbXBsYXRlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5iYW5uZXJQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuYmFubmVyUGFuZWwgPSB0aGlzLmJhbm5lclBhbmVsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25CYW5uZXJQYW5lbENvbmZpZygpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPlxuXG5cdGFic3RyYWN0IGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmdcblxuXHRhYnN0cmFjdCBnZXRQYW5lbFRpdGxlKCk6IHN0cmluZ1xufVxuIl19