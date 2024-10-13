/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * MBA Marketplace API
 * API to manage MBA Marketplace
 * OpenAPI spec version: 1.0
 */
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import * as axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { UploadAttachmentsResponse } from '.././model'

/**
 * @summary Upload attachments
 */
export const uploadAttachmentsControllerHandle = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<UploadAttachmentsResponse>> => {
  const formData = new FormData()
  formData.append('data')

  return axios.default.post('/attachments', formData, options)
}

export const getUploadAttachmentsControllerHandleMutationOptions = <
  TError = AxiosError<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>,
    TError,
    void,
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>,
  TError,
  void,
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>,
    void
  > = () => {
    return uploadAttachmentsControllerHandle(axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UploadAttachmentsControllerHandleMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>
>

export type UploadAttachmentsControllerHandleMutationError = AxiosError<unknown>

/**
 * @summary Upload attachments
 */
export const useUploadAttachmentsControllerHandle = <
  TError = AxiosError<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>,
    TError,
    void,
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadAttachmentsControllerHandle>>,
  TError,
  void,
  TContext
> => {
  const mutationOptions =
    getUploadAttachmentsControllerHandleMutationOptions(options)

  return useMutation(mutationOptions)
}
