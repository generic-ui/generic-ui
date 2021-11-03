import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import * as i0 from "@angular/core";
export class InlineDialogGeometryService {
    constructor(platformId) {
        this.platformId = platformId;
        this.inlineDialogState$ = new Subject();
    }
    observeInlineDialogCords() {
        return this.inlineDialogState$.asObservable();
    }
    changeGeometry(inlineDialogRef) {
        this.inlineDialogGeometry = inlineDialogRef;
    }
    getInlineDialogCords(invokerElementRef, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            const inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    }
}
InlineDialogGeometryService.ɵfac = function InlineDialogGeometryService_Factory(t) { return new (t || InlineDialogGeometryService)(i0.ɵɵinject(PLATFORM_ID)); };
InlineDialogGeometryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InlineDialogGeometryService, factory: InlineDialogGeometryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InlineDialogGeometryService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUsxRCxNQUFNLE9BQU8sMkJBQTJCO0lBS3ZDLFlBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRnZDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO0lBR3ZFLENBQUM7SUFFRCx3QkFBd0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGNBQWMsQ0FBQyxlQUEyQjtRQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxpQkFBNkIsRUFBRSxTQUEyQixFQUFFLE1BQWU7UUFFL0YsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxpQkFBaUIsR0FDdEIsSUFBSSxpQkFBaUIsQ0FDcEIsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLENBQUMsQ0FBQztZQUVWLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7O3NHQTdCVywyQkFBMkIsY0FLbkIsV0FBVztpRkFMbkIsMkJBQTJCLFdBQTNCLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBRHZDLFVBQVU7O3NCQU1HLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElubGluZURpYWxvZ0NvcmRzIH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWNvcmRzJztcbmltcG9ydCB7IEZhYnJpY1BsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9jb3Jkcy9mYWJyaWMtcGxhY2VtZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5OiBFbGVtZW50UmVmO1xuXHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1N0YXRlJCA9IG5ldyBTdWJqZWN0PElubGluZURpYWxvZ0NvcmRzPigpO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRvYnNlcnZlSW5saW5lRGlhbG9nQ29yZHMoKTogT2JzZXJ2YWJsZTxJbmxpbmVEaWFsb2dDb3Jkcz4ge1xuXHRcdHJldHVybiB0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGlubGluZURpYWxvZ1JlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnkgPSBpbmxpbmVEaWFsb2dSZWY7XG5cdH1cblxuXHRnZXRJbmxpbmVEaWFsb2dDb3JkcyhpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZiwgcGxhY2VtZW50PzogRmFicmljUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBpbmxpbmVEaWFsb2dDb3JkcyA9XG5cdFx0XHRcdG5ldyBJbmxpbmVEaWFsb2dDb3Jkcyhcblx0XHRcdFx0XHRpbnZva2VyRWxlbWVudFJlZixcblx0XHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5LFxuXHRcdFx0XHRcdHdpbmRvdyxcblx0XHRcdFx0XHRwbGFjZW1lbnQsXG5cdFx0XHRcdFx0b2Zmc2V0KTtcblxuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQubmV4dChpbmxpbmVEaWFsb2dDb3Jkcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=