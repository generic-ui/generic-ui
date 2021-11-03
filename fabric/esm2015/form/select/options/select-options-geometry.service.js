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
        if (isPlatformBrowser(this.platformId)) {
            const selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
            this.selectOptionsCords$.next(selectOptionsCords);
        }
    }
}
SelectOptionsGeometryService.ɵfac = function SelectOptionsGeometryService_Factory(t) { return new (t || SelectOptionsGeometryService)(i0.ɵɵinject(PLATFORM_ID)); };
SelectOptionsGeometryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectOptionsGeometryService, factory: SelectOptionsGeometryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOptionsGeometryService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3NlbGVjdC9vcHRpb25zL3NlbGVjdC1vcHRpb25zLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRzFELE1BQU0sT0FBTyw0QkFBNEI7SUFNeEMsWUFBa0QsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFGaEQsd0JBQW1CLEdBQUcsSUFBSSxhQUFhLENBQXFCLENBQUMsQ0FBQyxDQUFDO0lBR2hGLENBQUM7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxrQkFBOEI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQW1CO1FBRTVCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sa0JBQWtCLEdBQ3ZCLElBQUksa0JBQWtCLENBQ3JCLE9BQU8sRUFDUCxJQUFJLENBQUMsdUJBQXVCLEVBQzVCLE1BQU0sQ0FBQyxDQUFDO1lBRVYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0YsQ0FBQzs7d0dBNUJXLDRCQUE0QixjQU1wQixXQUFXO2tGQU5uQiw0QkFBNEIsV0FBNUIsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FEeEMsVUFBVTs7c0JBT0csTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0NvcmRzIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy5jb3Jkcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnkgfSBmcm9tICcuL3NlbGVjdC1nZW9tZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHNlbGVjdENvbnRhaW5lckdlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25zQ29yZHMkID0gbmV3IFJlcGxheVN1YmplY3Q8U2VsZWN0T3B0aW9uc0NvcmRzPigxKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b25TZWxlY3RPcHRpb25zQ29yZHMoKTogT2JzZXJ2YWJsZTxTZWxlY3RPcHRpb25zQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RPcHRpb25zQ29yZHMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0R2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RDb250YWluZXJHZW9tZXRyeSA9IG5ldyBTZWxlY3RPcHRpb25zR2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmKTtcblx0fVxuXG5cdG5leHRDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9uc0NvcmRzID1cblx0XHRcdFx0bmV3IFNlbGVjdE9wdGlvbnNDb3Jkcyhcblx0XHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0Q29udGFpbmVyR2VvbWV0cnksXG5cdFx0XHRcdFx0d2luZG93KTtcblxuXHRcdFx0dGhpcy5zZWxlY3RPcHRpb25zQ29yZHMkLm5leHQoc2VsZWN0T3B0aW9uc0NvcmRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==