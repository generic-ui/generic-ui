import { Injectable } from '@angular/core';
import { HermesReplaySubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class GuiEffects {
    constructor() {
        this.destroy$ = new HermesReplaySubject(1);
    }
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
}
GuiEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiEffects, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GuiEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiEffects, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmVmZmVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvZWZmZWN0L2d1aS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFvQixtQkFBbUIsRUFBc0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hILE1BQU0sT0FBTyxVQUFVO0lBRHZCO1FBR2tCLGFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFPLENBQUMsQ0FBQyxDQUFDO0tBeUI3RDtJQXZCQSxRQUFRLENBQ1AsT0FBOEIsRUFDOUIsSUFBc0IsRUFDdEIsUUFBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNiLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzlCO2FBQ0EsU0FBUyxDQUNULENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2QsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQzdCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FDdEMsQ0FBQztJQUNSLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7O3dHQTFCVyxVQUFVOzRHQUFWLFVBQVU7NEZBQVYsVUFBVTtrQkFEdEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzUmVwbGF5U3ViamVjdCwgSGVybWVzU3Vic2NyaXB0aW9uLCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3VpRWZmZWN0cyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PHZvaWQ+KDEpO1xuXG5cdHJlZ2lzdGVyKFxuXHRcdGVmZmVjdCQ6IEhlcm1lc09ic2VydmFibGU8YW55Pixcblx0XHRuZXh0OiAodjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXHRcdHJldHVybiBlZmZlY3QkLnBpcGUoXG5cdFx0XHRcdFx0XHQgIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuXHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdCAgLnN1YnNjcmliZShcblx0XHRcdFx0XHRcdCAgKHYpID0+IG5leHQodiksXG5cdFx0XHRcdFx0XHQgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuXHRcdFx0XHRcdFx0ICBjb21wbGV0ZSA/ICgpID0+IGNvbXBsZXRlKCkgOiAoKSA9PiB7fVxuXHRcdFx0XHRcdCAgKTtcblx0fVxuXG5cdGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5kZXN0cm95JC5uZXh0KCk7XG5cdFx0dGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5kZXN0cm95KCk7XG5cdH1cbn1cbiJdfQ==