import { Command } from './command';
import { AggregateRoot } from '../tactical/aggregate/aggregate-root';
import { CreateAggregateCommandHandlerImpl } from './create-aggregate/create-aggregate.command-handler-impl';
import { CommandHandlerImpl } from './handler/command-handler-impl';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate/create-aggregate.command';
import { CommandStream } from './command.stream';
import { HermesSubscription } from '../../../common/stream/subscription/hermes.subscription';
import { HermesSubscriber } from '../../../common/stream/observable/subscriber/hermes.subscriber';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import * as i0 from "@angular/core";
export declare class CommandBus<C = Command<AggregateId>> extends HermesObservable<C> {
    private readonly commandsStream;
    constructor(commandsStream: CommandStream);
    subscribe(next?: (value: C) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<C>): HermesSubscription;
    ofCommand<C2 extends C>(...commandTypes: Array<string>): any;
    ofCommandHandler<C2 extends C>(...handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>): any;
    ofCreateAggregateHandler<C2 extends C>(...handlers: Array<CreateAggregateCommandHandlerImpl<any, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
    ofNullHandler<C2 extends C>(handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandBus<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandBus<any>>;
}
//# sourceMappingURL=command.bus.d.ts.map