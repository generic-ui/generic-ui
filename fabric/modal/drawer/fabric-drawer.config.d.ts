import { ElementRef, Injector, Type } from '@angular/core';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { Theme } from '../../themes/theme';
export interface FabricDrawerConfig {
    component: Type<FabricNestedDialogComponent>;
    preventReopeningDrawer?: boolean;
    appendToElement?: ElementRef;
    injector?: Injector;
    theme?: Theme;
    closeOnClickOutside?: boolean;
    width?: string;
    backdrop?: boolean;
}
