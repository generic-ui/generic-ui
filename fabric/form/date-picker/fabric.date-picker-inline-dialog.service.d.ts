import { ElementRef, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { FabricInlineDialogService } from '../../layout/inline-dialog/fabric-inline-dialog.service';
import { InlineDialogPlacement } from '../../layout/inline-dialog/placement';
export declare class FabricDatePickerInlineDialogService {
    private readonly fabricInlineDialogService;
    constructor(fabricInlineDialogService: FabricInlineDialogService);
    open(element: ElementRef, component: Type<any>, injector?: Injector, placement?: InlineDialogPlacement, offset?: number): void;
    close(): void;
    isOpened(): boolean;
    onOpened(): Observable<boolean>;
}
