import { Observable } from 'rxjs';
import { Theme } from '../../themes/theme';
export declare class FabricDialogThemeService {
    private readonly theme$;
    onTheme(): Observable<Theme>;
    nextTheme(theme: string): void;
    private toTheme;
}
