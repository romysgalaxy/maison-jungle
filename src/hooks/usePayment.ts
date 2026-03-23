import { useState } from "react";
import { PaymentService } from "../services/paymentService";
import type { PaymentData, PaymentResult } from "../types";

type UsePaymentReturn = {
  isProcessing: boolean;
  error: string | null;
  success: boolean;
  transactionResult: PaymentResult | null;
  processPayment: (paymentData: PaymentData) => Promise<PaymentResult>;
  resetPayment: () => void;
};

export const usePayment = (): UsePaymentReturn => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [transactionResult, setTransactionResult] = useState<PaymentResult | null>(null);

  const processPayment = async (paymentData: PaymentData) => {
    setIsProcessing(true);
    setError(null);
    setSuccess(false);
    setTransactionResult(null);

    try {
      const result = await PaymentService.processPayment(paymentData);
      setSuccess(true);
      setTransactionResult(result);
      return result;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = () => {
    setError(null);
    setSuccess(false);
    setTransactionResult(null);
  };

  return {
    isProcessing,
    error,
    success,
    transactionResult,
    processPayment,
    resetPayment,
  };
};
