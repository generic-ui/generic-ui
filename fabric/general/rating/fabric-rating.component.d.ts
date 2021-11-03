import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class FabricRatingComponent implements OnChanges, OnInit {
    starsLength: number;
    rating: number;
    onRatingChange: EventEmitter<any>;
    stars: Array<number>;
    previewRating: number;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    isRating(starNumber: number, rating: number): boolean;
    changeRating(star: number): void;
    changePreviewRating(star: number): void;
    createStarsArray(length: number): void;
}
