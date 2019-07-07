function checkLength(min: number, max: number): Validators {
    return new class implements Validators {
        validate(value: string): string[] {
            return ((value.length >= min) && (value.length <= max)) ? [] : [`Invalid length for '${value}'.`];
        }
    }
};

const required: Validators = new class implements Validators {
    validate(value: string): string[] {
        return (value !== "") ? [] : ["Required field is missed."];
    }
};

const dateValidator: Validators = new class implements Validators {
    validate(value: string): string[] {
        const probe: Date = new Date(value);
        const now: Date = new Date();
        const reg: RegExp = /^(\d{2})([.])(\d{2})\2(\d{4})$/;
        return (reg.test(value) !== false && probe !<= now) ? [] : [`Invalid format for '${value}'.`];
    }
};

const phoneValidator: Validators = new class implements Validators {
    validate(value: string): string[] {
        const reg: RegExp = /^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/;
        return (reg.test(value) !== false) ? [] : [`Invalid length for '${value}'.`];
    }
};

const mailValidator: Validators = new class implements Validators {
    validate(value: string): string[] {
        const reg: RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return (reg.test(value) !== false) ? [] : [`Invalid format for '${value}'.`];
    }
};

const nameValidator: Validators = new class implements Validators {
    validate(value: string): string[] {
        const reg: RegExp = /^[а-яА-ЯёЁa-zA-Z]{2,20}$/;
        return (reg.test(value) !== false) ? [] : [`Invalid format for '${value}'.`];
    }
};

export interface CsvType {
    parseString(str: string): this;
}

export interface Validators {
    /** if return empty array then object valid */
    validate(value: string) : string[];

}

export interface ColumnDescriptor {
    name: string,
    type: CsvType | string,
    validators: Validators[]
}

export const csv: ColumnDescriptor[] = [
    {
        name: "ID",
        type: "ID",
        validators: [
            checkLength(1,4),
            required
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            checkLength(1,18),
            nameValidator
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            checkLength(1,18),
            nameValidator
        ]
    },
    {
        name: "Mail",
        type: "Mail",
        validators: [
            checkLength(6,18),
            mailValidator
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [
            dateValidator
        ]
    },
    {
        name: "Phone",
        type: "Phone",
        validators: [
            phoneValidator
        ]
    }
];