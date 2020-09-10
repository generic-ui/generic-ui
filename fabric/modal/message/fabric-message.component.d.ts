import { ChangeDetectorRef } from '@angular/core';
import { FabricMessageService } from './fabric-message.service';
export declare class FabricMessageComponent {
    private readonly messageService;
    private readonly changeDetectorRef;
    text: string;
    constructor(messageService: FabricMessageService, changeDetectorRef: ChangeDetectorRef);
    detectChanges(): void;
    close(): void;
}
