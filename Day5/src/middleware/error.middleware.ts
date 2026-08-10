import type { Request, Response, NextFunction } from "express";

export interface APPError extends Error {
  status: number;
}

export const globalErrorHandler = (
  err: APPError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
};
