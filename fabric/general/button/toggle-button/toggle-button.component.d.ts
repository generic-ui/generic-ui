import { ElementRef, EventEmitter, Renderer2, SimpleChanges } from '@angular/core';
import { Indicator } from '../../indicator';
import { ToggleButtonGroupService } from '../toggle-button-group/toggle-button-group.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricToggleButtonComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricToggleButtonComponent, "gui-button-toggle", never, { "checked": "checked"; "disabled": "disabled"; }, { "changed": "changed"; }, never, ["*"]>;
}
//# sourceMappingURL=toggle-button.component.d.ts.map