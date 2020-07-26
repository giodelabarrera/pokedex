export const statusTypes = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
}

export const getStatusProps = status => ({
  status,
  isPending: status === statusTypes.pending,
  isLoading: status === statusTypes.pending,
  isFulfilled: status === statusTypes.fulfilled,
  isResolved: status === statusTypes.fulfilled,
  isRejected: status === statusTypes.rejected,
  isSettled: status === statusTypes.fulfilled || status === statusTypes.rejected
})
