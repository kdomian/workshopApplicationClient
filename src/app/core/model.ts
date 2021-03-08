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
    simplePeriodEntity?: {
        id?: number;
    }
    simpleTicketEntity?: {
        id?: number;
        name?: string;
    }
    price?: number;
}
