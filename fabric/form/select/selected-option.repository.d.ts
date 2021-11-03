import { Observable } from 'rxjs';
import { GuiSelectOption } from './select-option';
export declare class FabricSelectedOptionsRepository {
    private readonly selectedOption$;
    onSelectedOption(): Observable<GuiSelectOption>;
    next(option: GuiSelectOption): void;
}
