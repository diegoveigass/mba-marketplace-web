/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * MBA Marketplace API
 * API to manage MBA Marketplace
 * OpenAPI spec version: 1.0
 */
import { useQuery } from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { customInstance } from '../../lib/axios-instance'
import type { ListAllCategoriesResponse } from '.././model'

/**
 * @summary List all categories
 */
export const listAllCategoriesControllerHandle = (signal?: AbortSignal) => {
  return customInstance<ListAllCategoriesResponse>({
    url: `/categories`,
    method: 'GET',
    signal,
  })
}

export const getListAllCategoriesControllerHandleQueryKey = () => {
  return [`/categories`] as const
}

export const getListAllCategoriesControllerHandleQueryOptions = <
  TData = Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
      TError,
      TData
    >
  >
}) => {
  const { query: queryOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getListAllCategoriesControllerHandleQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>
  > = ({ signal }) => listAllCategoriesControllerHandle(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ListAllCategoriesControllerHandleQueryResult = NonNullable<
  Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>
>
export type ListAllCategoriesControllerHandleQueryError = unknown

export function useListAllCategoriesControllerHandle<
  TData = Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
        TError,
        TData
      >,
      'initialData'
    >
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllCategoriesControllerHandle<
  TData = Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
        TError,
        TData
      >,
      'initialData'
    >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useListAllCategoriesControllerHandle<
  TData = Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
      TError,
      TData
    >
  >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary List all categories
 */

export function useListAllCategoriesControllerHandle<
  TData = Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof listAllCategoriesControllerHandle>>,
      TError,
      TData
    >
  >
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListAllCategoriesControllerHandleQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
