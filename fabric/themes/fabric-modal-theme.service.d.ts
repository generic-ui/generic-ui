import { Theme } from './theme';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FabricModalThemeService {
    private readonly fabricTheme$;
    onTheme(): Observable<Theme>;
    changeTheme(theme: string | Theme): void;
    convertToTheme(theme: string): Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricModalThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricModalThemeService>;
}
