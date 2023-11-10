import { Injectable } from '@angular/core';
import { HermesReplaySubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class GuiEffects {
    destroy$ = new HermesReplaySubject(1);
    register(effect$, next, complete) {
        return effect$.pipe(hermesTakeUntil(this.destroy$))
            .subscribe((v) => next(v), (error) => console.log(error), complete ? () => complete() : () => { });
    }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnDestroy() {
        this.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiEffects, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiEffects });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiEffects, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmVmZmVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvZWZmZWN0L2d1aS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFvQixtQkFBbUIsRUFBc0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hILE1BQU0sT0FBTyxVQUFVO0lBRUwsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFFN0QsUUFBUSxDQUNQLE9BQThCLEVBQzlCLElBQXNCLEVBQ3RCLFFBQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDYixlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM5QjthQUNBLFNBQVMsQ0FDVCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNkLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUM3QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQ3RDLENBQUM7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO3dHQTFCVyxVQUFVOzRHQUFWLFVBQVU7OzRGQUFWLFVBQVU7a0JBRHRCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QsIEhlcm1lc1N1YnNjcmlwdGlvbiwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEd1aUVmZmVjdHMgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgSGVybWVzUmVwbGF5U3ViamVjdDx2b2lkPigxKTtcblxuXHRyZWdpc3Rlcihcblx0XHRlZmZlY3QkOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4sXG5cdFx0bmV4dDogKHY6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gZWZmZWN0JC5waXBlKFxuXHRcdFx0XHRcdFx0ICBoZXJtZXNUYWtlVW50aWwodGhpcy5kZXN0cm95JClcblx0XHRcdFx0XHQgIClcblx0XHRcdFx0XHQgIC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0XHQgICh2KSA9PiBuZXh0KHYpLFxuXHRcdFx0XHRcdFx0ICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcblx0XHRcdFx0XHRcdCAgY29tcGxldGUgPyAoKSA9PiBjb21wbGV0ZSgpIDogKCkgPT4ge31cblx0XHRcdFx0XHQgICk7XG5cdH1cblxuXHRkZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuZGVzdHJveSQubmV4dCgpO1xuXHRcdHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuZGVzdHJveSgpO1xuXHR9XG59XG4iXX0=