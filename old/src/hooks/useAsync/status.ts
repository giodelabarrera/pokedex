export const statusTypes = {
  loading: 'loading',
  success: 'success',
  error: 'error'
}

export const getStatusProps = status => ({
  status,
  isLoading: status === statusTypes.loading,
  isSuccess: status === statusTypes.success,
  isError: status === statusTypes.error,
  isSettled: status === statusTypes.success || status === statusTypes.error
})
