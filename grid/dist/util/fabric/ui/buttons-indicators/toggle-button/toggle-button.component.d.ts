import { ElementRef, EventEmitter, Renderer2, SimpleChanges } from '@angular/core';
import { Indicator } from 'util/fabric/ui/buttons-indicators/indicator';
import { ToggleButtonGroupService } from 'util/fabric/ui/buttons-indicators/toggle-button-group/toggle-button-group.service';
export declare class FabricToggleButtonComponent extends Indicator {
    private toggleButtonGroupService;
    checked: boolean;
    disabled: boolean;
    changed: EventEmitter<boolean>;
    private buttonChecked;
    private readonly buttonId;
    constructor(elementRef: ElementRef, renderer: Renderer2, toggleButtonGroupService: ToggleButtonGroupService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    tryToToggle(e: any): void;
    toggle(): void;
    private toggleButtonChecked;
    private setButtonChecked;
    private observeToggleButtonGroup;
    private generateButtonId;
    private toggleDisabledCssClass;
}
