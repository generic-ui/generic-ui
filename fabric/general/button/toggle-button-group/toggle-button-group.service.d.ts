import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToggleButtonGroupService implements OnDestroy {
    private readonly toggleButtonId$;
    ngOnDestroy(): void;
    observeToggledButton(): Observable<number>;
    toggleButton(id: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButtonGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToggleButtonGroupService>;
}
//# sourceMappingURL=toggle-button-group.service.d.ts.map