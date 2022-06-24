import { ElementRef, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { FabricInlineDialogService } from '../../modal/inline-dialog/fabric-inline-dialog.service';
import { Theme } from '../../themes/theme';
import * as i0 from "@angular/core";
export declare class FabricDatePickerInlineDialogService {
    private readonly fabricInlineDialogService;
    constructor(fabricInlineDialogService: FabricInlineDialogService);
    open(element: ElementRef, component: Type<any>, datePickerThem?: Theme): void;
    close(): void;
    isOpened(): boolean;
    onOpened(): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerInlineDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDatePickerInlineDialogService>;
}
