export interface Event {
    id?:	number;
    name?:	string;
    startDate?:	Date;
    endDate?:	Date;
    isActive?:	boolean;
}

export interface Period {
    id?: number;
    name?: string;
    startDate?:	Date;
    endDate?:	Date;
    simpleEventEntity?: {
        id?: number;
    }
}

export interface Tariff {
    id?: number;
    simplePeriodEntity: SimplePeriodEntity;
    simpleTicketEntity: SimpleTicketEntity;
    price: number;
}

export interface SimplePeriodEntity {
    id: number;
}

export interface SimpleTicketEntity {
    id: number;
    name?: string;
}

export interface Ticket{
    id?: number;
    name?: string;
    gender?: Gender;
    ticketType?: TicketType;
    isBalanced?: Boolean;
}

export enum Gender{
    MALE, FEMALE
}

export enum TicketType {
    SINGLE, COUPLE, PARTY
}
