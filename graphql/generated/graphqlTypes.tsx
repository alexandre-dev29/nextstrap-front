import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Banner = {
  __typename?: "Banner";
  bannerImage: UploadFileEntityResponse;
  bannerPrice?: Maybe<Scalars["Float"]>;
  buttonText: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  discount?: Maybe<Scalars["String"]>;
  largeText1?: Maybe<Scalars["String"]>;
  largeText2?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<BannerRelationResponseCollection>;
  midText?: Maybe<Scalars["String"]>;
  productName: Scalars["String"];
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  saleTime?: Maybe<Scalars["String"]>;
  smallText: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type BannerLocalizationsArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type BannerProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type BannerEntity = {
  __typename?: "BannerEntity";
  attributes?: Maybe<Banner>;
  id?: Maybe<Scalars["ID"]>;
};

export type BannerEntityResponse = {
  __typename?: "BannerEntityResponse";
  data?: Maybe<BannerEntity>;
};

export type BannerEntityResponseCollection = {
  __typename?: "BannerEntityResponseCollection";
  data: Array<BannerEntity>;
  meta: ResponseCollectionMeta;
};

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  bannerPrice?: InputMaybe<FloatFilterInput>;
  buttonText?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  discount?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  largeText1?: InputMaybe<StringFilterInput>;
  largeText2?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BannerFiltersInput>;
  midText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  productName?: InputMaybe<StringFilterInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  saleTime?: InputMaybe<StringFilterInput>;
  smallText?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BannerInput = {
  bannerImage?: InputMaybe<Scalars["ID"]>;
  bannerPrice?: InputMaybe<Scalars["Float"]>;
  buttonText?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  discount?: InputMaybe<Scalars["String"]>;
  largeText1?: InputMaybe<Scalars["String"]>;
  largeText2?: InputMaybe<Scalars["String"]>;
  midText?: InputMaybe<Scalars["String"]>;
  productName?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  saleTime?: InputMaybe<Scalars["String"]>;
  smallText?: InputMaybe<Scalars["String"]>;
};

export type BannerRelationResponseCollection = {
  __typename?: "BannerRelationResponseCollection";
  data: Array<BannerEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type Category = {
  __typename?: "Category";
  category?: Maybe<Scalars["String"]>;
  categoryImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CategoryEntity = {
  __typename?: "CategoryEntity";
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars["ID"]>;
};

export type CategoryEntityResponse = {
  __typename?: "CategoryEntityResponse";
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: "CategoryEntityResponseCollection";
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  category?: InputMaybe<Scalars["String"]>;
  categoryImage?: InputMaybe<Scalars["ID"]>;
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
};

export type Favorite = {
  __typename?: "Favorite";
  createdAt?: Maybe<Scalars["DateTime"]>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type FavoriteProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FavoriteEntity = {
  __typename?: "FavoriteEntity";
  attributes?: Maybe<Favorite>;
  id?: Maybe<Scalars["ID"]>;
};

export type FavoriteEntityResponse = {
  __typename?: "FavoriteEntityResponse";
  data?: Maybe<FavoriteEntity>;
};

export type FavoriteEntityResponseCollection = {
  __typename?: "FavoriteEntityResponseCollection";
  data: Array<FavoriteEntity>;
  meta: ResponseCollectionMeta;
};

export type FavoriteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FavoriteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FavoriteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FavoriteFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type FavoriteInput = {
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<Scalars["ID"]>;
};

export type FavoriteRelationResponseCollection = {
  __typename?: "FavoriteRelationResponseCollection";
  data: Array<FavoriteEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
};

export type GenericMorph =
  | Banner
  | Category
  | Favorite
  | I18NLocale
  | Product
  | Review
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBanner?: Maybe<BannerEntityResponse>;
  createBannerLocalization?: Maybe<BannerEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createFavorite?: Maybe<FavoriteEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createReview?: Maybe<ReviewEntityResponse>;
  createReviewLocalization?: Maybe<ReviewEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBanner?: Maybe<BannerEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFavorite?: Maybe<FavoriteEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteReview?: Maybe<ReviewEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBanner?: Maybe<BannerEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFavorite?: Maybe<FavoriteEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateReview?: Maybe<ReviewEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationCreateBannerArgs = {
  data: BannerInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateBannerLocalizationArgs = {
  data?: InputMaybe<BannerInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationCreateFavoriteArgs = {
  data: FavoriteInput;
};

export type MutationCreateProductArgs = {
  data: ProductInput;
};

export type MutationCreateReviewArgs = {
  data: ReviewInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateReviewLocalizationArgs = {
  data?: InputMaybe<ReviewInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBannerArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFavoriteArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteReviewArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateBannerArgs = {
  data: BannerInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars["ID"];
};

export type MutationUpdateFavoriteArgs = {
  data: FavoriteInput;
  id: Scalars["ID"];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars["ID"];
};

export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export type Product = {
  __typename?: "Product";
  banner?: Maybe<BannerEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  favorites?: Maybe<FavoriteRelationResponseCollection>;
  productImages: UploadFileRelationResponseCollection;
  productName: Scalars["String"];
  productPrice: Scalars["Float"];
  productSlug: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  quantity: Scalars["Int"];
  reviews?: Maybe<ReviewRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProductFavoritesArgs = {
  filters?: InputMaybe<FavoriteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductEntity = {
  __typename?: "ProductEntity";
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars["ID"]>;
};

export type ProductEntityResponse = {
  __typename?: "ProductEntityResponse";
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: "ProductEntityResponseCollection";
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  banner?: InputMaybe<BannerFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  favorites?: InputMaybe<FavoriteFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  productName?: InputMaybe<StringFilterInput>;
  productPrice?: InputMaybe<FloatFilterInput>;
  productSlug?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  banner?: InputMaybe<Scalars["ID"]>;
  category?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  favorites?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  productName?: InputMaybe<Scalars["String"]>;
  productPrice?: InputMaybe<Scalars["Float"]>;
  productSlug?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: "ProductRelationResponseCollection";
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  banner?: Maybe<BannerEntityResponse>;
  banners?: Maybe<BannerEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  favorite?: Maybe<FavoriteEntityResponse>;
  favorites?: Maybe<FavoriteEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  review?: Maybe<ReviewEntityResponse>;
  reviews?: Maybe<ReviewEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryBannerArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFavoriteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFavoritesArgs = {
  filters?: InputMaybe<FavoriteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type Review = {
  __typename?: "Review";
  createdAt?: Maybe<Scalars["DateTime"]>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<ReviewRelationResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  rating: Scalars["Float"];
  reviewText?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ReviewLocalizationsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ReviewEntity = {
  __typename?: "ReviewEntity";
  attributes?: Maybe<Review>;
  id?: Maybe<Scalars["ID"]>;
};

export type ReviewEntityResponse = {
  __typename?: "ReviewEntityResponse";
  data?: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  __typename?: "ReviewEntityResponseCollection";
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewFiltersInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  reviewText?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ReviewInput = {
  product?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  rating?: InputMaybe<Scalars["Float"]>;
  reviewText?: InputMaybe<Scalars["String"]>;
  users_permissions_user?: InputMaybe<Scalars["ID"]>;
};

export type ReviewRelationResponseCollection = {
  __typename?: "ReviewRelationResponseCollection";
  data: Array<ReviewEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  reviews?: Maybe<ReviewRelationResponseCollection>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type UsersPermissionsUserReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: string | null;
    user: {
      __typename?: "UsersPermissionsMe";
      id: string;
      confirmed?: boolean | null;
      email?: string | null;
      username: string;
      role?: {
        __typename?: "UsersPermissionsMeRole";
        id: string;
        name: string;
        description?: string | null;
      } | null;
    };
  };
};

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: string | null;
    user: {
      __typename?: "UsersPermissionsMe";
      id: string;
      username: string;
      email?: string | null;
      confirmed?: boolean | null;
      blocked?: boolean | null;
      role?: {
        __typename?: "UsersPermissionsMeRole";
        id: string;
        name: string;
        description?: string | null;
      } | null;
    };
  };
};

export type BannersQueryVariables = Exact<{
  filters?: InputMaybe<BannerFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type BannersQuery = {
  __typename?: "Query";
  banners?: {
    __typename?: "BannerEntityResponseCollection";
    data: Array<{
      __typename?: "BannerEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Banner";
        productName: string;
        description: string;
        smallText: string;
        bannerPrice?: number | null;
        midText?: string | null;
        largeText1?: string | null;
        largeText2?: string | null;
        buttonText: string;
        discount?: string | null;
        saleTime?: string | null;
        locale?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        products?: {
          __typename?: "ProductRelationResponseCollection";
          data: Array<{
            __typename?: "ProductEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Product";
              productName: string;
              productSlug: string;
              productPrice: number;
              description: string;
              quantity: number;
            } | null;
          }>;
        } | null;
        bannerImage: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              previewUrl?: string | null;
              url: string;
              createdAt?: any | null;
              updatedAt?: any | null;
              mime: string;
            } | null;
          } | null;
        };
      } | null;
    }>;
  } | null;
};

export type BannerQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
}>;

export type BannerQuery = {
  __typename?: "Query";
  banner?: {
    __typename?: "BannerEntityResponse";
    data?: {
      __typename?: "BannerEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Banner";
        productName: string;
        description: string;
        smallText: string;
        bannerPrice?: number | null;
        midText?: string | null;
        largeText1?: string | null;
        largeText2?: string | null;
        buttonText: string;
        discount?: string | null;
        saleTime?: string | null;
        locale?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        bannerImage: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              previewUrl?: string | null;
              url: string;
              createdAt?: any | null;
              updatedAt?: any | null;
              mime: string;
            } | null;
          } | null;
        };
      } | null;
    } | null;
  } | null;
};

export type CategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type CategoriesQuery = {
  __typename?: "Query";
  categories?: {
    __typename?: "CategoryEntityResponseCollection";
    data: Array<{
      __typename?: "CategoryEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Category";
        category?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
      } | null;
    }>;
  } | null;
};

export type CategoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
}>;

export type CategoryQuery = {
  __typename?: "Query";
  category?: {
    __typename?: "CategoryEntityResponse";
    data?: {
      __typename?: "CategoryEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Category";
        category?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
      } | null;
    } | null;
  } | null;
};

export type CreateFavoriteMutationVariables = Exact<{
  data: FavoriteInput;
}>;

export type CreateFavoriteMutation = {
  __typename?: "Mutation";
  createFavorite?: {
    __typename?: "FavoriteEntityResponse";
    data?: {
      __typename?: "FavoriteEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Favorite";
        createdAt?: any | null;
        user?: {
          __typename?: "UsersPermissionsUserEntityResponse";
          data?: {
            __typename?: "UsersPermissionsUserEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UsersPermissionsUser";
              username: string;
              email: string;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type FavoritesQueryVariables = Exact<{
  filters?: InputMaybe<FavoriteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type FavoritesQuery = {
  __typename?: "Query";
  favorites?: {
    __typename?: "FavoriteEntityResponseCollection";
    data: Array<{
      __typename?: "FavoriteEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Favorite";
        products?: {
          __typename?: "ProductRelationResponseCollection";
          data: Array<{
            __typename?: "ProductEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Product";
              productName: string;
              description: string;
              productPrice: number;
              productSlug: string;
              publishedAt?: any | null;
              quantity: number;
              category?: {
                __typename?: "CategoryEntityResponse";
                data?: {
                  __typename?: "CategoryEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "Category";
                    category?: string | null;
                  } | null;
                } | null;
              } | null;
              productImages: {
                __typename?: "UploadFileRelationResponseCollection";
                data: Array<{
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    url: string;
                    previewUrl?: string | null;
                    mime: string;
                    name: string;
                  } | null;
                }>;
              };
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type ProductsQueryVariables = Exact<{
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type ProductsQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "ProductEntityResponseCollection";
    data: Array<{
      __typename?: "ProductEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Product";
        productName: string;
        description: string;
        productPrice: number;
        productSlug: string;
        publishedAt?: any | null;
        quantity: number;
        updatedAt?: any | null;
        createdAt?: any | null;
        category?: {
          __typename?: "CategoryEntityResponse";
          data?: {
            __typename?: "CategoryEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Category";
              category?: string | null;
            } | null;
          } | null;
        } | null;
        productImages: {
          __typename?: "UploadFileRelationResponseCollection";
          data: Array<{
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              url: string;
              previewUrl?: string | null;
              mime: string;
              name: string;
            } | null;
          }>;
        };
        reviews?: {
          __typename?: "ReviewRelationResponseCollection";
          data: Array<{
            __typename?: "ReviewEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Review";
              reviewText?: string | null;
              rating: number;
              createdAt?: any | null;
              updatedAt?: any | null;
              users_permissions_user?: {
                __typename?: "UsersPermissionsUserEntityResponse";
                data?: {
                  __typename?: "UsersPermissionsUserEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UsersPermissionsUser";
                    username: string;
                    email: string;
                  } | null;
                } | null;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type ProductQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
}>;

export type ProductQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "ProductEntityResponse";
    data?: {
      __typename?: "ProductEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Product";
        productName: string;
        description: string;
        productPrice: number;
        productSlug: string;
        publishedAt?: any | null;
        quantity: number;
        updatedAt?: any | null;
        createdAt?: any | null;
        category?: {
          __typename?: "CategoryEntityResponse";
          data?: {
            __typename?: "CategoryEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Category";
              category?: string | null;
            } | null;
          } | null;
        } | null;
        productImages: {
          __typename?: "UploadFileRelationResponseCollection";
          data: Array<{
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              url: string;
              previewUrl?: string | null;
              mime: string;
              name: string;
            } | null;
          }>;
        };
        reviews?: {
          __typename?: "ReviewRelationResponseCollection";
          data: Array<{
            __typename?: "ReviewEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Review";
              reviewText?: string | null;
              rating: number;
              createdAt?: any | null;
              updatedAt?: any | null;
              users_permissions_user?: {
                __typename?: "UsersPermissionsUserEntityResponse";
                data?: {
                  __typename?: "UsersPermissionsUserEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UsersPermissionsUser";
                    username: string;
                    email: string;
                  } | null;
                } | null;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const LoginDocument = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      user {
        id
        confirmed
        email
        username
        role {
          id
          name
          description
        }
      }
      jwt
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
        }
      }
      jwt
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const BannersDocument = gql`
  query banners(
    $filters: BannerFiltersInput
    $locale: I18NLocaleCode
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    banners(
      pagination: $pagination
      filters: $filters
      locale: $locale
      publicationState: $publicationState
      sort: $sort
    ) {
      data {
        id
        attributes {
          productName
          description
          smallText
          bannerPrice
          midText
          largeText1
          largeText2
          buttonText
          discount
          saleTime
          products {
            data {
              id
              attributes {
                productName
                productSlug
                productPrice
                description
                quantity
              }
            }
          }
          bannerImage {
            data {
              id
              attributes {
                name
                previewUrl
                url
                createdAt
                updatedAt
                mime
              }
            }
          }
          locale
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useBannersQuery__
 *
 * To run a query within a React component, call `useBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBannersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<BannersQuery, BannersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BannersQuery, BannersQueryVariables>(
    BannersDocument,
    options
  );
}
export function useBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BannersQuery, BannersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BannersQuery, BannersQueryVariables>(
    BannersDocument,
    options
  );
}
export type BannersQueryHookResult = ReturnType<typeof useBannersQuery>;
export type BannersLazyQueryHookResult = ReturnType<typeof useBannersLazyQuery>;
export type BannersQueryResult = Apollo.QueryResult<
  BannersQuery,
  BannersQueryVariables
>;
export const BannerDocument = gql`
  query banner($id: ID, $locale: I18NLocaleCode) {
    banner(id: $id, locale: $locale) {
      data {
        id
        attributes {
          productName
          description
          smallText
          bannerPrice
          midText
          largeText1
          largeText2
          buttonText
          discount
          saleTime
          bannerImage {
            data {
              id
              attributes {
                name
                previewUrl
                url
                createdAt
                updatedAt
                mime
              }
            }
          }
          locale
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useBannerQuery__
 *
 * To run a query within a React component, call `useBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBannerQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useBannerQuery(
  baseOptions?: Apollo.QueryHookOptions<BannerQuery, BannerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BannerQuery, BannerQueryVariables>(
    BannerDocument,
    options
  );
}
export function useBannerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BannerQuery, BannerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BannerQuery, BannerQueryVariables>(
    BannerDocument,
    options
  );
}
export type BannerQueryHookResult = ReturnType<typeof useBannerQuery>;
export type BannerLazyQueryHookResult = ReturnType<typeof useBannerLazyQuery>;
export type BannerQueryResult = Apollo.QueryResult<
  BannerQuery,
  BannerQueryVariables
>;
export const CategoriesDocument = gql`
  query categories(
    $filters: CategoryFiltersInput
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    categories(
      sort: $sort
      publicationState: $publicationState
      filters: $filters
      pagination: $pagination
    ) {
      data {
        id
        attributes {
          category
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>;
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const CategoryDocument = gql`
  query category($id: ID) {
    category(id: $id) {
      data {
        id
        attributes {
          category
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options
  );
}
export function useCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryQuery,
    CategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options
  );
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<
  typeof useCategoryLazyQuery
>;
export type CategoryQueryResult = Apollo.QueryResult<
  CategoryQuery,
  CategoryQueryVariables
>;
export const CreateFavoriteDocument = gql`
  mutation createFavorite($data: FavoriteInput!) {
    createFavorite(data: $data) {
      data {
        id
        attributes {
          createdAt
          createdAt
          user {
            data {
              id
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
`;
export type CreateFavoriteMutationFn = Apollo.MutationFunction<
  CreateFavoriteMutation,
  CreateFavoriteMutationVariables
>;

/**
 * __useCreateFavoriteMutation__
 *
 * To run a mutation, you first call `useCreateFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFavoriteMutation, { data, loading, error }] = useCreateFavoriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFavoriteMutation,
    CreateFavoriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateFavoriteMutation,
    CreateFavoriteMutationVariables
  >(CreateFavoriteDocument, options);
}
export type CreateFavoriteMutationHookResult = ReturnType<
  typeof useCreateFavoriteMutation
>;
export type CreateFavoriteMutationResult =
  Apollo.MutationResult<CreateFavoriteMutation>;
export type CreateFavoriteMutationOptions = Apollo.BaseMutationOptions<
  CreateFavoriteMutation,
  CreateFavoriteMutationVariables
>;
export const FavoritesDocument = gql`
  query favorites(
    $filters: FavoriteFiltersInput
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    favorites(
      filters: $filters
      pagination: $pagination
      publicationState: $publicationState
      sort: $sort
    ) {
      data {
        id
        attributes {
          products {
            data {
              id
              attributes {
                productName
                description
                productPrice
                productSlug
                publishedAt
                quantity
                category {
                  data {
                    id
                    attributes {
                      category
                    }
                  }
                }
                productImages {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      mime
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useFavoritesQuery__
 *
 * To run a query within a React component, call `useFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoritesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFavoritesQuery(
  baseOptions?: Apollo.QueryHookOptions<FavoritesQuery, FavoritesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FavoritesQuery, FavoritesQueryVariables>(
    FavoritesDocument,
    options
  );
}
export function useFavoritesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FavoritesQuery,
    FavoritesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FavoritesQuery, FavoritesQueryVariables>(
    FavoritesDocument,
    options
  );
}
export type FavoritesQueryHookResult = ReturnType<typeof useFavoritesQuery>;
export type FavoritesLazyQueryHookResult = ReturnType<
  typeof useFavoritesLazyQuery
>;
export type FavoritesQueryResult = Apollo.QueryResult<
  FavoritesQuery,
  FavoritesQueryVariables
>;
export const ProductsDocument = gql`
  query products(
    $filters: ProductFiltersInput
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    products(
      filters: $filters
      pagination: $pagination
      publicationState: $publicationState
      sort: $sort
    ) {
      data {
        id
        attributes {
          productName
          description
          productPrice
          productSlug
          publishedAt
          quantity
          category {
            data {
              id
              attributes {
                category
              }
            }
          }
          productImages {
            data {
              id
              attributes {
                url
                previewUrl
                mime
                name
              }
            }
          }
          reviews {
            data {
              id
              attributes {
                reviewText
                rating
                createdAt
                updatedAt
                users_permissions_user {
                  data {
                    id
                    attributes {
                      username
                      email
                    }
                  }
                }
              }
            }
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
export const ProductDocument = gql`
  query product($id: ID) {
    product(id: $id) {
      data {
        id
        attributes {
          productName
          description
          productPrice
          productSlug
          publishedAt
          quantity
          category {
            data {
              id
              attributes {
                category
              }
            }
          }
          productImages {
            data {
              id
              attributes {
                url
                previewUrl
                mime
                name
              }
            }
          }
          reviews {
            data {
              id
              attributes {
                reviewText
                rating
                createdAt
                updatedAt
                users_permissions_user {
                  data {
                    id
                    attributes {
                      username
                      email
                    }
                  }
                }
              }
            }
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
