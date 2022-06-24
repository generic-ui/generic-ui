import { OnDestroy } from '@angular/core';
import { Command } from '../../../api/command/command';
import { CommandLogger } from '../../../domain/command/command.logger';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import * as i0 from "@angular/core";
export declare class ConsoleCommandLogger extends CommandLogger implements OnDestroy {
    private enabled;
    private readonly unsubscribe$;
    private readonly commandBus;
    constructor();
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    protected print(command: Command<AggregateId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsoleCommandLogger, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConsoleCommandLogger>;
}
