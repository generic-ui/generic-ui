import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../core/domain-read/view/view-templates.component";
import * as i2 from "../core/domain-read/edit/edit-templates.component";
import * as i3 from "../core/domain-read/edit/template/string-edit-template.component";
import * as i4 from "../core/domain-read/edit/template/number-edit-template.component";
import * as i5 from "../core/domain-read/edit/template/boolean-edit-template.component";
import * as i6 from "../core/domain-read/edit/template/date-edit-template.component";
import * as i7 from "./column/column-query.component";
import * as i8 from "../core/domain-read/view/function/function-view.component";
import * as i9 from "../core/domain-read/view/bar/bar-view.component";
import * as i10 from "../core/domain-read/view/percentage/percentage-view.component";
import * as i11 from "../core/domain-read/view/text/text-view.component";
import * as i12 from "@angular/common";
import * as i13 from "../core/api/composition.api-module";
import * as i14 from "@angular/forms";
import * as i15 from "../../common/cdk/sanitize/sanitize.module";
import * as i16 from "@generic-ui/fabric";
export declare class CompositionFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CompositionFeatureModule, [typeof i1.ViewTemplatesComponent, typeof i2.EditTemplatesComponent, typeof i3.StringEditTemplateComponent, typeof i4.NumberEditTemplateComponent, typeof i5.BooleanEditTemplateComponent, typeof i6.DateEditTemplateComponent, typeof i7.ColumnQueryComponent, typeof i8.FunctionViewComponent, typeof i9.BarViewComponent, typeof i10.PercentageViewComponent, typeof i11.TextViewComponent], [typeof i12.CommonModule, typeof i13.CompositionApiModule, typeof i14.ReactiveFormsModule, typeof i15.SanitizeModule, typeof i16.FabricChipModule, typeof i16.FabricCheckboxModule, typeof i16.FabricButtonModule, typeof i16.FabricInputModule, typeof i16.FabricDatePickerModule], [typeof i1.ViewTemplatesComponent, typeof i2.EditTemplatesComponent, typeof i7.ColumnQueryComponent, typeof i16.FabricChipModule, typeof i16.FabricCheckboxModule, typeof i16.FabricButtonModule, typeof i16.FabricInputModule, typeof i8.FunctionViewComponent, typeof i9.BarViewComponent, typeof i10.PercentageViewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CompositionFeatureModule>;
}
//# sourceMappingURL=composition.feature-module.d.ts.map