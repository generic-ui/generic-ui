import { ChangeDetectorRef } from '@angular/core';
import { FabricMessageService } from './fabric-message.service';
import * as i0 from "@angular/core";
export declare class FabricMessageComponent {
    private readonly messageService;
    private readonly changeDetectorRef;
    text: string;
    constructor(messageService: FabricMessageService, changeDetectorRef: ChangeDetectorRef);
    detectChanges(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricMessageComponent, "gui-message", never, {}, {}, never, never, false>;
}
