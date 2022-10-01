import { Block, Page, Image, Video, PropertyLongString, PropertyUrl, Media, PropertyContentReference, PropertyPageReference, PropertyBlock, PropertyStringList, PropertyBoolean, PropertyLinkCollection, PropertyContentArea, PropertyXhtmlString, PropertyContentReferenceList, PropertyDate, PropertyNumber, PropertyIntegerList, PropertyPageType, PropertyCategory, PersonListProperty } from "./baseTypes";

export type ButtonBlock = Block & {
  buttonText: PropertyLongString;
  buttonLink: PropertyUrl;
};
export type VideoFile = Video & {
  copyright: PropertyLongString;
  previewImage: PropertyContentReference;
};
export type VectorImageFile = Image ;
export type ImageFile = Image & {
  copyright: PropertyLongString;
};
export type GenericMedia = Media & {
  description: PropertyLongString;
};
export type StartPage = Page & {
  globalNewsPageLink: PropertyPageReference;
  contactsPageLink: PropertyPageReference;
  searchPageLink: PropertyPageReference;
  siteLogotype: PropertyBlock;
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  productPageLinks: PropertyLinkCollection;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  mainContentArea: PropertyContentArea;
  companyInformationPageLinks: PropertyLinkCollection;
  newsPageLinks: PropertyLinkCollection;
  disableIndexing: PropertyBoolean;
  customerZonePageLinks: PropertyLinkCollection;
};
export type StandardPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  mainBody: PropertyXhtmlString;
  mainContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type SearchPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  relatedContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type ProductPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  uniqueSellingPoints: PropertyStringList;
  mainBody: PropertyXhtmlString;
  mainContentArea: PropertyContentArea;
  relatedContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type LandingPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  mainContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type NewsPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  newsList: PropertyBlock;
  mainBody: PropertyXhtmlString;
  mainContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type ContactPage = Page & {
  image: PropertyContentReference;
  phone: PropertyLongString;
  email: PropertyLongString;
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  disableIndexing: PropertyBoolean;
};
export type ArticlePage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  mainBody: PropertyXhtmlString;
  mainContentArea: PropertyContentArea;
  disableIndexing: PropertyBoolean;
};
export type AllPropertiesTestPage = Page & {
  contentArea1: PropertyContentArea;
  contentAreaReadonly1: PropertyContentArea;
  contentReference1: PropertyContentReference;
  contentReferenceReadonly1: PropertyContentReference;
  contentReferenceList1: PropertyContentReferenceList;
  contentReferenceListReadonly1: PropertyContentReferenceList;
  linkItemCollection1: PropertyLinkCollection;
  linkItemCollectionReadonly1: PropertyLinkCollection;
  text1: PropertyLongString;
  textReadonly1: PropertyLongString;
  textArea1: PropertyLongString;
  textAreaReadonly1: PropertyLongString;
  previewableText1: PropertyLongString;
  previewableTextReadonly1: PropertyLongString;
  date1: PropertyDate;
  dateReadonly1: PropertyDate;
  integer1: PropertyNumber;
  integerReadonly1: PropertyNumber;
  integerRange1: PropertyNumber;
  bool1: PropertyBoolean;
  boolReadonly1: PropertyBoolean;
  integerList1: PropertyIntegerList;
  integerListReadonly1: PropertyIntegerList;
  image1: PropertyContentReference;
  imageReadonly1: PropertyContentReference;
  singleSelect1: PropertyLongString;
  singleSelectReadonly1: PropertyLongString;
  multiSelect1: PropertyLongString;
  multiSelectReadonly1: PropertyLongString;
  persons: PersonListProperty;
  personsReadonly: PersonListProperty;
  selectionEditor1: PropertyLongString;
  selectionEditor2: PropertyLongString;
  selectionEditorReadonly1: PropertyLongString;
};
export type TeaserBlock = Block & {
  heading: PropertyLongString;
  text: PropertyLongString;
  image: PropertyContentReference;
  link: PropertyPageReference;
};
export type SiteLogotypeBlock = Block & {
  url: PropertyUrl;
  title: PropertyLongString;
};
export type PageListBlock = Block & {
  heading: PropertyLongString;
  includePublishDate: PropertyBoolean;
  includeIntroduction: PropertyBoolean;
  count: PropertyNumber;
  sortOrder: PropertyNumber;
  root: PropertyPageReference;
  pageTypeFilter: PropertyPageType;
  categoryFilter: PropertyCategory;
  recursive: PropertyBoolean;
};
export type JumbotronBlock = Block & {
  image: PropertyContentReference;
  imageDescription: PropertyLongString;
  heading: PropertyLongString;
  subHeading: PropertyLongString;
  buttonText: PropertyLongString;
  buttonLink: PropertyUrl;
};
export type EditorialBlock = Block & {
  mainBody: PropertyXhtmlString;
};
export type ContactBlock = Block & {
  image: PropertyContentReference;
  heading: PropertyLongString;
  contactPageLink: PropertyPageReference;
  linkText: PropertyLongString;
  linkUrl: PropertyUrl;
};
export type ContainerPage = Page & {
  metaTitle: PropertyLongString;
  pageImage: PropertyContentReference;
  metaKeywords: PropertyStringList;
  teaserText: PropertyLongString;
  hideSiteHeader: PropertyBoolean;
  metaDescription: PropertyLongString;
  hideSiteFooter: PropertyBoolean;
  disableIndexing: PropertyBoolean;
};
