export type Block = Record<string, string>;

export type Page = {
    contentLink: ContentReference;
    name: string;
    parentLink: ContentReference;
    contentType: string[];
    routeSegment: string;
    url: string;
    changed: string;
    created: string;
    startPublish: string;
    stopPublish?: string;
}
export type Category = {
    id: number;
    name: string;
    description: string;
}
export type Property<T> = {
    value?:T;
    propertyDataType: string;
}
export type Image = {
    id: string;
}
export type Video = {
    id: string;
}
export type Media = {
    id: string;
}
export type ContentReference = {
    id: number;
    workId: number;
    guidValue:string;
    url: string;
}
export type Link = {
    href: string;
    title?: string;
    target?: string;
    text?: string;
    contentLink?: ContentReference;
}
export type ContentArea = {
    displayOption: string;
    tag: string;
    contentLink: ContentReference;      
}[];

export type PropertyLongString = Property<string>;
export type PropertyUrl = Property<string>;
export type PropertyContentReference = Property<ContentReference>;
export type PropertyPageReference = Property<ContentReference>;
export type PropertyBlock = {
    name: string;
    propertyDataType: string;
};

export type PropertyBoolean = Property<boolean>;
export type PropertyStringList = Property<string[]>;
export type PropertyLinkCollection = Property<Link[]>;
export type PropertyContentArea = Property<ContentArea>;
export type PropertyXhtmlString = Property<string>;
export type PropertyDate = Property<string>;
export type PropertyPageType = string;
export type PropertyCategory = Property<Category[]>;
export type PropertyNumber = Property<number>;
export type PropertyIntegerList = Property<number[]>;
export type PropertyContentReferenceList = Property<ContentReference[]>;

export type Person = Record<string, string>;
export type PersonListProperty = Property<Person[]>;
