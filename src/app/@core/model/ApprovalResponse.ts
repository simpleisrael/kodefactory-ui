export interface ApprovalResponse {
  approvalStatus: 'PENDING' | 'APPROVED' | 'COMPLETED';
  remark: string;
  approvalRequestId: number
}
