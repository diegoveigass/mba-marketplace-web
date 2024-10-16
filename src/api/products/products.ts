/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * MBA Marketplace API
 * API to manage MBA Marketplace
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { customInstance } from '../../lib/axios-instance'
import type {
  ChangeProductStatusResponse,
  CreateProductBody,
  CreateProductRequestBody,
  CreateProductResponse,
  GetProductResponse,
  ListAllProductsControllerHandleParams,
  ListAllProductsResponse,
  ListAllSellerProductsControllerHandleParams,
  ListAllSellerProductsResponse,
} from '.././model'

/**
 * @summary List all products from the seller
 */
export const listAllSellerProductsControllerHandle = (
  params?: ListAllSellerProductsControllerHandleParams,
  signal?: AbortSignal
) => {
  return customInstance<ListAllSellerProductsResponse>({
    url: `/products/me`,
    method: 'GET',
    params,
    signal,
  })
}

export const getListAllSellerProductsControllerHandleQueryKey = (
  params?: ListAllSellerProductsControllerHandleParams
) => {
  return [`/products/me`, ...(params ? [params] : [])] as const
}

export const getListAllSellerProductsControllerHandleQueryOptions = <
  TData = Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
  TError = void,
>(
  params?: ListAllSellerProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getListAllSellerProductsControllerHandleQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>
  > = ({ signal }) => listAllSellerProductsControllerHandle(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ListAllSellerProductsControllerHandleQueryResult = NonNullable<
  Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>
>
export type ListAllSellerProductsControllerHandleQueryError = undefined

export function useListAllSellerProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
  TError = void,
>(
  params: undefined | ListAllSellerProductsControllerHandleParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllSellerProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
  TError = void,
>(
  params?: ListAllSellerProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllSellerProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
  TError = void,
>(
  params?: ListAllSellerProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary List all products from the seller
 */

export function useListAllSellerProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
  TError = void,
>(
  params?: ListAllSellerProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllSellerProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListAllSellerProductsControllerHandleQueryOptions(
    params,
    options
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Create a product to sell
 */
export const sellProductControllerHandle = (
  createProductBody: CreateProductBody
) => {
  return customInstance<CreateProductResponse>({
    url: `/products`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createProductBody,
  })
}

export const getSellProductControllerHandleMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof sellProductControllerHandle>>,
    TError,
    { data: CreateProductBody },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof sellProductControllerHandle>>,
  TError,
  { data: CreateProductBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof sellProductControllerHandle>>,
    { data: CreateProductBody }
  > = props => {
    const { data } = props ?? {}

    return sellProductControllerHandle(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type SellProductControllerHandleMutationResult = NonNullable<
  Awaited<ReturnType<typeof sellProductControllerHandle>>
>
export type SellProductControllerHandleMutationBody = CreateProductBody
export type SellProductControllerHandleMutationError = undefined

/**
 * @summary Create a product to sell
 */
export const useSellProductControllerHandle = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof sellProductControllerHandle>>,
    TError,
    { data: CreateProductBody },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof sellProductControllerHandle>>,
  TError,
  { data: CreateProductBody },
  TContext
> => {
  const mutationOptions = getSellProductControllerHandleMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary List all products
 */
export const listAllProductsControllerHandle = (
  params?: ListAllProductsControllerHandleParams,
  signal?: AbortSignal
) => {
  return customInstance<ListAllProductsResponse>({
    url: `/products`,
    method: 'GET',
    params,
    signal,
  })
}

export const getListAllProductsControllerHandleQueryKey = (
  params?: ListAllProductsControllerHandleParams
) => {
  return [`/products`, ...(params ? [params] : [])] as const
}

export const getListAllProductsControllerHandleQueryOptions = <
  TData = Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
  TError = unknown,
>(
  params?: ListAllProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getListAllProductsControllerHandleQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listAllProductsControllerHandle>>
  > = ({ signal }) => listAllProductsControllerHandle(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ListAllProductsControllerHandleQueryResult = NonNullable<
  Awaited<ReturnType<typeof listAllProductsControllerHandle>>
>
export type ListAllProductsControllerHandleQueryError = unknown

export function useListAllProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
  TError = unknown,
>(
  params: undefined | ListAllProductsControllerHandleParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
  TError = unknown,
>(
  params?: ListAllProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
  TError = unknown,
>(
  params?: ListAllProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary List all products
 */

export function useListAllProductsControllerHandle<
  TData = Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
  TError = unknown,
>(
  params?: ListAllProductsControllerHandleParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listAllProductsControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListAllProductsControllerHandleQueryOptions(
    params,
    options
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get a product by its ID
 */
export const getProductControllerHandle = (
  id: unknown,
  signal?: AbortSignal
) => {
  return customInstance<GetProductResponse>({
    url: `/products/${id}`,
    method: 'GET',
    signal,
  })
}

export const getGetProductControllerHandleQueryKey = (id: unknown) => {
  return [`/products/${id}`] as const
}

export const getGetProductControllerHandleQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductControllerHandle>>,
  TError = void,
>(
  id: unknown,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductControllerHandle>>,
        TError,
        TData
      >
    >
  }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetProductControllerHandleQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getProductControllerHandle>>
  > = ({ signal }) => getProductControllerHandle(id, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getProductControllerHandle>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetProductControllerHandleQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductControllerHandle>>
>
export type GetProductControllerHandleQueryError = undefined

export function useGetProductControllerHandle<
  TData = Awaited<ReturnType<typeof getProductControllerHandle>>,
  TError = void,
>(
  id: unknown,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetProductControllerHandle<
  TData = Awaited<ReturnType<typeof getProductControllerHandle>>,
  TError = void,
>(
  id: unknown,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductControllerHandle>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProductControllerHandle>>,
          TError,
          TData
        >,
        'initialData'
      >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetProductControllerHandle<
  TData = Awaited<ReturnType<typeof getProductControllerHandle>>,
  TError = void,
>(
  id: unknown,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get a product by its ID
 */

export function useGetProductControllerHandle<
  TData = Awaited<ReturnType<typeof getProductControllerHandle>>,
  TError = void,
>(
  id: unknown,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getProductControllerHandle>>,
        TError,
        TData
      >
    >
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetProductControllerHandleQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Edit a product
 */
export const editProductControllerHandle = (
  id: unknown,
  createProductRequestBody: CreateProductRequestBody
) => {
  return customInstance<CreateProductResponse>({
    url: `/products/${id}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: createProductRequestBody,
  })
}

export const getEditProductControllerHandleMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof editProductControllerHandle>>,
    TError,
    { id: unknown; data: CreateProductRequestBody },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof editProductControllerHandle>>,
  TError,
  { id: unknown; data: CreateProductRequestBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof editProductControllerHandle>>,
    { id: unknown; data: CreateProductRequestBody }
  > = props => {
    const { id, data } = props ?? {}

    return editProductControllerHandle(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type EditProductControllerHandleMutationResult = NonNullable<
  Awaited<ReturnType<typeof editProductControllerHandle>>
>
export type EditProductControllerHandleMutationBody = CreateProductRequestBody
export type EditProductControllerHandleMutationError = undefined

/**
 * @summary Edit a product
 */
export const useEditProductControllerHandle = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof editProductControllerHandle>>,
    TError,
    { id: unknown; data: CreateProductRequestBody },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof editProductControllerHandle>>,
  TError,
  { id: unknown; data: CreateProductRequestBody },
  TContext
> => {
  const mutationOptions = getEditProductControllerHandleMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Change the product status
 */
export const changeProductStatusControllerHandle = (
  id: unknown,
  status: 'available' | 'cancelled' | 'sold'
) => {
  return customInstance<ChangeProductStatusResponse>({
    url: `/products/${id}/${status}`,
    method: 'PATCH',
  })
}

export const getChangeProductStatusControllerHandleMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof changeProductStatusControllerHandle>>,
    TError,
    { id: unknown; status: 'available' | 'cancelled' | 'sold' },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof changeProductStatusControllerHandle>>,
  TError,
  { id: unknown; status: 'available' | 'cancelled' | 'sold' },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof changeProductStatusControllerHandle>>,
    { id: unknown; status: 'available' | 'cancelled' | 'sold' }
  > = props => {
    const { id, status } = props ?? {}

    return changeProductStatusControllerHandle(id, status)
  }

  return { mutationFn, ...mutationOptions }
}

export type ChangeProductStatusControllerHandleMutationResult = NonNullable<
  Awaited<ReturnType<typeof changeProductStatusControllerHandle>>
>

export type ChangeProductStatusControllerHandleMutationError = undefined

/**
 * @summary Change the product status
 */
export const useChangeProductStatusControllerHandle = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof changeProductStatusControllerHandle>>,
    TError,
    { id: unknown; status: 'available' | 'cancelled' | 'sold' },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof changeProductStatusControllerHandle>>,
  TError,
  { id: unknown; status: 'available' | 'cancelled' | 'sold' },
  TContext
> => {
  const mutationOptions =
    getChangeProductStatusControllerHandleMutationOptions(options)

  return useMutation(mutationOptions)
}
