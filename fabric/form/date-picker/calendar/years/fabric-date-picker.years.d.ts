import * as i0 from "@angular/core";
export declare class FabricDatePickerYears {
    private rowsForDisplay;
    private minYear;
    private maxYear;
    private selectedYear;
    private readonly inc;
    getYears(selectedYear: number): Array<Array<number>>;
    prevYearRange(year: number): Array<Array<number>>;
    nextYearRange(year: number): Array<Array<number>>;
    private createYearsPool;
    private divideYearsPool;
    private createRowsForDisplay;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerYears, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDatePickerYears>;
}
