declare const _default: {
    guid: (prefix?: string) => string;
    typeOf: (o: any) => any;
    extend: (...args: any[]) => any;
    extendIf: () => any;
    extendImmutable: () => any;
    extendImmutableIf: () => any;
    clone: (value: any) => any;
    each: (obj: any, callback: any) => void;
    isEmptyObj: (obj: any) => boolean;
    inSeries: (queue: any, cb: any) => void;
    inParallel: (queue: any, cb: any) => void;
    inArray: (needle: any, array: any) => any;
    arrayDiff: (needles: any, array: any) => false | any[];
    arrayIntersect: (array1: any, array2: any) => any[];
    toArray: (obj: any) => any[];
    trim: (str: any) => any;
    sprintf: (str: any) => any;
    parseSizeStr: (size: any) => any;
    delay: (cb: any, timeout: any) => void;
    verComp: (v1: any, v2: any, operator: any) => number | boolean;
};
export default _default;
