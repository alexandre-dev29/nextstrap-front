import * as Types from "./graphqlTypes";
import * as Operations from "./graphqlTypes";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import * as Apollo from "@apollo/client";
import { QueryHookOptions, useQuery } from "@apollo/client";
import type React from "react";
import { ApolloClientContext, getApolloClient } from "../../config";

export async function getServerPageBanners(
  options: Omit<Apollo.QueryOptions<Types.BannersQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BannersQuery>({
    ...options,
    query: Operations.BannersDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageBannersComp = React.FC<{
  data?: Types.BannersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBanners =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.BannersQuery, Types.BannersQueryVariables>
  ) =>
  (WrappedComponent: PageBannersComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.BannersDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrBanners = {
  getServerPage: getServerPageBanners,
  withPage: withPageBanners,
};

export async function getServerPageBanner(
  options: Omit<Apollo.QueryOptions<Types.BannerQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BannerQuery>({
    ...options,
    query: Operations.BannerDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageBannerComp = React.FC<{
  data?: Types.BannerQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBanner =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.BannerQuery, Types.BannerQueryVariables>
  ) =>
  (WrappedComponent: PageBannerComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.BannerDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrBanner = {
  getServerPage: getServerPageBanner,
  withPage: withPageBanner,
};

export async function getServerPageCategories(
  options: Omit<Apollo.QueryOptions<Types.CategoriesQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CategoriesQuery>({
    ...options,
    query: Operations.CategoriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageCategoriesComp = React.FC<{
  data?: Types.CategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCategories =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.CategoriesQuery, Types.CategoriesQueryVariables>
  ) =>
  (WrappedComponent: PageCategoriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.CategoriesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCategories = {
  getServerPage: getServerPageCategories,
  withPage: withPageCategories,
};

export async function getServerPageCategory(
  options: Omit<Apollo.QueryOptions<Types.CategoryQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CategoryQuery>({
    ...options,
    query: Operations.CategoryDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageCategoryComp = React.FC<{
  data?: Types.CategoryQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCategory =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.CategoryQuery, Types.CategoryQueryVariables>
  ) =>
  (WrappedComponent: PageCategoryComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.CategoryDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCategory = {
  getServerPage: getServerPageCategory,
  withPage: withPageCategory,
};

export async function getServerPageFavorites(
  options: Omit<Apollo.QueryOptions<Types.FavoritesQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.FavoritesQuery>({
    ...options,
    query: Operations.FavoritesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageFavoritesComp = React.FC<{
  data?: Types.FavoritesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageFavorites =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.FavoritesQuery, Types.FavoritesQueryVariables>
  ) =>
  (WrappedComponent: PageFavoritesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.FavoritesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrFavorites = {
  getServerPage: getServerPageFavorites,
  withPage: withPageFavorites,
};

export async function getServerPageMainAllData(
  options: Omit<
    Apollo.QueryOptions<Types.MainPageAllDataQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.MainPageAllDataQuery>({
    ...options,
    query: Operations.MainPageAllDataDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageMainAllDataComp = React.FC<{
  data?: Types.MainPageAllDataQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageMainAllData =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.MainPageAllDataQuery,
      Types.MainPageAllDataQueryVariables
    >
  ) =>
  (WrappedComponent: PageMainAllDataComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.MainPageAllDataDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrMainAllData = {
  getServerPage: getServerPageMainAllData,
  withPage: withPageMainAllData,
};

export async function getServerPageProducts(
  options: Omit<Apollo.QueryOptions<Types.ProductsQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductsQuery>({
    ...options,
    query: Operations.ProductsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageProductsComp = React.FC<{
  data?: Types.ProductsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProducts =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.ProductsQuery, Types.ProductsQueryVariables>
  ) =>
  (WrappedComponent: PageProductsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.ProductsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProducts = {
  getServerPage: getServerPageProducts,
  withPage: withPageProducts,
};

export async function getServerPageProduct(
  options: Omit<Apollo.QueryOptions<Types.ProductQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductQuery>({
    ...options,
    query: Operations.ProductDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export type PageProductComp = React.FC<{
  data?: Types.ProductQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProduct =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.ProductQuery, Types.ProductQueryVariables>
  ) =>
  (WrappedComponent: PageProductComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.ProductDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProduct = {
  getServerPage: getServerPageProduct,
  withPage: withPageProduct,
};
