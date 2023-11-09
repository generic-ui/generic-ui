import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SelectOptionsCords } from './select-options.cords';
import { ReplaySubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometry } from './select-geometry';
import * as i0 from "@angular/core";
export class SelectOptionsGeometryService {
    constructor(platformId) {
        this.platformId = platformId;
        this.selectOptionsCords$ = new ReplaySubject(1);
    }
    onSelectOptionsCords() {
        return this.selectOptionsCords$.asObservable();
    }
    setGeometry(selectContainerRef) {
        this.selectContainerGeometry = new SelectOptionsGeometry(selectContainerRef);
    }
    nextCords(element) {
        if (isPlatformBrowser(this.platformId) && this.selectContainerGeometry) {
            const selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
            this.selectOptionsCords$.next(selectOptionsCords);
        }
    }
}
SelectOptionsGeometryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectOptionsGeometryService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
SelectOptionsGeometryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectOptionsGeometryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectOptionsGeometryService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3NlbGVjdC9vcHRpb25zL3NlbGVjdC1vcHRpb25zLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRzFELE1BQU0sT0FBTyw0QkFBNEI7SUFNeEMsWUFBa0QsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFGaEQsd0JBQW1CLEdBQUcsSUFBSSxhQUFhLENBQXFCLENBQUMsQ0FBQyxDQUFDO0lBR2hGLENBQUM7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxrQkFBOEI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQW1CO1FBRTVCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLGtCQUFrQixHQUN2QixJQUFJLGtCQUFrQixDQUNyQixPQUFPLEVBQ1AsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixNQUFNLENBQUMsQ0FBQztZQUVWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNsRDtJQUNGLENBQUM7OzBIQTVCVyw0QkFBNEIsa0JBTXBCLFdBQVc7OEhBTm5CLDRCQUE0Qjs0RkFBNUIsNEJBQTRCO2tCQUR4QyxVQUFVOzswQkFPRyxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zQ29yZHMgfSBmcm9tICcuL3NlbGVjdC1vcHRpb25zLmNvcmRzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSB9IGZyb20gJy4vc2VsZWN0LWdlb21ldHJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc2VsZWN0Q29udGFpbmVyR2VvbWV0cnk/OiBTZWxlY3RPcHRpb25zR2VvbWV0cnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25zQ29yZHMkID0gbmV3IFJlcGxheVN1YmplY3Q8U2VsZWN0T3B0aW9uc0NvcmRzPigxKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b25TZWxlY3RPcHRpb25zQ29yZHMoKTogT2JzZXJ2YWJsZTxTZWxlY3RPcHRpb25zQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RPcHRpb25zQ29yZHMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0R2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RDb250YWluZXJHZW9tZXRyeSA9IG5ldyBTZWxlY3RPcHRpb25zR2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmKTtcblx0fVxuXG5cdG5leHRDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLnNlbGVjdENvbnRhaW5lckdlb21ldHJ5KSB7XG5cdFx0XHRjb25zdCBzZWxlY3RPcHRpb25zQ29yZHMgPVxuXHRcdFx0XHRuZXcgU2VsZWN0T3B0aW9uc0NvcmRzKFxuXHRcdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RDb250YWluZXJHZW9tZXRyeSxcblx0XHRcdFx0XHR3aW5kb3cpO1xuXG5cdFx0XHR0aGlzLnNlbGVjdE9wdGlvbnNDb3JkcyQubmV4dChzZWxlY3RPcHRpb25zQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19