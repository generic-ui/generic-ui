import { Theme } from './theme';
import { Observable } from 'rxjs/';
export declare class FabricModalThemeService {
    private readonly fabricTheme$;
    onTheme(): Observable<Theme>;
    changeTheme(theme: string | Theme): void;
    convertToTheme(theme: string): Theme;
}
