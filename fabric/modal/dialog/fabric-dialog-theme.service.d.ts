import { Observable } from 'rxjs';
import { Theme } from '../../themes/theme';
import * as i0 from "@angular/core";
export declare class FabricDialogThemeService {
    private readonly theme$;
    onTheme(): Observable<Theme>;
    nextTheme(theme: string): void;
    private toTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDialogThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDialogThemeService>;
}
