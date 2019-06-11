import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
export declare class ToggleButtonGroupService implements OnDestroy {
    private readonly toggleButtonId$;
    ngOnDestroy(): void;
    observeToggledButton(): Observable<number>;
    toggleButton(id: number): void;
}
