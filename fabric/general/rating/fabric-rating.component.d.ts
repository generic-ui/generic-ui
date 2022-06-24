import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FabricRatingComponent implements OnChanges, OnInit {
    starsLength: number;
    rating: number;
    readonly onRatingChange: EventEmitter<any>;
    stars: Array<number>;
    previewRating: number;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    isRating(starNumber: number, rating: number): boolean;
    changeRating(star: number): void;
    changePreviewRating(star: number): void;
    createStarsArray(length: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricRatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricRatingComponent, "gui-rating", never, { "starsLength": "starsLength"; "rating": "rating"; }, { "onRatingChange": "onRatingChange"; }, never, never>;
}
