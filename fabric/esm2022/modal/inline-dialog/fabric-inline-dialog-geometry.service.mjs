import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
import * as i0 from "@angular/core";
export class InlineDialogGeometryService {
    platformId;
    inlineDialogGeometry;
    inlineDialogState$ = new Subject();
    constructor(platformId) {
        this.platformId = platformId;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: InlineDialogGeometryService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: InlineDialogGeometryService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: InlineDialogGeometryService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSzFELE1BQU0sT0FBTywyQkFBMkI7SUFLRTtJQUhqQyxvQkFBb0IsQ0FBYztJQUN6QixrQkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztJQUV2RSxZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUN4RCxDQUFDO0lBRUQsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxjQUFjLENBQUMsZUFBMkI7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsaUJBQTZCLEVBQUUsU0FBMkIsRUFBRSxNQUFlO1FBRS9GLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0saUJBQWlCLEdBQ3RCLElBQUksaUJBQWlCLENBQ3BCLGlCQUFpQixFQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxDQUFDLENBQUM7WUFFVixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDO3VHQTdCVywyQkFBMkIsa0JBS25CLFdBQVc7MkdBTG5CLDJCQUEyQjs7MkZBQTNCLDJCQUEyQjtrQkFEdkMsVUFBVTs7MEJBTUcsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnkhOiBFbGVtZW50UmVmO1xuXHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1N0YXRlJCA9IG5ldyBTdWJqZWN0PElubGluZURpYWxvZ0NvcmRzPigpO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRvYnNlcnZlSW5saW5lRGlhbG9nQ29yZHMoKTogT2JzZXJ2YWJsZTxJbmxpbmVEaWFsb2dDb3Jkcz4ge1xuXHRcdHJldHVybiB0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGlubGluZURpYWxvZ1JlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnkgPSBpbmxpbmVEaWFsb2dSZWY7XG5cdH1cblxuXHRnZXRJbmxpbmVEaWFsb2dDb3JkcyhpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZiwgcGxhY2VtZW50PzogRmFicmljUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBpbmxpbmVEaWFsb2dDb3JkcyA9XG5cdFx0XHRcdG5ldyBJbmxpbmVEaWFsb2dDb3Jkcyhcblx0XHRcdFx0XHRpbnZva2VyRWxlbWVudFJlZixcblx0XHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5LFxuXHRcdFx0XHRcdHdpbmRvdyxcblx0XHRcdFx0XHRwbGFjZW1lbnQsXG5cdFx0XHRcdFx0b2Zmc2V0KTtcblxuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQubmV4dChpbmxpbmVEaWFsb2dDb3Jkcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=