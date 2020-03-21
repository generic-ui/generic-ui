import { OnChanges, SimpleChanges } from '@angular/core';
export declare class BarViewComponent implements OnChanges {
    value: number;
    showPercentage: boolean;
    width: number;
    ngOnChanges(changes: SimpleChanges): void;
}
