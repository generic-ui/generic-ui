import { Injector, Type } from '@angular/core';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { Theme } from '../../themes/theme';
export interface FabricDialogConfig {
    component: Type<FabricNestedDialogComponent>;
    injector?: Injector;
    theme?: Theme;
    width?: string;
    height?: string;
}
